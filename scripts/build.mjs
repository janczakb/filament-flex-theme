import { build } from 'esbuild';
import { mkdir, writeFile, readdir, unlink } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { createHash } from 'node:crypto';
const directory = new URL('../resources/dist/', import.meta.url);
const manifest = {};
const nativeSelect = new URL('../../../vendor/filament/forms/dist/components/select.js', import.meta.url);
const {readFile} = await import('node:fs/promises');
const nativeCode = await readFile(nativeSelect, 'utf8');
const guard = '.split(/\\s+/).map(';
const guarded = '.split(/\\s+/).filter(Boolean).map(';
if ((nativeCode.split(guard).length - 1 !== 1) && (nativeCode.split(guarded).length - 1 !== 1)) throw new Error('Review the installed Filament select accessibility implementation before rebuilding.');
const patched = nativeCode.replace(guard, guarded);
const nativeHash = createHash('sha256').update(patched).digest('hex').slice(0,16);
const nativeFilename = `native-select-${nativeHash}.js`;

await mkdir(directory, { recursive: true });
await writeFile(new URL(nativeFilename, directory), patched);
manifest['native-select'] = nativeFilename;
const installed = JSON.parse(await readFile(new URL('../../../vendor/composer/installed.json', import.meta.url), 'utf8'));
manifest['native-select-version'] = installed.packages.find(p => p.name === 'filament/forms').version;
for (const [entry, source] of Object.entries({recovery:'recovery',keyboard:'keyboard-runtime','shortcut-recorder':'shortcut-recorder',announcements:'announcement-bar',search:'search-virtual',toast:'toast-stack',select:'table-select',navigation:'navigation-scroll','bottom-sheet':'bottom-sheet'})) {
    const result = await build({ entryPoints: [fileURLToPath(new URL(`../resources/js/${source}.js`, import.meta.url))], bundle: true, minify: true, format: 'esm', target: 'es2022', write: false });
    const code = result.outputFiles[0].contents;
    const hash = createHash('sha256').update(code).digest('hex').slice(0, 16);
    const filename = `${source}-${hash}.js`;
    await writeFile(new URL(filename, directory), code);
    manifest[entry] = filename;
    console.log(`Built ${filename} (${code.length} bytes)`);
}
await writeFile(new URL('manifest.json', directory), JSON.stringify(manifest, null, 2) + '\n');
for (const existing of await readdir(directory)) {
    if (/^(recovery|keyboard|keyboard-runtime|shortcut-recorder|announcement-bar|search-virtual|toast-stack|table-select|navigation-scroll|bottom-sheet|native-select)-[a-f0-9]+\.js$/.test(existing) && !Object.values(manifest).includes(existing)) await unlink(new URL(existing, directory));
}

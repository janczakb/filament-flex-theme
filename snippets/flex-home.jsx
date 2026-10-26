export const FlexHome = () => {
  const root = useRef(null);
  const laptopSection = useRef(null);
  const laptopFrame = useRef(null);
  const [laptopStatus, setLaptopStatus] = useState('loading');
  const [laptop3dEnabled, setLaptop3dEnabled] = useState(false);
  const [laptopScreen, setLaptopScreen] = useState(0);
  const [laptopEnding, setLaptopEnding] = useState(false);
  const [laptopMobile, setLaptopMobile] = useState(false);
  const [laptopMobileScreen, setLaptopMobileScreen] = useState(0);
  const laptopTouch = useRef(null);
  const film = useRef(null);
  const [filmOpen, setFilmOpen] = useState(false);
  const [appearance, setAppearance] = useState('tide');
  const [seenAppearances, setSeenAppearances] = useState(['tide']);
  const [layout, setLayout] = useState('sidebar');
  const [seenLayouts, setSeenLayouts] = useState(['sidebar']);
  const [copied, setCopied] = useState(false);
  const [integrationTab, setIntegrationTab] = useState('php');
  const [settingsIndex, setSettingsIndex] = useState(0);
  const settingsViewport = useRef(null);
  const settingsTouch = useRef(null);
  const assets = '/docs/assets/home/';
  const docs = '/docs/';
  const filmUrl = 'https://www.youtube.com/watch?v=POkDG3aMmgw';
  const checkout = 'https://shop.bjanczak.com/checkout/buy/2fa1e181-74d4-4889-994c-d066dcfc88b3';
  const homepage = 'https://flex-theme.bjanczak.com/docs';
  const licensePlans = [
    {name:'Single',price:49,description:'One project. One-time payment. All FLEX features and one year of free updates.'},
    {name:'Unlimited',price:139,description:'Unlimited projects. One-time payment. All FLEX features and one year of free updates.'},
  ];
  const productSchema = {
    '@context':'https://schema.org',
    '@type':['SoftwareApplication','Product'],
    '@id':homepage+'#flex-theme',
    name:'FLEX Theme',
    description:'A customizable Filament 5 admin panel theme with a visual theme editor, Global Search, keyboard shortcuts, announcements and floating panels.',
    url:homepage,
    image:'https://flex-theme.bjanczak.com/docs/assets/home/social-preview.png',
    applicationCategory:'DeveloperApplication',
    operatingSystem:'Platform independent',
    softwareRequirements:'PHP 8.3 or later and Filament 5',
    brand:{'@type':'Brand',name:'FLEX Theme'},
    mainEntityOfPage:homepage,
    featureList:['Visual theme editor','Light and dark modes','Colors, typography and branding','Classic and Inset panel layouts','Global Search with authorized resource actions','Configurable keyboard shortcuts and table navigation','Announcement bars with schedules and rotation','Floating panels and expandable bottom sheets','Field groups','Per-panel settings and PHP configuration'],
    offers:licensePlans.map(plan=>({'@type':'Offer',name:plan.name,description:plan.description,price:plan.price,priceCurrency:'USD',url:checkout})),
  };
  const laptopDocument = "<!doctype html>\n<html lang=\"en\"><head><meta charset=\"utf-8\"><meta name=\"viewport\" content=\"width=device-width,initial-scale=1\"><title>FLEX Theme scroll presentation</title><style>html,body{margin:0;width:100%;height:100%;overflow:hidden;background:transparent}canvas{display:block;width:100%;height:100%}</style></head><body><canvas id=\"flex-laptop-canvas\" aria-label=\"MacBook Air showing six real FLEX interfaces\"></canvas><script>(() => {\n  const reportError = () => parent.postMessage({ type: 'flex-laptop-error' }, parent.location.origin);\n  const load = (url) => {\n    const script = document.createElement('script');\n    script.src = url;\n    script.onerror = reportError;\n    document.body.appendChild(script);\n  };\n  const findRuntime = () => Array.from(parent.document.scripts).find(script => {\n    if (!script.src) return false;\n    return new URL(script.src).pathname.endsWith('/snippets/laptop-runtime.js');\n  });\n  const existing = findRuntime();\n  if (existing) { load(existing.src); return; }\n  const hostname = parent.location.hostname;\n  if (hostname === 'localhost' || hostname === '127.0.0.1') {\n    load(new URL('/snippets/laptop-runtime.js', parent.location.href).href);\n    return;\n  }\n  const observer = new MutationObserver(() => {\n    const runtime = findRuntime();\n    if (!runtime) return;\n    observer.disconnect();\n    load(runtime.src);\n  });\n  observer.observe(parent.document.documentElement, { childList: true, subtree: true });\n  addEventListener('pagehide', () => observer.disconnect(), { once: true });\n})();</script></body></html>\n";
  const Arrow = ({ diagonal = false }) => <svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d={diagonal ? 'M6 18 18 6M6 6h12v12' : 'M4 12h16m-6-6 6 6-6 6'} stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>;
  const LayoutIcon = ({ variant }) => variant === 'sidebar' ? <svg className="fl-native-layout-icon" aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg" width="36" height="24" viewBox="0 0 36 24" fill="none">
<g stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="0.75" y="0.75" width="34.5" height="22.5" rx="4.5" fill="none"/><g fill="currentColor"><rect x="3.75" y="3.75" width="6" height="16.5" rx="1.5"/></g></g>
</svg> : variant === 'topbar' ? <svg className="fl-native-layout-icon" aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg" width="36" height="24" viewBox="0 0 36 24" fill="none">
<g stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="0.75" y="0.75" width="34.5" height="22.5" rx="4.5" fill="none"/><g fill="currentColor"><rect x="3.75" y="3.75" width="28.5" height="4.5" rx="1.5"/></g></g>
</svg> : <svg className="fl-native-layout-icon" aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg" width="36" height="24" viewBox="0 0 36 24" fill="none">
<g stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="0.75" y="0.75" width="34.5" height="22.5" rx="4.5" fill="none"/><g fill="currentColor"><rect x="3.75" y="3.75" width="28.5" height="4.5" rx="1.5"/><rect x="3.75" y="11.25" width="6" height="9" rx="1.5"/></g></g>
</svg>;
  const appearances = [
    { id: 'tide', name: 'Tide', font: 'Manrope', shape: 'Rounded corners' },
    { id: 'baltic', name: 'Baltic', font: 'Space Grotesk', shape: 'Square corners' },
    { id: 'ember', name: 'Ember', font: 'Lora', shape: 'Soft corners' },
  ];

  const settingsSlides = [
    {id:'appearance',name:'Appearance',height:729,title:'Set the tone.',description:'Accent and base tint. Your own typeface. Independent corners for panels and form fields. Light, dark, or both.',features:['Accent & base tint','Fonts & corner styles','Light & dark modes'],href:'theme-settings/appearance'},
    {id:'colors',name:'Colors',height:723,title:'A palette with purpose.',description:'Define your semantic colors once. Preview the same components in light and dark, side by side.',features:['Semantic colors','Light & dark previews','Consistent component colors'],href:'theme-settings/colors'},
    {id:'brand',name:'Brand',height:688,title:'Make yourself at home.',description:'Give every panel its own name, logo and favicon. Choose separate assets for dark mode and a compact sidebar.',features:['Panel name & logos','Compact sidebar identity','Favicon'],href:'theme-settings/brand'},
    {id:'layout',name:'Layout',height:1473,title:'Give your workspace structure.',description:'Classic or Inset. Sidebar, topbar, or both. Set content width, spacing and the way navigation behaves.',features:['Classic & Inset','Three navigation layouts','Widths, spacing & sidebar'],href:'theme-settings/layout'},
    {id:'details',name:'Details',height:414,title:'Refine the finishing touches.',description:'Set the text scale, tune transitions and choose how your panel moves between light and dark.',features:['Text size','Interface transitions','Appearance transitions'],href:'theme-settings/details'},
    {id:'search',name:'Search',height:1007,title:'Find your own flow.',description:'Choose category navigation, window size and search behavior. Configure recent results, favorites and large result sets.',features:['Categories & window size','Recents & favorites','Result limits & virtualization'],href:'global-search/configuration'},
    {id:'keyboard',name:'Keyboard',height:1038,title:'Keep your hands on the keys.',description:'Record shortcuts for search, navigation and tables. Check every binding in the built-in reference.',features:['Record your shortcuts','Table & navigation controls','Built-in shortcut reference'],href:'workspace/table-shortcuts'},
  ];
  const selectSettings = index => { setSettingsIndex((index + settingsSlides.length) % settingsSlides.length); settingsViewport.current?.scrollTo({top:0,behavior:'instant'}); };
  const selectAppearance = id => { setSeenAppearances(previous=>previous.includes(id)?previous:[...previous,id]); setAppearance(id); };
  const selectLayout = id => { setSeenLayouts(previous=>previous.includes(id)?previous:[...previous,id]); setLayout(id); };

  useEffect(() => {
    if (!copied) return;
    const timer = window.setTimeout(() => setCopied(false), 2400);
    return () => window.clearTimeout(timer);
  }, [copied]);

  useEffect(() => {
    const node = root.current;
    if (!node || typeof window.IntersectionObserver !== 'function' || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const observer = new IntersectionObserver(entries => entries.forEach(entry => {
      if (entry.isIntersecting) { entry.target.classList.add('fl-in-view'); observer.unobserve(entry.target); }
    }), { threshold: 0.12 });
    node.querySelectorAll('[data-reveal]').forEach(el => observer.observe(el));
    node.classList.add('fl-motion-ready');
    const stage = node.querySelector('.fl-hero-stage');
    let frame = null;
    const update = () => {
      frame = null;
      if (!stage) return;
      const bounds = stage.getBoundingClientRect();
      const progress = Math.max(0, Math.min(1, (window.innerHeight - bounds.top) / window.innerHeight));
      stage.style.setProperty('--fl-progress', progress.toFixed(4));
    };
    const scroll = () => { if (frame === null) frame = requestAnimationFrame(update); };
    window.addEventListener('scroll', scroll, { passive: true });
    window.addEventListener('resize', scroll, { passive: true });
    update();
    return () => { observer.disconnect(); window.removeEventListener('scroll', scroll); window.removeEventListener('resize', scroll); if (frame !== null) cancelAnimationFrame(frame); };
  }, []);

  useEffect(() => {
    const section = laptopSection.current;
    if (!section) return;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
    const compact = window.matchMedia('(max-width: 700px)');
    let frame = null;
    const update = () => {
      frame = null;
      const bounds = section.getBoundingClientRect();
      const distance = Math.max(1, section.offsetHeight - window.innerHeight);
      setLaptopMobile(compact.matches);
      setLaptop3dEnabled(!reduced.matches && !navigator.connection?.saveData);
      const progress = compact.matches ? .075 + .66 * laptopMobileScreen / 5 : reduced.matches ? 0 : Math.max(0, Math.min(1, -bounds.top / distance));
      const position = Math.max(0, Math.min(1, (progress - 0.075) / 0.66)) * 5;
      const index = Math.min(5, Math.floor(position) + (position % 1 > .86 ? 1 : 0));
      setLaptopScreen(previous => previous === index ? previous : index);
      setLaptopEnding(progress > .875);
      section.style.setProperty('--laptop-progress', progress.toFixed(5));
      section.dataset.releasing = bounds.bottom < window.innerHeight ? 'true' : 'false';
      section.dataset.leaving = progress > .84 ? 'true' : 'false';
      root.current?.classList.toggle('fl-over-laptop', bounds.bottom > 88 && bounds.top <= 88);
      laptopFrame.current?.contentWindow?.postMessage({ type: 'flex-laptop-progress', progress, active: bounds.bottom > 0 && bounds.top < window.innerHeight }, window.location.origin);
    };
    const schedule = () => { if (frame === null) frame = requestAnimationFrame(update); };
    const receive = event => {
      if (event.origin !== window.location.origin || event.source !== laptopFrame.current?.contentWindow) return;
      if (event.data?.type === 'flex-laptop-ready') { setLaptopStatus('ready'); schedule(); }
      if (event.data?.type === 'flex-laptop-error') setLaptopStatus('error');
    };
    window.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', schedule, { passive: true });
    window.addEventListener('message', receive);
    reduced.addEventListener('change', schedule);
    compact.addEventListener('change', schedule);
    schedule();
    return () => { window.removeEventListener('scroll', schedule); window.removeEventListener('resize', schedule); window.removeEventListener('message', receive); reduced.removeEventListener('change', schedule); compact.removeEventListener('change', schedule); if (frame !== null) cancelAnimationFrame(frame); };
  }, [laptopMobileScreen]);

  const openFilm = event => { event?.preventDefault(); setFilmOpen(true); film.current?.showModal(); };
  const closeFilm = () => { film.current?.close(); setFilmOpen(false); };
  const copyInstall = async () => {
    try { await navigator.clipboard.writeText('composer require flex/theme:^0.1'); setCopied(true); }
    catch (_) { setCopied(false); }
  };

  return <main id="flex-home" className="fl-home not-prose" ref={root}>
    {laptop3dEnabled && <link rel="preload" href={(typeof window !== 'undefined' && ['localhost','127.0.0.1'].includes(window.location.hostname)) ? '/docs/assets/laptop/macbook-air-web.glb.txt' : '/docs/assets/laptop/macbook-air-web-3ed3ede8716f.gltf.json'} as="fetch" crossOrigin="anonymous"/>}
    <script id="fl-product-schema" type="application/ld+json">{JSON.stringify(productSchema).replace(/</g,'\\u003c')}</script>
    <a href="#fl-main" className="fl-skip">Skip to content</a>
    <nav className="fl-nav" aria-label="FLEX Theme">
      <a className="fl-brand" href={docs + 'index'} aria-label="FLEX Theme home"><img src={assets + 'wordmark.svg'} width="100" height="30" alt="FLEX"/><span>Theme</span></a>
      <div className="fl-nav-links"><a href="#fl-design">Design</a><a href="#fl-workflow">Experience</a><a href="#fl-pricing">Pricing</a><a href={docs + 'theme-settings/overview'}>Documentation <Arrow diagonal/></a></div>
      <div className="fl-nav-actions"><a className="fl-nav-start" href={docs + 'theme-settings/overview#installation'}>Start building</a><a className="fl-nav-cta" href={checkout}>Buy now <Arrow/></a></div>
    </nav>

    <section id="fl-main" className="fl-hero" aria-labelledby="fl-hero-title">
      <section className="fl-laptop-scroll" ref={laptopSection} data-status={laptop3dEnabled ? laptopStatus : 'static'} aria-label={laptopMobile ? 'Explore six real FLEX Theme screens' : 'Explore six sides of FLEX Theme by scrolling'}>
        <div className="fl-laptop-pin" onTouchStart={event => { laptopTouch.current = [event.touches[0].clientX,event.touches[0].clientY]; }} onTouchEnd={event => {
          if (!laptopMobile || !laptopTouch.current) return;
          const dx = event.changedTouches[0].clientX - laptopTouch.current[0];
          const dy = event.changedTouches[0].clientY - laptopTouch.current[1];
          if (Math.abs(dx) > 40 && Math.abs(dx) > Math.abs(dy) * 1.3) setLaptopMobileScreen(previous => (previous + (dx < 0 ? 1 : 5)) % 6);
          laptopTouch.current = null;
        }}>
          <div className="fl-laptop-atmosphere" aria-hidden="true">
            <span className="fl-laptop-halo"/>
            <span className="fl-laptop-arc fl-laptop-arc-left"/><span className="fl-laptop-arc fl-laptop-arc-right"/>
            <span className="fl-laptop-glass fl-laptop-glass-left"><span/></span>
            <span className="fl-laptop-glass fl-laptop-glass-right"><span/></span>
            <span className="fl-laptop-light-sweep"/>
          </div>
          <div className="fl-laptop-heading"><p className="fl-laptop-kicker">Your panel.</p><h1 id="fl-hero-title"><span className="fl-sr-only">FLEX Theme for Filament 5. </span>Reimagined.</h1></div>
          <div className="fl-laptop-closing" aria-hidden={laptopEnding ? undefined : true}><h2><span className="fl-laptop-closing-line fl-laptop-closing-first"><span>Less code.</span></span><span className="fl-laptop-closing-line fl-laptop-closing-second"><span>More character.</span></span></h2><a className="fl-button fl-button-primary" href={docs + 'theme-settings/overview'} tabIndex={laptopEnding ? 0 : -1}>Explore FLEX Theme <Arrow/></a></div>
          <div className="fl-laptop-world"><div className="fl-laptop-fallback" role="img" aria-label="FLEX Theme in Safari on macOS"><picture><source media="(max-width: 1023px)" srcSet={'/docs/assets/laptop/screens/' + (laptopScreen === 1 ? '02-overview-desktop' : '01-campaigns-desktop') + '.webp'}/><img className="fl-laptop-desktop" src={'/docs/assets/laptop/screens/' + (laptopScreen === 1 ? '02-overview-desktop' : '01-campaigns-desktop') + '-retina.webp'} width="2056" height="1329" alt="" fetchPriority="high" decoding="async"/></picture>{laptopScreen > 1 && <img className="fl-laptop-safari-client" src={'/docs/assets/laptop/screens/' + ['','','03-brief','04-appearance','05-keyboard','06-search'][laptopScreen] + '-safari.webp'} width="2025" height="1123" alt=""/>}</div>{laptop3dEnabled && <iframe ref={laptopFrame} srcDoc={laptopDocument} title="Interactive 3D laptop displaying real FLEX Theme screens" loading="eager" tabIndex={-1}/>}</div>
          <div className="fl-laptop-footer">
            <div className="fl-laptop-current" aria-live="polite" aria-atomic="true"><span className="fl-laptop-count">0{laptopScreen + 1}<span> / 06</span></span><span className="fl-laptop-view">{['Campaigns','Workspace overview','Campaign brief','Appearance','Keyboard shortcuts','Global search'][laptopScreen]}</span></div>
            <div className="fl-laptop-mobile-controls"><button onClick={() => setLaptopMobileScreen(previous => (previous + 5) % 6)} aria-label="Previous laptop screen"><Arrow/></button><button onClick={() => setLaptopMobileScreen(previous => (previous + 1) % 6)} aria-label="Next laptop screen"><Arrow/></button></div>
            <a className="fl-laptop-advance" href="#fl-after-laptop" aria-label="Skip the presentation and explore FLEX Theme"><svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M12 4v16m-6-6 6 6 6-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg></a>
            <a className="fl-laptop-film" href={filmUrl} onClick={openFilm}>Watch the film <span>↗</span></a>
          </div>
        </div>
      </section>
    </section>

    <section id="fl-after-laptop" className="fl-intro-story fl-container" aria-labelledby="fl-story-title">
      <div className="fl-story-surface">
        <div className="fl-story-copy" data-reveal><p className="fl-eyebrow">FLEX THEME FOR FILAMENT 5</p><h2 id="fl-story-title">Same Filament.<br/><span>A whole new feel.</span></h2><p>A visual theme editor, Global Search and keyboard controls for your Filament admin panel. Built on the components you already know.</p><a className="fl-text-link" href="#fl-design">Make it your own <Arrow/></a></div>
        <div className="fl-story-details" data-reveal>
          <div><span className="fl-story-index">01</span><div><h3>Native at heart.</h3><p>Real Filament components. One consistent design language.</p></div></div>
          <div><span className="fl-story-index">02</span><div><h3>Your signature, throughout.</h3><p>Colors, type, corners and layouts. All in the theme editor.</p></div></div>
          <div><span className="fl-story-index">03</span><div><h3>Keep your flow.</h3><p>Global Search, shortcuts and floating panels. Work stays within reach.</p></div></div>
        </div>
      </div>
    </section>

    <section id="fl-design" className="fl-design fl-container" aria-labelledby="fl-design-title">
      <div className="fl-section-heading" data-reveal><div><p className="fl-eyebrow">01 / MAKE IT YOURS</p><h2 id="fl-design-title">Your app.<br/><span>Your signature.</span></h2></div><p>A color. A typeface. A softer corner.<br/>Change the look. Keep the foundations.<br/><a className="fl-text-link" href={docs + 'theme-settings/appearance'}>Explore Appearance <Arrow/></a></p></div>
      <div className="fl-appearance-slider" data-reveal role="region" aria-roledescription="carousel" aria-label="Real FLEX appearances">
        <div className="fl-real-panel-images">{appearances.map(item => <img key={item.id} className={appearance === item.id ? 'fl-panel-visible' : ''} src={seenAppearances.includes(item.id) ? assets + 'appearance-' + item.id + '.webp' : undefined} width="1600" height="1100" alt={appearance === item.id ? 'Real FLEX Campaign brief with ' + item.name + ' colors and ' + item.font + ' typography' : ''} aria-hidden={appearance !== item.id} loading="lazy" decoding="async"/>)}</div>
        <div className="fl-slider-toolbar">
          <div className="fl-slide-caption" aria-live="polite"><span className="fl-slide-number">0{appearances.findIndex(item => item.id === appearance) + 1}<span> / 03</span></span><div><strong>{appearances.find(item => item.id === appearance).name}</strong><span>{appearances.find(item => item.id === appearance).font} · {appearances.find(item => item.id === appearance).shape}</span></div></div>
          <div className="fl-slider-navigation"><div className="fl-slider-progress">{appearances.map(item => <button key={item.id} aria-label={'Show ' + item.name + ' appearance'} aria-pressed={appearance === item.id} onClick={() => selectAppearance(item.id)}><span/></button>)}</div><div className="fl-slider-arrows"><button aria-label="Previous appearance" onClick={() => selectAppearance(appearances[(appearances.findIndex(item => item.id === appearance) + 2) % 3].id)}><Arrow/></button><button aria-label="Next appearance" onClick={() => selectAppearance(appearances[(appearances.findIndex(item => item.id === appearance) + 1) % 3].id)}><Arrow/></button></div></div>
        </div>
      </div>
    </section>

    <section id="fl-workflow" className="fl-search-section" aria-labelledby="fl-search-title">
      <div className="fl-container fl-search-grid">
        <div className="fl-search-copy" data-reveal><p className="fl-eyebrow">02 / LESS LOOKING. MORE DOING.</p><h2 id="fl-search-title">Find it.<br/>Act on it.<br/><em>Keep moving.</em></h2><p>Search people, pages and resources from one place. Open a record, edit it in a modal, or run an authorized action without losing your context.</p><a className="fl-text-link" href={docs + 'global-search/overview'}>Go inside Global Search <Arrow/></a></div>
        <figure className="fl-search-art fl-real-search" data-reveal><img src={assets + 'search.webp'} width="1724" height="1240" alt="The real FLEX Global Search modal in dark mode with Discover, Users, Recent and Favorites navigation" loading="lazy" decoding="async"/><figcaption>Everything in reach. Nothing out of place.</figcaption></figure>
      </div>
    </section>

    <section className="fl-features fl-container" aria-labelledby="fl-features-title">
      <div className="fl-section-heading" data-reveal><div><p className="fl-eyebrow">03 / FORMS, PANELS & NOTIFICATIONS</p><h2 id="fl-features-title">Small details.<br/>Better everyday work.</h2></div><p>Keep forms clear. Give tasks room.<br/>Let updates stay out of the way.</p></div>
      <div className="fl-feature-grid">
        <a className="fl-feature fl-feature-sheet" data-reveal href={docs + 'components/bottom-sheet'}><div className="fl-feature-copy"><span className="fl-feature-number">01</span><h3>More room.<br/>One smooth move.</h3><p>Floating side panels and expandable bottom sheets. Keep the task in focus and the page within reach.</p><span className="fl-feature-arrow"><Arrow diagonal/></span></div><img src={assets + 'bottom-sheet.webp'} width="1920" height="1080" alt="A detached, rounded bottom sheet in FLEX Theme dark mode" loading="lazy" decoding="async"/></a>
        <a className="fl-feature fl-feature-groups" data-reveal href={docs + 'components/field-groups'}><div className="fl-feature-copy"><span className="fl-feature-number">02</span><h3>Clear labels.<br/>A better flow.</h3><p>Field groups pair labels and descriptions with native form controls. Settings that are easier to scan, and easier to use.</p><span className="fl-feature-arrow"><Arrow diagonal/></span></div><img src={assets + 'field-groups.webp'} width="1330" height="836" alt="Workspace overview and Field groups with a switch and a provider select" loading="lazy" decoding="async"/></a>
        <article className="fl-feature fl-feature-notifications" data-reveal><div className="fl-feature-copy"><span className="fl-feature-number">03</span><h3>Stay informed.<br/>Stay in your flow.</h3><p>Stacked notifications expand when you need them and step aside when you don’t.</p></div><picture className="fl-notification-preview"><source media="(prefers-reduced-motion: reduce)" srcSet={assets + 'notification-stack-poster.webp'}/><img src={assets + 'notification-stack-motion.webp'} width="1160" height="650" alt="Close-up of real FLEX notifications in the panel’s upper-right corner, expanding and collapsing as a stack" loading="lazy" decoding="async"/></picture></article>
      </div>
    </section>

    <section className="fl-workflow-story fl-container" aria-labelledby="fl-keys-title">
      <div className="fl-keys-story" data-reveal><div className="fl-keys-copy"><p className="fl-eyebrow">LESS REACHING. MORE DOING.</p><h2 id="fl-keys-title">Your keyboard.<br/><span>A faster workflow.</span></h2><p>Move through records. Select rows. Open filters. Assign the shortcuts that work for you — and keep your hands on the keyboard.</p><div className="fl-key-examples" aria-label="Default table shortcuts"><span><span className="fl-native-keycaps"><kbd>J</kbd><kbd>K</kbd></span> Navigate</span><span><span className="fl-native-keycaps"><kbd>A</kbd></span> Select</span><span><span className="fl-native-keycaps"><kbd>F</kbd></span> Filter</span></div><a className="fl-text-link" href={docs + 'workspace/table-shortcuts'}>Explore table shortcuts <Arrow/></a><p className="fl-recovery-note">A change of mind? Undo supported actions when recovery is configured. <a href={docs + 'workspace/recovery'}>See how recovery works.</a></p></div><div className="fl-keys-image"><picture><source media="(prefers-reduced-motion: reduce)" srcSet={assets+'table-keyboard-poster.webp'}/><img src={assets + 'table-keyboard-native.webp'} width="2200" height="1205" alt="Real FLEX campaign table: J and K move between rows, A selects and deselects records" loading="lazy" decoding="async"/></picture></div></div>

    </section>

    <section id="fl-announcements" className="fl-announcements-showcase fl-container" aria-labelledby="fl-announcements-title">
      <div className="fl-section-heading" data-reveal><div><p className="fl-eyebrow">YOUR NEWS. PART OF THE EXPERIENCE.</p><h2 id="fl-announcements-title">A little space.<br/><span>A message that matters.</span></h2></div><p>Reach the whole panel or a single page.<br/>Rotate your news. Schedule your launch.<br/>Count down to what’s next.</p></div>
      <div className="fl-announcements-examples" data-reveal>
        {[
          ['rotation','Keep the conversation moving.','Rotating messages with links, playback controls and dismissal.'],
          ['colors','The right tone for every message.','Individual colors, icons and actions. Separate light and dark palettes.'],
          ['countdown','Build up to the moment.','Count down to a launch, event or deadline, right inside your panel.'],
        ].map(([id,title,description],index) => <figure key={id} className={'fl-announcement-example fl-announcement-example-'+id}><figcaption><span>0{index+1}</span><div><h3>{title}</h3><p>{description}</p></div></figcaption><img src={assets+'announcement-'+id+'.webp'} width="898" height="72" loading="lazy" decoding="async" alt={'Real FLEX announcement: '+title}/></figure>)}
      </div>
      <div className="fl-announcements-footer"><p>Global or inline. Scheduled or live.<br/>Configured in PHP. Styled by FLEX.</p><a className="fl-text-link" href={docs+'announcements/overview'}>Explore announcements <Arrow/></a></div>
    </section>

    <section id="fl-theme-editor" className="fl-settings-showcase fl-container" aria-labelledby="fl-settings-title">
      <div className="fl-section-heading" data-reveal><div><p className="fl-eyebrow">THE THEME EDITOR</p><h2 id="fl-settings-title">One editor.<br/><span>Every side of your theme.</span></h2></div><p>From the first color to the last shortcut.<br/>Explore seven tabs for your panel’s<br/>appearance, identity and workflow.</p></div>
      <div className="fl-settings-presentation" data-reveal>
        <div className="fl-settings-tabs" role="tablist" aria-label="Explore Theme Settings">{settingsSlides.map((slide,index) => <button key={slide.id} id={'fl-settings-tab-'+slide.id} type="button" role="tab" aria-selected={settingsIndex===index} aria-controls="fl-settings-slide" onClick={()=>selectSettings(index)} onKeyDown={event=>{if(event.key==='ArrowRight'||event.key==='ArrowLeft'){event.preventDefault();const next=(settingsIndex+(event.key==='ArrowRight'?1:6))%7;selectSettings(next);event.currentTarget.parentElement.children[next]?.focus();}}}><img src={'/docs/assets/settings/'+slide.id+'-icon.svg'} width="20" height="20" alt=""/>{slide.name}</button>)}</div>
        <div id="fl-settings-slide" role="tabpanel" aria-labelledby={'fl-settings-tab-'+settingsSlides[settingsIndex].id} className="fl-settings-slide">
          <div className="fl-settings-caption" aria-live="polite"><div><span className="fl-settings-counter">0{settingsIndex+1} / 07</span><h3>{settingsSlides[settingsIndex].title}</h3><p>{settingsSlides[settingsIndex].description}</p></div><div className="fl-settings-arrows"><button type="button" aria-label="Previous settings tab" onClick={()=>selectSettings(settingsIndex-1)}><Arrow/></button><button type="button" aria-label="Next settings tab" onClick={()=>selectSettings(settingsIndex+1)}><Arrow/></button></div></div>
          <div className="fl-settings-screen" ref={settingsViewport} tabIndex="0" aria-label={settingsSlides[settingsIndex].name+' settings screenshot. Scroll to view all settings.'} onTouchStart={event=>{settingsTouch.current={x:event.touches[0].clientX,y:event.touches[0].clientY};}} onTouchEnd={event=>{const start=settingsTouch.current;if(!start)return;const dx=event.changedTouches[0].clientX-start.x,dy=event.changedTouches[0].clientY-start.y;if(Math.abs(dx)>60&&Math.abs(dx)>Math.abs(dy)*1.5)selectSettings(settingsIndex+(dx<0?1:-1));settingsTouch.current=null;}}><img key={settingsSlides[settingsIndex].id} src={'/docs/assets/settings/'+settingsSlides[settingsIndex].id+'.webp'} width="1152" height={settingsSlides[settingsIndex].height} alt={'Actual FLEX Theme Settings — '+settingsSlides[settingsIndex].name+' tab with all its controls'} loading="lazy" decoding="async"/></div>
          <div className="fl-settings-bottom"><span>Real panel. Real settings. <span className="fl-settings-scroll-note">Scroll the preview to see more.</span></span><a href={docs+settingsSlides[settingsIndex].href}>Explore {settingsSlides[settingsIndex].name} <Arrow diagonal/></a></div>
        </div>
      </div>
    </section>

    <section className="fl-layout-section" aria-labelledby="fl-layout-title"><div className="fl-container"><div className="fl-layout-heading" data-reveal><p className="fl-eyebrow">04 / A SPACE THAT WORKS FOR YOU</p><h2 id="fl-layout-title">A different point of view.<br/><span>The same attention to detail.</span></h2><p>Sidebar, topbar or a little of both. Give your workspace the structure it needs.</p><div className="fl-layout-options" aria-label="Preview navigation layouts">{[['sidebar','Sidebar'],['topbar','Topbar'],['combined','Sidebar + topbar']].map(([value,label]) => <button key={value} aria-pressed={layout === value} onClick={() => selectLayout(value)}><LayoutIcon variant={value}/>{label}</button>)}</div></div><div className="fl-layout-image" data-reveal>{['sidebar','topbar','combined'].map(item => <img key={item} className={layout === item ? 'fl-layout-active' : ''} src={seenLayouts.includes(item) ? assets + 'layout-' + item + '.webp' : undefined} width="2200" height="1238" alt={item === layout ? 'FLEX dashboard using ' + (item === 'combined' ? 'sidebar and topbar' : item) + ' navigation' : ''} aria-hidden={layout !== item} loading="lazy" decoding="async"/>)}</div><a className="fl-text-link fl-layout-link" href={docs + 'theme-settings/layout'}>Explore every layout option <Arrow/></a></div></section>

    <section id="fl-integration" className="fl-integration" aria-labelledby="fl-integration-title">
      <div className="fl-container">
        <div className="fl-integration-heading" data-reveal><p className="fl-eyebrow">FLEX THEME. NATIVE FILAMENT.</p><h2 id="fl-integration-title">Keep your logic.<br/><span>Change the experience.</span></h2><p>Keep the forms, tables, actions and permissions your app already relies on. Add FLEX, then shape your colors, typography, branding and layouts in one visual editor.</p></div>
        <div className="fl-integration-workbench" data-reveal>
          <div className="fl-integration-guide"><span className="fl-integration-label">A FAMILIAR STARTING POINT</span><h3>Your panel.<br/>Your codebase.</h3><p>Register the plugin in your Panel Provider and add FLEX to your native theme build. The installation guide covers licensing, assets and permissions.</p><a className="fl-button fl-integration-cta" href={docs+'theme-settings/overview#installation'}>Read the installation guide <Arrow/></a><a className="fl-integration-secondary" href={docs+'theme-settings/panels-permissions'}>Multiple panels & permissions <Arrow diagonal/></a></div>
          <div className="fl-integration-editor">
            <div className="fl-integration-files" role="tablist" aria-label="FLEX integration examples">{[['php','Panel Provider'],['css','Theme CSS']].map(([id,label])=><button key={id} id={'fl-code-tab-'+id} type="button" role="tab" aria-selected={integrationTab===id} aria-controls="fl-code-example" tabIndex={integrationTab===id?0:-1} onClick={()=>setIntegrationTab(id)} onKeyDown={event=>{if(event.key==='ArrowLeft'||event.key==='ArrowRight'){event.preventDefault();setIntegrationTab(id==='php'?'css':'php');event.currentTarget.parentElement.children[id==='php'?1:0]?.focus();}}}><span className={'fl-file-type fl-file-type-'+id} aria-hidden="true">{id==='php'?'PHP':'CSS'}</span>{label}</button>)}</div>
            <div id="fl-code-example" role="tabpanel" aria-labelledby={'fl-code-tab-'+integrationTab} tabIndex="0" className="fl-integration-code"><p className="fl-integration-filename">{integrationTab==='php'?'AdminPanelProvider.php':'theme.css'}</p>{integrationTab==='php'?<pre><code><span className="fl-syntax-keyword">use</span> <span className="fl-syntax-class">Flex\Theme\FlexThemePlugin</span>;{'\n\n'}<span className="fl-syntax-keyword">return</span> <span className="fl-syntax-variable">$panel</span>{'\n'}    -&gt;<span className="fl-syntax-function">plugin</span>(<span className="fl-syntax-class">FlexThemePlugin</span>::<span className="fl-syntax-function">make</span>()){'\n'}    -&gt;<span className="fl-syntax-function">viteTheme</span>({'\n'}        <span className="fl-syntax-string">'resources/css/filament/admin/theme.css'</span>{'\n'}    );</code></pre>:<pre><code><span className="fl-syntax-comment">/* Keep the native theme imports, then add: */</span>{'\n\n'}<span className="fl-syntax-keyword">@import</span> <span className="fl-syntax-string">'../../../../vendor/flex/theme/resources/css/theme.css'</span>;{'\n'}<span className="fl-syntax-keyword">@source</span> <span className="fl-syntax-string">'../../../../vendor/flex/theme/src/**/*.php'</span>;{'\n'}<span className="fl-syntax-keyword">@source</span> <span className="fl-syntax-string">'../../../../vendor/flex/theme/resources/views/**/*.blade.php'</span>;</code></pre>}</div>
            <div className="fl-integration-install"><div><span>AFTER LICENSE SETUP</span><code>composer require flex/theme:^0.1</code></div><button type="button" onClick={copyInstall} aria-label="Copy Composer installation command"><svg viewBox="0 0 24 24" fill="none" aria-hidden="true">{copied?<path d="m5 12 4 4L19 6"/>:<><rect x="8" y="8" width="12" height="12" rx="3"/><path d="M15 4H7a3 3 0 0 0-3 3v8"/></>}</svg><span className="fl-sr-only">{copied?'Copied':'Copy'}</span></button><span className="fl-sr-only" role="status">{copied?'Installation command copied.':''}</span></div>
          </div>
        </div>
        <div className="fl-integration-principles" data-reveal><p><span>01</span><strong>Native components.</strong> Keep the foundations you know.</p><p><span>02</span><strong>Visual settings.</strong> Make the design your own.</p><p><span>03</span><strong>PHP control.</strong> Set the rules for each panel.</p></div>
      </div>
    </section>

    <section id="fl-pricing" className="fl-pricing fl-container" aria-labelledby="fl-pricing-title">
      <div className="fl-pricing-heading" data-reveal><p className="fl-eyebrow">MAKE YOUR NEXT PANEL A FLEX PANEL.</p><h2 id="fl-pricing-title">Buy once.<br/><span>Make it yours.</span></h2><p>Single or Unlimited. No subscription.<br/>A full year of free updates with either license.</p></div>
      <div className="fl-pricing-grid" data-reveal>
        <article className="fl-price-card fl-price-single" aria-labelledby="fl-single-title">
          <div className="fl-price-top"><span className="fl-price-label">FOCUS ON WHAT’S NEXT</span><span className="fl-license-symbol" aria-hidden="true">01</span></div>
          <h3 id="fl-single-title">Single</h3><p className="fl-price-description">One project. Make it unmistakably yours.</p>
          <p className="fl-price"><span className="fl-price-currency">$</span>{licensePlans[0].price}<span className="fl-price-unit">USD</span></p><p className="fl-price-payment"><strong>One-time payment.</strong> No subscription.</p>
          <a className="fl-price-cta" href={checkout}>Get Single <Arrow/></a>
          <div className="fl-price-includes"><span>THE COMPLETE FLEX EXPERIENCE</span><p>All FLEX features.<br/><strong>All updates free for one year.</strong></p></div>
        </article>
        <article className="fl-price-card fl-price-unlimited" aria-labelledby="fl-unlimited-title">
          <div className="fl-price-top"><span className="fl-price-label">KEEP THE POSSIBILITIES OPEN</span><span className="fl-license-symbol" aria-hidden="true">∞</span></div>
          <h3 id="fl-unlimited-title">Unlimited</h3><p className="fl-price-description">Your next project. And the one after that.</p>
          <p className="fl-price"><span className="fl-price-currency">$</span>{licensePlans[1].price}<span className="fl-price-unit">USD</span></p><p className="fl-price-payment"><strong>One-time payment.</strong> No subscription.</p>
          <a className="fl-price-cta" href={checkout}>Get Unlimited <Arrow/></a>
          <div className="fl-price-includes"><span>THE COMPLETE FLEX EXPERIENCE</span><p>All FLEX features. Unlimited projects.<br/><strong>All updates free for one year.</strong></p></div>
        </article>
      </div>
      <p className="fl-pricing-note">One payment. One year of updates included. Prices in USD. <a href={docs + 'theme-settings/overview'}>Explore the documentation <Arrow diagonal/></a></p>
    </section>

    <section className="fl-faq fl-container" aria-labelledby="fl-faq-title"><div data-reveal><p className="fl-eyebrow">A FEW THINGS WORTH KNOWING</p><h2 id="fl-faq-title">Before you build.</h2></div><div className="fl-faq-items" data-reveal>
      <details><summary>What is FLEX Theme?<span aria-hidden="true">+</span></summary><p>FLEX Theme is a design and workflow toolkit for Filament 5. It combines a configurable admin panel theme with Global Search, keyboard navigation, announcements, Field groups and floating panels.</p></details>
      <details><summary>Can I customize my Filament panel without writing CSS?<span aria-hidden="true">+</span></summary><p>Yes. Theme Settings lets you change colors, typography, corner styles, branding and layouts visually. Register FLEX in your Panel Provider first. Announcements and advanced integrations are configured in PHP. <a href={docs + 'theme-settings/overview'}>Explore Theme Settings.</a></p></details>
      <details><summary>Does FLEX support keyboard navigation in tables?<span aria-hidden="true">+</span></summary><p>Yes. Navigate rendered records, select rows, open filters and move between pages. Record your own shortcuts in Theme Settings. Supported actions can also offer Undo when you configure recovery. <a href={docs + 'workspace/table-shortcuts'}>See table controls.</a></p></details>
      <details><summary>Can different panels have different settings?<span aria-hidden="true">+</span></summary><p>Yes. Each panel can have its own branding and saved configuration. PHP can enforce settings, hide individual tabs or disable the settings page. Your application’s permissions control who can make changes. <a href={docs + 'theme-settings/panels-permissions'}>Read about panels and permissions.</a></p></details>
      <details><summary>Is FLEX Theme a subscription?<span aria-hidden="true">+</span></summary><p>No. Single and Unlimited are one-time purchases. Both include every update released during the first year, at no extra cost.</p></details>
      <details><summary>Which Filament and PHP versions do I need?<span aria-hidden="true">+</span></summary><p>FLEX Theme is built for Filament 5 and PHP 8.3 or later. The installation guide covers the native theme build, package registration and license setup. <a href={docs + 'theme-settings/overview#installation'}>Read the installation guide.</a></p></details>
    </div></section>

    <section className="fl-docs-section fl-container" aria-labelledby="fl-docs-title" data-reveal><div className="fl-docs-heading"><div><p className="fl-eyebrow">THE DOCUMENTATION</p><h2 id="fl-docs-title">Get into the details.</h2></div><span>Everything you need to make it yours.</span></div><div className="fl-doc-links">{[
      ['01','Theme Settings','Appearance, colors, brand and panel configuration.','theme-settings/overview'],
      ['02','Global Search','Resources, categories, commands and native actions.','global-search/overview'],
      ['03','Announcements','Timely messages, rotation and live updates.','announcements/overview'],
      ['04','Components','Field groups, floating panels and bottom sheets.','components/field-groups'],
      ['05','Keyboard & Tables','Shortcuts, selection and eligible undo actions.','workspace/table-shortcuts'],
      ['06','PHP & Permissions','Multiple panels, access and code-owned settings.','theme-settings/panels-permissions'],
    ].map(([number,title,description,href]) => <a key={number} href={docs + href}><span>{number}</span><div><h3>{title}</h3><p>{description}</p></div><Arrow diagonal/></a>)}</div></section>

    <footer className="fl-footer"><div className="fl-container"><div className="fl-footer-top"><a className="fl-brand" href={docs + 'index'} aria-label="FLEX Theme home"><img src={assets + 'wordmark.svg'} width="100" height="30" alt="FLEX"/><span>Theme</span></a><p>Your panel.<br/><em>Reimagined.</em></p><a className="fl-footer-film" href={filmUrl} onClick={openFilm}>Watch the film <span>▶</span></a></div><div className="fl-footer-bottom"><span>FLEX Theme · Built for Filament 5</span><a href={docs + 'theme-settings/overview'}>Documentation</a><a href="https://github.com/janczakb/filament-flex-theme">GitHub <Arrow diagonal/></a><a href="#fl-main">Back to top ↑</a></div></div></footer>

    <dialog className="fl-film-dialog" ref={film} aria-label="Meet FLEX Theme — product film" onClick={event => { if (event.target === event.currentTarget) closeFilm(); }} onClose={() => setFilmOpen(false)}><div className="fl-film-header"><span>Meet FLEX Theme</span><button type="button" className="fl-film-close" onClick={closeFilm} aria-label="Close film"><svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="m6 6 12 12M18 6 6 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg></button></div>{filmOpen && <iframe src="https://www.youtube-nocookie.com/embed/POkDG3aMmgw?autoplay=1&rel=0" title="FLEX Theme for Filament — product film" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen referrerPolicy="strict-origin-when-cross-origin"/>}<a className="fl-film-youtube" href={filmUrl} target="_blank" rel="noopener noreferrer">Watch on YouTube ↗</a></dialog>
  </main>;
};


# FLEX Theme for Filament 5

A configurable design system for native Filament panels, forms, tables, navigation and overlays.

**Commercial software — a paid license is required.** Choose Single for one production domain or Unlimited for unlimited production domains owned and operated by one license holder. Both include the complete package and one year of updates, with continued use of eligible versions after expiry. See [licensing](COMMERCIAL.md) and the [full license](LICENSE).

[Buy a license](https://shop.bjanczak.com/checkout/buy/2fa1e181-74d4-4889-994c-d066dcfc88b3) · [License terms](LICENSE) · [Report an issue](https://github.com/janczakb/filament-flex-theme/issues)

This public repository contains documentation and legal information. Implementation code and releases are distributed through the protected package service, backed by a private repository. This repository is not a free implementation or an open-source grant.

## Installation

You need a Filament 5 application, PHP 8.3 or later as required by its dependencies, a frontend build pipeline and a purchased FLEX Theme key. This initial package is verified against Filament **5.10.2**; do not treat that as a compatibility audit of every Filament configuration or version.

Add the protected Composer repository:

```sh
composer config repositories.flex-theme composer https://license.bjanczak.com/v1/flex-theme/composer/
composer config --auth http-basic.license.bjanczak.com license YOUR_LEMON_LICENSE_KEY
composer require flex/theme:^0.1
```

Replace the placeholder with your own key. Keep Composer credentials out of version control and public logs. For CI, supply them through your CI secret manager and Composer's native authentication configuration. Customers never need a GitHub token or access to the private repository.

### Register the plugin

In your native panel provider:

```php
use Flex\Theme\FlexThemePlugin;

return $panel
    // Keep your existing native panel configuration.
    ->plugin(FlexThemePlugin::make())
    ->viteTheme('resources/css/filament/admin/theme.css');
```

Create a native Filament theme if your panel does not already have one:

```sh
php artisan make:filament-theme admin
```

Keep the generated native Filament imports and application sources. Add these to `resources/css/filament/admin/theme.css`:

```css
@import '../../../../vendor/flex/theme/resources/css/theme.css';
@source '../../../../vendor/flex/theme/src/**/*.php';
@source '../../../../vendor/flex/theme/resources/views/**/*.blade.php';
```

Publish the runtime assets, run migrations and build your application's CSS:

```sh
php artisan vendor:publish --tag=flex-theme-source --force
php artisan migrate
npm run build
```

The package includes compiled runtime JavaScript. Customers do not need to build the package's internal JavaScript. Republish runtime assets and rebuild the application theme when updating. If you use uploaded logos or favicons with Laravel's public disk, configure that disk and its public storage link normally.

### Settings in PHP

You can keep the native Theme Settings page, hide it, or make PHP configuration authoritative:

```php
FlexThemePlugin::make()
    ->settingsPage(false)
    ->settings([
        'brand' => 'My workspace',
        'accent' => '#0088ff',
        'radius_scale' => 'medium',
        'form_radius_scale' => 'large',
        'font_size' => 14,
    ]);
```

The package configures presentation while retaining native Filament behavior. Optional integrations, announcements, search configuration, theme settings and layout choices should be tested against your application's own components and plugins before production use. FLEX Fields is a separate, optional product and is not included in this purchase.

## Updates and long-term use

Renew only when you want access to newer releases. Eligible versions can continue to be used within your purchased scope after your update period ends. Older eligible releases remain downloadable while the distribution service operates; keep your own permitted copies and backups.

There is no commitment to operate hosted services, maintain old framework versions or develop the product indefinitely. An orderly product retirement preserves your paid rights to eligible versions and addresses unexpired paid access under [LICENSE §5](LICENSE). General support and an SLA are included only when expressly agreed.

## Repository separation

- Public information: `janczakb/filament-flex-theme`.
- Private implementation: `janczakb/filament-flex-theme-package`.
- Composer package: `flex/theme`.
- Protected distribution: `https://license.bjanczak.com/v1/flex-theme/composer/`.

No application credentials, license keys or private package implementation belong in this public repository.

## License

Copyright © 2026 Bartłomiej Janczak. All rights reserved. Proprietary commercial license, version 1.0. No free-use grant. [LICENSE](LICENSE) contains the binding terms; [COMMERCIAL.md](COMMERCIAL.md) explains the plans. Third-party materials retain their respective licenses in [THIRD_PARTY_NOTICES.md](THIRD_PARTY_NOTICES.md).

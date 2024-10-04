# mwm-nuxt-module-template

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![License][license-src]][license-href]
[![code style][code-style-src]][code-style-href]

_description_

[🏀 Online playground](https://stackblitz.com/github/gabortorma/mwm-nuxt-module-template?file=playground%2Fapp.vue)

## Install

```bash
pnpm install add -D @gabortorma/mwm-nuxt-module-template
```

## Usage

### Nuxt

Add the plugin to your `nuxt.config.js`:

```ts
export default defineNuxtConfig({
  modules: [
    '@gabortorma/mwm-nuxt-module-template'
  ],

  mwmNuxtModuleTemplate: {
    // your module options
  }
})
```

## Release

Add your `GITHUB_TOKEN` to `.env` file or use web based login:

```bash
GITHUB_TOKEN=your_token
```

<!-- Badges -->

[npm-version-src]: https://img.shields.io/npm/v/@gabortorma/mwm-nuxt-module-template/latest.svg?style=flat&colorA=18181B&colorB=28CF8D
[npm-version-href]: https://npmjs.com/package/@gabortorma/mwm-nuxt-module-template
[npm-downloads-src]: https://img.shields.io/npm/dm/@gabortorma/mwm-nuxt-module-template.svg?style=flat&colorA=18181B&colorB=28CF8D
[npm-downloads-href]: https://npmjs.com/package/@gabortorma/mwm-nuxt-module-template
[license-src]: https://img.shields.io/npm/l/@gabortorma/mwm-nuxt-module-template.svg?style=flat&colorA=18181B&colorB=28CF8D
[license-href]: https://npmjs.com/package/@gabortorma/mwm-nuxt-module-template
[code-style-src]: https://antfu.me/badge-code-style.svg
[code-style-href]: https://github.com/gabortorma/antfu-eslint-config

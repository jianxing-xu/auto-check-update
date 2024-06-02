# @jianxing/auto-check-update

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![bundle][bundle-src]][bundle-href]
[![JSDocs][jsdocs-src]][jsdocs-href]
[![License][license-src]][license-href]

Automatically checks for updates to your site and notifies you

# Install

```bash
npm i @jianxing/auto-check-update
```

# Usage

```js
import { start } from '@jianxing/auto-check-update'

// main.js
start({
  onNotify() {
    // exec your code
    return true // Return true to stop checking.
  },
  time: 2000 // interval
})
```

# License

[MIT](./LICENSE) License © 2024-PRESENT [Jianxing Xu](https://github.com/jianxing-xu)

<!-- Badges -->

[npm-version-src]: https://img.shields.io/npm/v/@jianxing/auto-check-update?style=flat&colorA=080f12&colorB=1fa669
[npm-version-href]: https://npmjs.com/package/@jianxing/auto-check-update
[npm-downloads-src]: https://img.shields.io/npm/dm/@jianxing/auto-check-update?style=flat&colorA=080f12&colorB=1fa669
[npm-downloads-href]: https://npmjs.com/package/@jianxing/auto-check-update
[bundle-src]: https://img.shields.io/bundlephobia/minzip/@jianxing/auto-check-update?style=flat&colorA=080f12&colorB=1fa669&label=minzip
[bundle-href]: https://bundlephobia.com/result?p=@jianxing/auto-check-update
[license-src]: https://img.shields.io/github/license/antfu/@jianxing/auto-check-update.svg?style=flat&colorA=080f12&colorB=1fa669
[license-href]: https://github.com/antfu/@jianxing/auto-check-update/blob/main/LICENSE
[jsdocs-src]: https://img.shields.io/badge/jsdocs-reference-080f12?style=flat&colorA=080f12&colorB=1fa669
[jsdocs-href]: https://www.jsdocs.io/package/@jianxing/auto-check-update

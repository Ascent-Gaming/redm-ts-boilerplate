<h1 align="center">RedM TypeScript Boilerplate</h1>

<p align="center">
  <i>A Typescript Boilerplate for RedM, forked from <a target="_blank" href="https://github.com/d0p3t/fivem-ts-boilerplate">FiveM-TS-Boilerplate</a></i>
  <br>
  <br>
  <a href="https://github.com/d0p3t/fivem-ts-boilerplate/blob/master/LICENSE">
    <img src="https://img.shields.io/badge/License-MIT-blue.svg?style=flat" alt="License: MIT">
  </a>
  <a href="https://github.com/d0p3t/fivem-ts-boilerplate/commits/master">
    <img src="https://img.shields.io/github/last-commit/Ascent-Gaming/redm-ts-boilerplate.svg?style=flat" alt="Last commit">
  </a>
  <a href="">
    <img src="https://img.shields.io/github/workflow/status/Ascent-Gaming/redm-ts-boilerplate/Node.js%20CI" alt="Workflow">
  </a>
</p>

This is a boilerplate for creating resources in TypeScript, for RedM. From its fork, its dependencies have been upgraded and the `fxmanifest.lua` updated to give `rdr3` compatability.

***By using this boilerplate you agree to the following:***
> I acknowledge that this is a prerelease build of RedM, and I am aware my resources *will* become incompatible once RedM ships.

If you wish to take advantage of TypeScript `4.x` features in FiveM, this boilerplate maybe suitable for you. I'm going to assume you know how to make that change yourself. *Hint, it includes the `fxmanifest.lua` file.*

## Usage
1. Clone repository into your `resources/[local]` folder.
2. `npm i` the dependencies.
3. Start development.

### Development
Use `npm run watch` to watch files during development.

### Production
Build your production ready code with `npm run build`.

This will build the client and server script with the `--mode production` flag.

### Automatic Builds (Optional)
The `fxmanifest.lua` is not setup to automatically build upon first FXServer start. If you'd like to setup automatic builds you must add the following to your `fxmanifest.lua`.

```lua
dependency 'yarn'
dependency 'webpack'

webpack_config 'webpack.config.js'
```

However, due to the speed performance of the pre-packaged webpack/yarn of cfx-server-data, we suggest you don't do this and build manually as described previously ("Production").

## License
This product is MIT licensed. Please make sure you give credit and include this license in your product.

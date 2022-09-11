# BITBusConfig

**Note**: This repository is archived. No more data update will happen or be accepted. For more information and for historial data, visit [the lite webapp](https://seethediff.cn/BITbus/) or WeChat Mini Program 理工校车.

A hopefully small repo as an attempt to modernlize how (the legacy) BITBus WeChat Mini Program's config is maintained.

Built with NodeJS, TypeScript, Jest.

Believe it or not, previously it was a process of handcrafting JSON [with some helper JavaScript snippet](tools/legacy-datagen.js).

## Commands

- `npm run build` generate compliant JSON in `build` folder
- `npm run deploy` deploy updated JSON to Tencent Cloud for WeChat Mini Program (`BB_TOKEN` environment variable required)
- `npm test` run test suite of the scripts and snapshot tests
  - `npm run test:nosnapshot` to only run unit tests
  - `npm run test:snapshot` to only run snapshot tests

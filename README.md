# Pocket Tools

![Pocket Tools](https://raw.githubusercontent.com/vmbdev/pocket-tools/main/src/assets/ogpockettools.png)

**Pocket Tools** brings to your phone a bunch of simple, real life tools
without paying, ads or third-party cookies.

## Prerequisites

Pocket Tools requires [Node.js](https://nodejs.org/) 20+, or
[Bun](https://bun.sh/) 1.1.19+ installed on your system to build.

## Getting started

### Setup

First, install the dependencies using NPM:

```bash
npm i
```

### Running and building

To run Pocket Tools as a PWA in dev mode:

```bash
npm run dev
```

To build Pocket Tools as a PWA:

```bash
npm run build
```

### Building an Android app

Let's init the Android platform on Capacitor:

```bash
npx cap add android
```

Everytime you build the application (npm run build) you need to sync the files:

```bash
npx cap sync
```

Then we can run it in our emulator (or devices, if configured) with:

```bash
npx cap run <platform>
```

Or build it with Xcode/Android Studio with:

```bash
npx cap open <platform>
```

## Built with

- [Node.js](https://nodejs.org/) - JavaScript runtime environment
- [TypeScript](https://www.typescriptlang.org/) - JavaScript with syntax for types
- [Capacitor](https://capacitorjs.com/) - Runtime for building Web Native apps
- [Vue.js](https://vuejs.org/) - The Progressive JavaScript Framework
- [Vue I18n](https://vue-i18n.intlify.dev/) - Internationalization plugin for Vue.js

## License

Pocket Tools is licensed under the MIT License - see the
[LICENSE](https://github.com/vmbdev/pocket-tools/blob/main/LICENSE)
file for more details.

# Blog Editor

Blog Editor SPA

## Features

- State management support through [Redux](https://redux.js.org/)
- API skeleton provided
- Tests provided
- I18n skeleton provided for Japanese, Vietnamese and English
- Notification support provided

## Installation

This application depends on [Node.js](https://nodejs.org/en/download/), and was
tested under Node **v8.11.2**.
Additionally, you may install [Yarn](https://yarnpkg.com/en/docs/install) as
the package manager (tested under Yarn **v1.12.1** and NPM **v5.6.0**).

Once the prerequisites are installed on the target system, run,

```sh
$ yarn # to use yarn as the package manager, or
$ npm install # to use NPM as the package manager.
```

## Usage

### Development Environment

Once the application is installed, you may run the application by invoking,

```sh
$ yarn start # Or,
$ npm run start 
```

The above command will run the application on
[http://localhost:3000](http://localhost:3000). If port `3000` is occupied,
a script will prompt to run the application on the next available port.

You may verify the correctness of the current state of the application by
running available tests using,

```sh
$ yarn test # Or,
$ npm test
```

### Production and Staging Environments

A production build can be generated by running,

```sh
$ yarn build # Or,
$ npm run build
```

This will produce the production build files under `./build` directory.

## Notes

- Several modules were imported as vendor module, to mitigate some existing
issues in the following third party modules.
  - `quill-image-drop-module`
    - *Issue*: Production build minification failed
    - *Issue reference*:
      https://github.com/kensnyder/quill-image-drop-module/issues/16
  - `quill-image-resize-module` and `quill-video-resize-module`
    - *Issue*: Module import failed
    - *Issue reference*: https://github.com/KillerCodeMonkey/ngx-quill/issues/48

## References

- Github: https://github.com/atshakil/demo-blog-editor
- Base Scaffold: https://github.com/atshakil/cra-rest-scaffold

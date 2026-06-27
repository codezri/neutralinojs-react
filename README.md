# neutralinojs-react

A simple React.js template for building Neutralinojs apps

## How to install

Create a new Neutralinojs project with this template with the following command:

```bash
neu create myapp --template codezri/neutralinojs-react
cd myapp
```

`neu create` automatically downloads the Neutralinojs executable from GitHub Releases and places it in the `bin` folder in the root directory.

If you downloaded this template manually (without using `neu create`), you will need to perform this step manually.

## How to develop

Start the React development server and Neutralinojs app:

```bash
pnpm run dev
# neu run

pnpm run dev-i
# neu run -- --window-enable-inspector
```

## How to bundle the app

Trigger a new React build and create the application bundle with the following command:

```bash
pnpm run build
# neu build

pnpm run build-e
# neu build --embed-resources
```

## License

[MIT](LICENSE)

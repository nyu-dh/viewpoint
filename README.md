# nyu-dss/viewpoint

## prerequisites

- [Node Version Manager](https://github.com/nvm-sh/nvm#installing-and-updating) (NVM)
- [Git](https://git-scm.com/downloads)

## local development

1. Clone the repo

```sh
git clone git@github.com:nyu-dss/viewpoint.git && cd viewpoint
```

2. Install project node version (specified in `.nvmrc`)

```sh
nvm install
```

3. Install npm packages

```sh
npm install
```

4. Run the dev server

```sh
npm run dev
```

5. Open in browser at [http://localhost:3000/viewpoint/](http://localhost:3000/viewpoint/)

6. Quit the server with `Ctrl-c`.

7. Auto-format code

```sh
npm run format
```

7. Lint code

```sh
npm run lint
```

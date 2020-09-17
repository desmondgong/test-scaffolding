# Test Scaffolding

Quickly generate a web app based on React/Redux

---

## Getting started

### Tech Stack

This application is based on the following tools/libraries:

- UI Render: **React/Redux, Material UI**.
- Bundler: **Webpack**.
- Lint check: **ESlint, eslint-config-airbnb**.
- Unit Testing: **Jest**.
- Web Server: **Express**.

### Setup

1. Clone the project from Git repo.
2. Make sure you have [Yarn](https://yarnpkg.com/) and node(Node.js LTS v12.X.X, NPM 6.X) installed.
3. Switch to top level directory.
4. `yarn` (Install necessary npm packages).

---

## Development Mode:

### Run dev mode

Dev mode enables [webpack-dev-middleware](https://webpack.js.org/guides/development/#using-webpack-dev-middleware), will cause `Webpack` to compile files in-memory - code changes are saved and updated when refreshing page in browser.

1. Switch to top level directory.
2. `yarn start:dev` to start web server.
3. Go to browser and hit http://localhost:3000/home to launch.

#### Static Analysis (Eslint)

All projects are covered with `eslint` rules to ESS standard in `eslint-config-airbnb`, [details](https://github.com/airbnb/javascript)

1. Switch to top level directory.
2. Run `npm run check:lint` to do the lint check.
3. Review `src/tests/out/lint-report.html` for lint report.

### Unit tests

Specs for Unit Test all locate `src/tests/unit` and all the test files like `__tests__/*.test.jsx`.

1. Switch to top level directory.
2. Run `yarn test` to start the Unit Test.
3. Review `tests/out` for the reports.

---

## Production Mode:

### Run prod mode

1. Switch to top level directory.
2. Run `yarn build` (to pack web files via Webpack and convert JS into ES5 via Babel).
3. Run `yarn start` (to start web server in prod mode).
4. Go to browser and hit http://localhost:3000/home to launch.

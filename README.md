# requestidlecallback-polyfill

window.requestIdleCallback polyfill and Types for [requestIdleCallback](https://developer.mozilla.org/en-US/docs/Web/API/Window/requestIdleCallback).

# Install

```shell
$ yarn add @tricot-inc/requestidlecallback-polyfill
```

# Usage

```ts
import '@tricot-inc/requestidlecallback-polyfill';

window.requestIdleCallback(doFunction);
```

# Contributing

1. Fork.
2. Create a feature branch.
3. Run test suite with the `$ yarn test` command and confirm that is passes.
4. Commit your changes.
5. Rebase your local changes against the `main` branch.
6. Create new Pull Request.

Bugs, feature requests and comments are more than welcome in the [issues](https://github.com/tricot-inc/requestidlecallback-polyfill/issues).

# Development scripts

## Build

Run build with `tsc`.

```shell
$ yarn build
```

## Lint

Run lint with ESLint, [gts](https://github.com/google/gts)

```shell
$ yarn lint
```

## Test

Run Unit test with Jest.

```shell
$ yarn test
```

## Format

Run formatting with `gts fix` and Prettier.

```shell
$ yarn format
```

# License

[MIT © tricot inc.](./LICENSE)

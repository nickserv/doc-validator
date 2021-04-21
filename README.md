# `doc-validator`

A library/tool for validating JavaScript code in Markdown documentation

## [Inspiration](https://twitter.com/bitandbang/status/1375534850506129418)

## Status

In development. JavaScript code in Markdown documentation can be parsed via the API or CLI, but there is no support for running code yet (see [1.0.0 milestone](https://github.com/nickmccurdy/doc-validator/milestone/1)).

## Usage

### Library

Install `doc-validator` as a dependency. All commands take a Markdown source string and return an Array of any Errors reported. Errors are not thrown to make it easier to detect multiple errors from separate JavaScript code examples in the same file, so you will probably want to print or throw them.

### Tool

Install `doc-validator` globally for any project, or as a local development dependency for CI and test scripts. Use with a filename like `doc-validator parse README.md` to parse existing Markdown files, or pass stdin with no path argument for advanced scripting.

## API

### `parse`

Parses JavaScript using Babel. Modern standardized syntax is supported, including ES modules (supported by Node).

````js
import { parse } from "doc-validator"
;(async () => {
  await parse('```js\nconsole.log("Hello, world!")\n```')
})()
````

### Planned

- `type`
- `run`
- `test`

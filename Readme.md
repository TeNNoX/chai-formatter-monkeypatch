# chai-formatter-monkeypatch

[![Node.js Package](https://github.com/TeNNoX/chai-formatter-monkeypatch/actions/workflows/npm-publish.yml/badge.svg)](https://github.com/TeNNoX/chai-formatter-monkeypatch/actions/workflows/npm-publish.yml)

Packaged from [StackOverflow](https://stackoverflow.com/a/28652362/1633985)

## Installation

[![NPM](https://nodei.co/npm/chai-formatter-monkeypatch.png?compact=true)](https://npmjs.org/package/chai-formatter-monkeypatch)

or `yarn chai-formatter-monkeypatch`

## Usage

```javascript
chai.use(require('chai-formatter-monkeypatch')(function (obj) {
  return formatObj(obj)
}))
```

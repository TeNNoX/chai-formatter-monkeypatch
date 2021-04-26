# chai-formatter-monkeypatch

Packaged from: <https://stackoverflow.com/a/28652362/1633985>

## Installation

[![NPM](https://nodei.co/npm/chai-formatter-monkeypatch.png?compact=true)](https://npmjs.org/package/chai-formatter-monkeypatch)

or `yarn chai-formatter-monkeypatch`

## Usage

```javascript
chai.use(require('chai-formatter-monkeypatch')(function (obj) {
  return formatObj(obj)
}))
```

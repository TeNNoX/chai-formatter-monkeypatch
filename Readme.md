# chai-formatter-monkeypatch

There is an issue about this: https://github.com/chaijs/chai/issues/1352  
And a monkey-patch solution - from [StackOverflow](https://stackoverflow.com/a/28652362/1633985) which i packaged into this.

I am a bit ashamed myself of not creating a PR to fix it instead, which would've probably taken a similar amount of time. 😳

## Installation

[![NPM](https://nodei.co/npm/chai-formatter-monkeypatch.png?compact=true)](https://npmjs.org/package/chai-formatter-monkeypatch)

or `yarn chai-formatter-monkeypatch`

## Usage

```javascript
chai.use(require('chai-formatter-monkeypatch')(function (obj) {
  return formatObj(obj)
}))
```

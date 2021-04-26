# chai-formatter-monkeypatch

Packaged from: <https://stackoverflow.com/a/28652362/1633985>

## Usage

```javascript
chai.use(require('chai-formatter-monkeypatch')(function (obj) {
  return formatObj(obj)
}))
```

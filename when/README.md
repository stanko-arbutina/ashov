# When

Function is called on an object or object property only if they exist

```javascript
const { when } = require('ashov');
const logValue = (val) => console.log(val);
when.exists("value exists")(logValue); // logs "value exists"
when.exists(0)(logValue); // nothing is logged
when.exists({path: {to: 'property'}}, 'path.to')(logValue) // logs "property"
```
# When

Function is called on a value only when value is truthy.

```javascript
const { when } = require('ashov');
when.truthy("truthy value", (val) => console.log(val)); // logs "truthy value"
when.truthy(0, (val) => console.log(val)); // nothing is logged
```
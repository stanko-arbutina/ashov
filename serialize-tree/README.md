# serializeTree

Serializes tree-like structures to strings. We assume that a tree node is an object with the `children` array.

```javascript
const { serializeTree } = require('ashov');
const tree = {
  oper: '/',
  children: [
    1, { oper: '+', children: [
        2, { oper: '*', children: [{ oper: '%', children: [16, 5] }, 5, 8] }, 11
    ] },
  ],
};
// serializer is a factory function
const serializer = serializeTree((node, serializedChildren, nodeProperties) => {
  if (isNumber(node)) {
    return String(node);
  }
  const joined = serializedChildren.join(node.oper);
  if (nodeProperties.isRoot) {
    return joined;
  }
  const parenTypes = [['{', '}'], ['[', ']'], ['(', ')']];
  const parens = parenTypes[nodeProperties.depth - 1];
  return `${parens[0]}${joined}${parens[1]}`;
});
console.log(serializer(tree)); // 1/{2+[(16%5)*5*8]+11}
```
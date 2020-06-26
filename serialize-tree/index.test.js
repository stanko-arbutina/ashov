const { expect } = require('chai');
const { isNumber } = require('lodash');

const serializeTree = require('./index');

describe('serializeTree', () => {
  it('Correctly serializes children 2 levels deep', () => {
    const sampleTree = {
      tag: 'html',
      children: [
        {
          tag: 'head',
          children: [{ tag: 'meta' }],
        },
        {
          tag: 'body',
          children: [
            { tag: 'header' },
            { tag: 'footer' },
          ],
        },
      ],
    };
    const treeSerializer = serializeTree(
      (node, serializedChildren) => `<${node.tag}>${serializedChildren.join('')}</${node.tag}>`,
    );
    expect(treeSerializer(sampleTree)).to.equal('<html><head><meta></meta></head><body><header></header><footer></footer></body></html>');
    sampleTree.children[0].children.shift();
    expect(treeSerializer(sampleTree)).to.equal('<html><head></head><body><header></header><footer></footer></body></html>');
    delete sampleTree.children[0].children;
    expect(treeSerializer(sampleTree)).to.equal('<html><head></head><body><header></header><footer></footer></body></html>');
  });

  it('works with example in readme', () => {
    const tree = {
      oper: '/',
      children: [
        1, { oper: '+', children: [2, { oper: '*', children: [{ oper: '%', children: [16, 5] }, 5, 8] }, 11] },
      ],
    };
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
    expect(serializer(tree)).to.equal('1/{2+[(16%5)*5*8]+11}');
  });
});

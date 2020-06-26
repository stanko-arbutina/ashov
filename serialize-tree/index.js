function serializeTree(serializer) {
  function qElement(
    el, parentIndex = null, props = { depth: 0, isRoot: true, childIndex: 0 },
  ) {
    return {
      content: el, unserializedChildren: (el.children || []).length, parentIndex, props,
    };
  }
  function buildQueue(root) {
    const queue = [qElement(root)];
    for (let index = 0; index < queue.length; index += 1) {
      const nextElement = queue[index];
      (nextElement.content.children || []).forEach(
        (child, childIndex) => queue.push(qElement(child, index, {
          isRoot: false,
          depth: nextElement.props.depth + 1,
          childIndex,
        })),
      );
    }
    return queue;
  }

  function serializeRoot(root) {
    let serializedBuffer = [];
    const queue = buildQueue(root);
    while (queue.length) {
      const nextElement = queue.pop();
      serializedBuffer.unshift(
        serializer(nextElement.content, nextElement.serializedChildren || [], nextElement.props),
      );
      if (nextElement.parentIndex != null) {
        const par = queue[nextElement.parentIndex];
        par.unserializedChildren -= 1;
        if (!par.unserializedChildren) {
          par.serializedChildren = serializedBuffer;
          serializedBuffer = [];
        }
      }
    }
    return serializedBuffer[0];
  }

  return serializeRoot;
}

module.exports = serializeTree;

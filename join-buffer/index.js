const EventEmitter = require('events');

class JoinBuffer extends EventEmitter {
  constructor() {
    super();
    this.parts = [];
  }

  push(element) {
    this.parts.push(element);
  }

  flush() {
    if (this.parts.length) {
      this.emit('flush', this.parts.join(''));
      this.parts = [];
    }
  }
}

module.exports = JoinBuffer;

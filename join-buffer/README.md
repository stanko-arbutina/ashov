# JoinBuffer

Little accumulator class.

    const buffer = new JoinBuffer();
    buffer.on('flush', flushed => console.log(flushed));
    buffer.push('First');
    buffer.push('Second');
    buffer.flush(); // logs 'FirstSecond', and empties the buffer 
    buffer.flush(); // nothing is emitted, as the buffer is empty

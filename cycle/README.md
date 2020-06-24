# cycle

Accepts an array; returns a function which returns array elements in successive order.

    const next = cycle(['one', 'two']);
    next(); // 'one'
    next(); // 'two' 
    next(); // 'one'
    next(); // 'two'
    // ... 
    
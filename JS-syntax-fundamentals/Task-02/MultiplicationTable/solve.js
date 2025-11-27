function multiplyNumBy2(num) {
    let result = 0;
    
    for (let i = 1; i <= 10; i++) {
        result = num * i;  // Fixed: just assign, don't use +=
        console.log(`${num} X ${i} = ${result}`);
        // Removed: result = 0; (not needed)
    }
}

multiplyNumBy2(5);
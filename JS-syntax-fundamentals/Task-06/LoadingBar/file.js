function loading(num) {
    const percentageCount = num / 10;
    const dotsCount = 10 - percentageCount;
    
    const repeatPercentage = '%'.repeat(percentageCount);
    const repeatDots = '.'.repeat(dotsCount);
    
    if (num === 100) {
        console.log('100% Complete!');
        console.log(`[${repeatPercentage}]`);
    } else {
        console.log(`${num}% [${repeatPercentage}${repeatDots}]`);
        console.log('Still loading...');
    }
}

loading(30);
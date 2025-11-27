function oddEvenSum(num) {
    let evenSum = 0;
    let oddSum = 0;
    
    // Convert number to string to iterate through digits
    const numStr = num.toString();
    
    for (let i = 0; i < numStr.length; i++) {
        const digit = parseInt(numStr[i]);
        
        if (digit % 2 === 0) {
            evenSum += digit;
        } else {
            oddSum += digit;
        }
    }
    
    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);
    
    // or return `Even sum = ${evenSum}, Odd sum = ${oddSum}`;
}


oddEvenSum(1000435);
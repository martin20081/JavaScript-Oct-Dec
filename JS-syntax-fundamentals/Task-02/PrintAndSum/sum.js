function printSum(num1, num2) {

    let sequence = '';
    let sumTotal = 0;

    for (let i = num1; i <= num2; i++) {
        sequence += `${i} `;
        sumTotal += i;
    }

    console.log(sequence);
    console.log(`Sum: ${sumTotal}`);
}


printSum(5 ,10)
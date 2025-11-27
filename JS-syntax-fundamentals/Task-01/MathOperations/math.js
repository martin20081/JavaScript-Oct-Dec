function operations (num1 , num2 , command) {

    switch(command){
        case 'add':
            return num1 + num2;
        case 'subtract':
            return num1 - num2;
        case 'multiply':
            return num1 * num2;
        case 'divide':
            return num1 / num2;
        default:
            return 'Invalid command';
    }
}
console.log(operations(10, 5, 'multiply'));
   
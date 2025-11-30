function calc (num1 , num2 , operator){

    let multiply = (x , y) => x * y;
    let divide = (x , y) => x / y;
    let subtract = (x , y) => x -  y;
    let add  = (x , y) => x + y;

    switch(operator){
        case '+':
           console.log( add(num1 , num2));
           break;
        
        case '-':
            console.log(subtract(num1 , num2));
            break;
        
        case '*':
            console.log(multiply(num1 , num2));
            break;

        case '/':
            console.log(divide(num1 , num2));
            break;    

            console.log('Martin');
                    
    }
}

calc(3  , 10  , '+');

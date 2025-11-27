function calcOrderPrice (product , qty ){

    let price = 0;


    switch(product){


        case 'coffee':
            price = qty * 2.50;
            break;

        case 'water':
            price = qty *1;
            break;  
            
        case 'coke':
            price = qty * 1.4;
            break;
            
        case 'snacks' :
            price = qty * 2;
            break;  

    }

    console.log(price.toFixed(2));
    


}

calcOrderPrice('water', 5);
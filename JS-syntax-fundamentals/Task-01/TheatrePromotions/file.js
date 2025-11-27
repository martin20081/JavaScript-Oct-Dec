function promotion (day, age) {

     let price = 0;

     if ('Weekday' == day) {
        if (0 <= age && age <= 18) {
            price = 12;
            return price;
        } else if (18 < age && age <= 64) {
            price = 18;
            return price;
        } else if (64 < age && age <= 122) {
            price = 12;
            return price;
        }else {
            return 'Error!';
        }  
     }else if ('Weekend' == day) {
        if (0 <= age && age <= 18) {
            price = 15;
            return price;
        } else if (18 < age && age <= 64) {
            price = 20;
            return price;
        } else if (64 < age && age <= 122) {
            price = 15;
            return price;
        }else {
            return 'Error!';
        } 
    
    }
}

console.log(promotion('Weekday', 42));

   
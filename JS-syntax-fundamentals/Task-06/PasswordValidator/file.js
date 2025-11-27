function validPass (password){

     function onlyLettersAndDigits(str) {
    return /^[A-Za-z0-9]+$/.test(str);
   }
   function hasNumbers(str) {
   const digits = str.match(/\d/g);
        return digits ? digits.length : 0;

}
  
    if(password.length >= 6 && password.length <=10){

        if(onlyLettersAndDigits(password)){
            if (hasNumbers(password) >= 2){
                console.log('Password is valid');
            }else {
                console.log('Password must have at least 2 digits');      
            }
        }else {
            console.log('Password must consist only of letters and digits');
        }
    }else {
        console.log('Password must be between 6 and 10 characters');
    }

}

validPass('MyPass123');
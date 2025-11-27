
function checkAge(age) {
    
    if (age >=0 && age <=12){

        console.log("is a baby");
    }else if (age >= 3 && age <=13 ){
        console.log("is a child");
    }else if (age >= 14 && age <=19 ){
        console.log("is a teenager");
    }else if (age >= 20 && age <=59 ){
        console.log("is an adult");
    }else if (age >= 60 ){
        console.log("is a senior citizen");
    }else {

        console.log("Martin is the best ");

    }
}

  console.log(checkAge(5));
  
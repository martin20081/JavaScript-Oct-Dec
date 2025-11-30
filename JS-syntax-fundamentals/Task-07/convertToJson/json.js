function convertToJson (firstName , lastName , hairColor ){

    let personObj = {
        name: firstName ,
        lastName , 
        hairColor 
    };


    let jsonString = JSON.stringify(personObj);

    console.log(jsonString);
    


}


convertToJson('martin' , 'rusev ' ,  'brown' );
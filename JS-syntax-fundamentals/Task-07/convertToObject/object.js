function convertToObject (jsonString){

    let personObj = JSON.parse(jsonString);

    let entries = Object.entries(personObj);


    for (let [key , val] of entries ){

        console.log(`${key}: ${val}`);
        
    }

}

convertToObject('{"name": "George", "age": 40, "town": "Sofia"}');
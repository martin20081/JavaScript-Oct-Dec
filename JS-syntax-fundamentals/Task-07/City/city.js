function printObjects (obj){

    let entries = Object.entries(obj);
    
    
    for (let [key , val] of entries){

        console.log(`${key} -> ${val}`);
        

    }


}

printObjects({

    name : "sofia", 
    area : 492 , 
    population : 1234533 , 
    country : "Bu;garia " , 
    postCode : "100"
})
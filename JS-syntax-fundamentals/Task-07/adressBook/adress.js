function manageAdresses (arr){


    let peopleDresses = {};


    for (let adressStr of arr ){

        let [name , adress] = adressStr.split(':');
        peopleDresses[name] = adress;
    }


    let entries = Object.entries(peopleDresses).sort((a , b) => a[0].localeCompare(b[0]));

    for(let [person , adress ] of entries ){
        console.log(`${person} -> ${adress}`);
    }
}

manageAdresses(['Tim:Doe Crossing','Bill:Nelson Place','Peter:Carlyle Ave','Bill:Ornery Rd']);
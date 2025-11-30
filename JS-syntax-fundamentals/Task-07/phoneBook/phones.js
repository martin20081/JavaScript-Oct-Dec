
 function phoneBook ( arr ){

    let contacts  = {};

    for ( let contactsStr of arr ){

        let [name , phoneNumber] = contactsStr.split(" ");
        contacts[name] = phoneNumber;
    }

    let entries  = Object.entries(contacts);

    for (let [key , val]  of entries){
        console.log(`${key} -> ${val}`);
        
    }

 }     
 
 phoneBook(['Tim 0834212554','Peter 0877547887','Bill 0896543112','Tim 0876566344'])
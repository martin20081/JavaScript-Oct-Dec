function  schedualedMeetings (arr ){


    let meetings = {};

    for (let meetingsStr of arr ){

        let [day , person]  = meetingsStr.split(" ");

        if ( day in meetings ){
            console.log(`Conflict on ${day}!`);
        }else {
            meetings[day] = person;
            console.log(`Schedualed for ${day}`);
            
        }
    }

    let entries = Object.entries(meetings);


    for (let [key , val] of entries ){

        console.log(`${key} -> ${val}`);
        
    }
}

schedualedMeetings(['Monday Peter','Wednesday Bill', 'Monday Tim', 'Friday Tim'])
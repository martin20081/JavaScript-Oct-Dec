function printCount (text , wordsToSearch){

    let arr = text.split(' ').filter(word=> word === wordsToSearch)

    console.log(arr.length);
    
}

printCount('Hello my is martin and is 15 yrs old' , 'is');

console.log('martin');



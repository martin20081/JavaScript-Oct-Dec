function censordWords ( text , censordWord){

    let startTemplate = '*'.repeat(censordWord.length);

    let newText = text.replaceAll(censordWord , startTemplate);

    console.log(newText);
    

}


censordWords('A small sentence with some words' , 'small');
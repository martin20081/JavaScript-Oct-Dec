function subtractEvenOddSums (arr){

    let evenSum = 0;
    let oddSum = 0;


    for (let num of arr){

        if(num % 2 === 0 ){
            evenSum += num;
        }else{
            oddSum += num;
        }
    }


    let finalAnswer  = evenSum - oddSum;

    console.log(finalAnswer);
    
}


subtractEvenOddSums([1 , 2, 3 , 4])
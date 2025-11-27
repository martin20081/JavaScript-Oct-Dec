function reverseArray(n, arr) {
    let finalArray = arr.slice(0, n).reverse();
    console.log(finalArray.join(' '));
}

// Call the function correctly - first number, then array
reverseArray(3, [2, 3, 5, 3, 4]);
function palindrome(arr) {
    for (let i = 0; i <= arr.length - 1; i++) {
        let reverse = 0;
        let original = arr[i];  // Store original value
        let firstArr = arr[i];  // Work with copy

        while (firstArr > 0) {
            let lastDigit = firstArr % 10;
            reverse = reverse * 10 + lastDigit;  // Build reversed number correctly
            firstArr = Math.floor(firstArr / 10);  // Integer division
        }
        
        if (reverse == original) {  // Compare with original, not modified firstArr
            console.log('True');
        } else {
            console.log('False');
        }
    }
}

palindrome([123, 323, 421, 121]);
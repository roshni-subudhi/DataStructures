function factorial(n) {
    if (n <= 1) {
        return 1;       
    } else {
        console.log(n);
        return n * factorial(n - 1);
    }
}

console.log(factorial(30));
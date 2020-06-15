function getFibonator() {
    let current = 0;
    let next = 1;


    function fibonator() {
        let newNum  = current + next;
        current = next;
        next = newNum;
        return current;
    }
    return fibonator;
    
}
let fib = getFibonator();
console.log(fib()); // 1
console.log(fib()); // 1
console.log(fib()); // 2
console.log(fib()); // 3
console.log(fib()); // 5
console.log(fib()); // 8
console.log(fib()); // 13

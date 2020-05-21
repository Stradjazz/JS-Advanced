function sameNumbers(num) {
    let input = num.toString();
    let numToCompare = input[0];
    let sum = Number(numToCompare);
    let isEqual = true;

    for (let i = 1; i < input.length; i++) {
        sum += Number(input[i]);
        if (input[i] !== numToCompare) {
            isEqual = false;
        }    
    }

    console.log(isEqual.valueOf());
    console.log(sum);    
}
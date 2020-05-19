function stringLength(input1, input2, input3) {
    let sumLength;
    let averageLength;

    let firstArgument = input1.length;
    let secondArgument = input2.length;
    let thirdArgument = input3.length;

    sumLength = firstArgument + secondArgument + thirdArgument;
    averageLength = Math.floor(sumLength / 3);

    console.log(sumLength);
    console.log(averageLength);
    
}
stringLength(['chocolate', 'ice cream', 'cake']);

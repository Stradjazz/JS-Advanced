function magicalMatrices(inputMatrix) {
    let isMagical = true;
    let sum = inputMatrix[0].reduce((a, b) => a + b, 0);
    
    for (let i = 0; i < inputMatrix.length; i++) {
        let rowSum = inputMatrix[i].reduce((a, b) => a + b, 0);
        let colSum = inputMatrix.map(x => x[i]).reduce((a, b) => a + b, 0);

        if (rowSum !== sum || colSum !== sum) {
            isMagical = false;
        }
    } 
    console.log(isMagical);
}

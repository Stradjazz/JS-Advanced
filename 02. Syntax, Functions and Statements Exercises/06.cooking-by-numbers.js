function cooking(input) {
    let startingNum = Number(input.shift());
    
    
    for (let i = 0; i < input.length; i++) {
        let currentOperation = input[i];

        switch (currentOperation) {
            case 'chop':
                startingNum = startingNum / 2;
                break;
            case 'dice':
                startingNum = Math.sqrt(startingNum);
                break;
            case 'spice':
                startingNum += 1;
                break;
            case 'bake':
                startingNum = startingNum * 3;
                break;
            case 'fillet':
                startingNum -= (startingNum * 0.2);
                break;    
        }
        
        console.log(startingNum);
    }
}
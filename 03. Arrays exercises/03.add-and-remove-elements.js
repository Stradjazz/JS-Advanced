function addAndRemove(input) {
    let num = 1;
    let outputNums = [];

    for (let i = 0; i < input.length; i++) {
        
        let command = input[i];
        switch (command) {
            case 'add':
                outputNums.push(num);
                break;
            case 'remove':
                outputNums.pop();
                break;
        }
        num++;
    }

    if (outputNums.length === 0) {
        console.log('Empty');
    } else {
        for (const outputNum in outputNums) {
            console.log(outputNums[outputNum]);
          
        }
    }
}
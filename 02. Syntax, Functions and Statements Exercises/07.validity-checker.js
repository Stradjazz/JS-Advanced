function validityChecker(input){
    let x1 = Number(input[0]);
    let y1 = Number(input[1]);
    let x2 = Number(input[2]);
    let y2 = Number(input[3]);
    let startX = 0;
    let startY = 0;

    let distance1ToStart = distanceCalc(x1, startX, y1, startY);
    let distance2ToStart = distanceCalc(x2, startX, y2, startY);
    let distance1To2 = distanceCalc(x1, x2, y1, y2);


    function distanceCalc(a1, a2, b1, b2) {
        let distance = Math.sqrt(Math.pow((a1 - a2), 2) + Math.pow((b1 - b2), 2));
        return distance;
    }

    function printOutput(distance, a1, a2, b1, b2) {
        let isInt = Number.isInteger(distance);
        if (isInt) {
            console.log(`{${a1}, ${b1}} to {${a2}, ${b2}} is valid `);    
        } else {
            console.log(`{${a1}, ${b1}} to {${a2}, ${b2}} is invalid `);
        }
    }

    printOutput(distance1ToStart, x1, startX, y1, startY);
    printOutput(distance2ToStart, x2, startX, y2, startY);
    printOutput(distance1To2, x1, x2, y1, y2);
    
}



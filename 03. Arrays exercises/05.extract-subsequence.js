function extractSubsequence(input) {
    let subsequence = [];
    let biggestNum;

    input.forEach(function(element) {
        if (biggestNum != undefined) {
            if (element >= biggestNum) {
                subsequence.push(element);
                biggestNum = element;
            }
        } else {
            biggestNum = element;
            subsequence.push(element);
        }
    });

    subsequence.forEach(item => console.log(item));
}
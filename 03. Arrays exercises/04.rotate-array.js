function rotateArray(input) {
    let steps = Number(input.pop());

    for (let i = 0; i < steps % input.length; i++) {
        let currentItem = input.pop();
        input.unshift(currentItem);    
    }
    
    console.log(input.join(' '));
}
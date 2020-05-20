function squareOfStars(input) {
    let counter = 5;
    if (input) {
        counter = Number(input);
    }
    for (let index = 0; index < counter; index++) {
        console.log("* ".repeat(counter));
    }
}

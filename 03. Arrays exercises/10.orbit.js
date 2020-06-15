function orbit([width, height, y, x]) {
    let createMatrix = () => new Array(width).fill(0);
    let processLine = (arr) => arr.join(' ')
    let matrix = Array(height)
        .fill()
        .map(createMatrix);
    matrix
        .map((arr, h) => arr
            .map((_, w) => {
                let symmetry = Math.max(Math.abs(x - w), Math.abs(y - h)) + 1;
                return matrix[h][w] = symmetry;
            }))
    return matrix.map(processLine).join('\n');
}


function solve() {
    const argTypes = {};
    let result = {};

    for (const arg of arguments) {
        const type = typeof arg;
        
        if (result[type] === undefined) {
            result[type] = arg;
        }
        if (argTypes[type] === undefined) {
            argTypes[type] = 0;
        }
        argTypes[type]++;

        console.log(`${type}: ${arg}`);
    }

    Object.entries(argTypes).sort((a, b) => b[1] - a[1]).forEach(e => console.log(`${e[0]} = ${e[1]}`));
    
    
}
solve('cat', 42, 53, function () { console.log('Hello world')});

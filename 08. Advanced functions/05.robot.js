function solution() {
    const macronutrients = {
        protein: 0,
        carbohydrate: 0,
        fat: 0,
        flavour: 0
    }

    const meals = {
        apple: {
            carbohydrate: 1, 
            flavour: 2
        },
        lemonade: {carbohydrate: 10, flavour: 20},
        burger: {carbohydrate: 5, fat: 7, flavour: 3},
        eggs: {protein: 5, fat: 1, flavour: 1},
        turkey: {protein: 10, carbohydrate: 10, fat: 10, flavour: 10}

    }

    const operations = {
        restock,
        prepare,
        report
    }

    function restock(element, quantity) {
        macronutrients[element] += quantity;
        return 'Success';
    }

    function prepare(recipe, quantity) {
        const required = Object.assign({}, meals[recipe]);
        Object.keys(required).forEach(key => required[key] *= quantity);

        for (let element in required) {
            if (macronutrients[element] < required[element]) {
                return `Error: not enough ${element} in stock`;
            } 
        }

        Object.keys(required).forEach(key => macronutrients[key] -= required[key]);
        return `Success`;
    }

    function report() {
        return `protein=${macronutrients.protein} carbohydrate=${macronutrients.carbohydrate} fat=${macronutrients.fat} flavour=${macronutrients.flavour}`;
    }

    function manager(input) {
        [command, element, quantity] = input.split(' ');
        
        return operations[command](element, Number(quantity));
    }

    return manager;
}

let manager = solution();

console.log(manager("report"));  // Error: not enough carbohydrate in stock




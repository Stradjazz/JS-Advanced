function calorieObject(input) {
    let keys = [];
    let values = [];

    for (let i = 0; i < input.length; i++) {
        if (i % 2 == 0) {
            keys.push(input[i]);
        } else {
            values.push(Number(input[i]));
        }
    
    }

    let foodData = {};

    for (let i = 0; i < keys.length; i++) {    
        foodData[keys[i]] = values[i];    
    }

    console.log(foodData);    
}

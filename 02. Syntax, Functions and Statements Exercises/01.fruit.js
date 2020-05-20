function fruits(fruit, weight, price) {
    weight = weight / 1000;
    let money = price * weight;
    console.log(`I need \$${money.toFixed(2)} to buy ${weight.toFixed(2)} kilograms ${fruit}.`);
}
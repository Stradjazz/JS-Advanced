function cappyJuice(input) {
    const juices = {};
    const bottles = {};
    
    for (const line of input) {
        let [name, quantity] = line.split(' => ');
        
        quantity = Number(quantity);
        if (!juices.hasOwnProperty(name)) {
            juices[name] = 0;
        }
        
        juices[name] += quantity;
        if (juices[name] >= 1000) {
            bottles[name] = Math.trunc(juices[name] / 1000);
        }
    }
    let keys = Object.keys(bottles);
    for (const name of keys) {
        let quantity = bottles[name];
        console.log(`${name} => ${quantity}`);
    }
   
    
}
cappyJuice(['Kiwi => 234',
'Pear => 2345',
'Watermelon => 3456',
'Kiwi => 4567',
'Pear => 5678',
'Watermelon => 6789']
);
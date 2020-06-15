function catalog(input) {
    const shopCatalog = {};

    for (const line of input) {
        const [product, price] = line.split(' : ');
        const letter = product[0];
        if (shopCatalog.hasOwnProperty(letter) === false) {
            shopCatalog[letter] = {};
        }
        shopCatalog[letter][product] = Number(price);
    } 
    const sortedKeys = Object.keys(shopCatalog).sort((a, b) => a.localeCompare(b));
    for (const key of sortedKeys) {
        console.log(key);
        const sortedProducts = Object.keys(shopCatalog[key]).sort((a, b) => a.localeCompare(b));
        for (const product of sortedProducts) {
            console.log(` ${product}: ${shopCatalog[key][product]}`);
        }
    }
}
catalog(['Appricot : 20.4',
'Fridge : 1500',
'TV : 1499',
'Deodorant : 10',
'Boiler : 300',
'Apple : 1.25',
'Anti-Bug Spray : 15',
'T-Shirt : 10']
);
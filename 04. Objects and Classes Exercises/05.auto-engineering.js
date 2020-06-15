function solve(input) {
    const catalogue = {};
    for (const line of input) {
        let [brand, model, quantity] = line.split(' | ');
        quantity = Number(quantity);
        if (catalogue.hasOwnProperty(brand) === false) {
            catalogue[brand] = {};
        }
        let models = catalogue[brand];
        if (models.hasOwnProperty(model) === false) {
            models[model] = 0;
        } 
        models[model] += quantity;
        
    }
    const brands = Object.keys(catalogue);
    for (const brand of brands) {
        console.log(brand);
        const carModels = Object.keys(catalogue[brand]);
        
        for (const model of carModels) {    
            console.log(`###${model} -> ${catalogue[brand][model]}`);
        }
    }
}

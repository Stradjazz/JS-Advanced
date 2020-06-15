function solve(input) {
    const catalogue = {};

    //iterate the input
    for (let line of input) {
        let [system, component, subcomponent] = line.split(' | ');

    //get names of the system, component and subcomponent
        if (catalogue.hasOwnProperty(system) === false) {
            catalogue[system] = {};
        }
        if (catalogue[system].hasOwnProperty(component) === false) {
            catalogue[system][component] = []; 
        }
    //fill the catalog
        catalogue[system][component].push(subcomponent);

    }
    //sort
    Object.entries(catalogue).sort((a, b) => {
        return Object.keys(b[1]).length - Object.keys(a[1]).length || a[0].localeCompare(b[0]);
    }).forEach(([system, component]) => {

    //print
        console.log(system);
        Object.entries(component)
            .sort((a, b) => b[1].length - a[1].length)
            .forEach(([comp, subcomp]) => {
                console.log('|||' + comp);
                subcomp.forEach(s => {
                    console.log('||||||' + s)
                });
            });       
    });    
}


function solve(car) {
    const engines = [
        {power: 90, volume:1800},
        {power: 120, volume: 2400 },
        {power: 200, volume: 3500}
    ];

    const wheels = function wheelCalc(size) {
        if(size % 2 === 0) {
            size = size - 1;
        }
        
        return new Array(4).fill(size);
    };

    const carModel = {
        model: car.model,
        engine: {},
        carriage: { type: car.carriage,
                    color: car.color},
        wheels: wheels(car.wheelsize)
    };

    for (let engine of engines) {
        if (engine.power >= car.power) {
            carModel.engine = Object.assign(engine);
            break;
        }
    }

   

    return carModel;
}
console.log(solve({ model: 'Opel Vectra',
    power: 110,
    color: 'grey',
    carriage: 'coupe',
    wheelsize: 17 }));

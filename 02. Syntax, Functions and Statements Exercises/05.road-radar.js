function roadRadar(inputData) {
    let currentSpeed = Number(inputData[0]);
    let area = inputData[1];
    let limit = 0;
    switch (area) {
        case 'motorway':
            limit = 130;
            break;
        case 'interstate':
            limit = 90;
            break;
        case 'city':
            limit = 50;
            break;
        case 'residential':
            limit = 20;
            break;
    }
    let difference = currentSpeed - limit;

    if (difference > 0 && difference <= 20) {
        console.log('speeding');
    } else if (difference > 20 && difference <= 40) {
        console.log('excessive speeding');
    } else if (difference > 40) {
        console.log('reckless driving');
    }    
}
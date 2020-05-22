function timeToWalk(steps, sizeOfStep, speed) {
    let distance = (steps * sizeOfStep) / 1000;
    let breaks = Math.floor((distance * 1000) / 500);
    let timeInSeconds = Math.ceil((breaks * 60) + ((distance / speed) * 3600));
    
    

    let result = new Date(null, null, null, null, null, timeInSeconds);
    let walkingHours = result.getHours();
    if (walkingHours < 10) {
        walkingHours = '0' + walkingHours;
    }

    let walkingMinutes = result.getMinutes();
    if (walkingMinutes < 10) {
        walkingMinutes = '0' + walkingMinutes;
    }

    let walkingSeconds = result.getSeconds();
    if (walkingSeconds < 10) {
        walkingSeconds = '0' + walkingSeconds;
    }

    console.log(`${walkingHours}:${walkingMinutes}:${walkingSeconds}`);
}
function timeToWalk(steps, sizeOfStep, speed) {
    let distance = (steps * sizeOfStep) / 1000;
    let breaks = Math.floor((distance * 1000) / 500);
    let timeInSeconds = (breaks * 60) + ((distance / speed) * 3600);
    let walkingHours = Math.floor(timeInSeconds / 3600);
    if (walkingHours < 10) {
        walkingHours = '0' + walkingHours;
    }
    let remainingSeconds = timeInSeconds - (walkingHours * 3600);
    let walkingMinutes = Math.floor(remainingSeconds / 60);
    let walkingSeconds = Math.round(remainingSeconds - (walkingMinutes * 60));

    console.log(`${walkingHours}:${walkingMinutes}:${walkingSeconds}`);
}

timeToWalk(2564, 0.70, 5.5);
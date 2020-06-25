function solve(worker) {
    if (worker.dizziness === true) {
        let waterSupply = 0.1 * worker.weight * worker.experience;
        worker.levelOfHydrated += waterSupply;
        worker.dizziness = false;
        // Object.assign(worker, worker.dizzyness);
    } 
    return worker;
}
console.log(solve({ weight: 95,
    experience: 3,
    levelOfHydrated: 0,
    dizziness: false }));
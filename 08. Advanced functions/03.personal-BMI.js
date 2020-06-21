function solve(name, age, weight, height) {
    let patient = {
        name: name,
        personalInfo: {
            age: age, 
            weight: weight, 
            height: height},
        BMI: 0,
        status: 'unknown'
    };
    let bmi =  function calculateBMI() {
        return Math.round(patient.personalInfo.weight / Math.pow((patient.personalInfo.height / 100), 2));
    }
    patient.BMI = bmi();
    patient.status = setStatus();
    function setStatus () {
        let currentStatus = '';
        let bmi = patient.BMI;
        if (bmi >= 30) {
            currentStatus = 'obese';
            patient.recommendation = 'admission required';
        } else if (bmi < 30 && bmi >= 25) {
            currentStatus = 'overweight';
        } else if (bmi < 25 && bmi >= 18.5) {
            currentStatus = 'normal';
        } else {
            currentStatus = 'underweight';
        }
        return currentStatus;
    }
    
    return patient;

}
console.log(solve('Pesho', 9, 57, 177));
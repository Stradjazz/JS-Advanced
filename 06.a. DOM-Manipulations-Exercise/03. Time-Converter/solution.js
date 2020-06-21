function attachEventsListeners() {
     let ratios = {
        days: 1,
        hours: 24,
        minutes: 1440,
        seconds: 86400
    };
    
    function convertValue(value, from) {
        const inDays = value / ratios[from];
        return {
            days: inDays,
            hours:inDays * ratios.hours,
            minutes: inDays * ratios.minutes,
            seconds: inDays * ratios.seconds
        };
    }
    
    const daysDiv = document.getElementById('days');
    const hoursDiv = document.getElementById('hours');
    const minutesDiv = document.getElementById('minutes');
    const secondsDiv = document.getElementById('seconds');

    document.getElementById('daysBtn').addEventListener('click', convertTime);
    document.getElementById('hoursBtn').addEventListener('click', convertTime);
    document.getElementById('minutesBtn').addEventListener('click', convertTime);
    document.getElementById('secondsBtn').addEventListener('click', convertTime);


    function convertTime(e) {
        let value = Number(e.target.parentNode.querySelector('input[type="text"]').value);
        let from = e.target.parentNode.querySelector('input[type="text"]').id;
        const convertedValues = convertValue(value, from);
        display(convertedValues);
    }
    

    function display(valuesToDisplay) {
        daysDiv.value = valuesToDisplay.days;
        hoursDiv.value = valuesToDisplay.hours;
        minutesDiv.value = valuesToDisplay.minutes;
        secondsDiv.value = valuesToDisplay.seconds;

    }
}
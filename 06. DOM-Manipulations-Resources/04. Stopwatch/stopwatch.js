function stopwatch() {
    const timeDisplay = document.getElementById('time');
    const startBtn = document.getElementById('startBtn');
    const stopBtn = document.getElementById('stopBtn');
    let seconds = 0;
    let minutes = 0;
    let intervalId;

    function timeFormat(val) {
        let text = val.toString();
        if (val < 10) {
            text = '0' + text;
         }
         return text;
    }

    function setOutput(minutes, seconds) {
        timeDisplay.innerHTML = `${timeFormat(minutes)}:${timeFormat(seconds)}`;
    }
    function startBtnHandler(e) {
        seconds = 0;
        minutes = 0;
        setOutput(minutes, seconds); 
        startBtn.setAttribute('disabled', true);
        stopBtn.removeAttribute('disabled');
        
        intervalId = setInterval(function(){
            
            seconds++;
            if (seconds === 60) {
                minutes++;
                seconds = 0; 
            }
            
            setOutput(minutes, seconds); 
        }, 1000);        
    } 

    function stopBtnHandler(e) {
        startBtn.removeAttribute('disabled');
        stopBtn.setAttribute('disabled', true);
        clearInterval(intervalId);
    }

    startBtn.addEventListener('click', startBtnHandler);
    stopBtn.addEventListener('click', stopBtnHandler);    
}
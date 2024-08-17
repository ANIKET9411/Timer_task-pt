let timerInterval;

function startTimer() {
     
    if (timerInterval) {
        clearInterval(timerInterval);
    }
    
     
    const input = document.getElementById('timerInput').value;
    const timerDisplay = document.getElementById('timer');
    
    
    const timerValue = parseInt(input, 10);
    if (isNaN(timerValue) || timerValue < 1 || timerValue > 100) {
        timerDisplay.textContent = 'Please enter a number between 1 and 100.';
        return;
    }
    
   
    let remainingTime = timerValue;
    timerDisplay.textContent = remainingTime;
    
    timerInterval = setInterval(() => {
        remainingTime--;
        if (remainingTime <= 0) {
            clearInterval(timerInterval);
            timerDisplay.textContent = 'Timer finished!';
        } else {
            timerDisplay.textContent = remainingTime;
        }
    }, 1000);
}

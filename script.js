let counterValue = 0;
let autoIncrementInterval = null;

const counterDisplay = document.getElementById('counter-value');
const incrementButton = document.getElementById('increment-button');
const decrementButton = document.getElementById('decrement-button');
const resetButton = document.getElementById('reset-button');
const autoIncrementButton = document.getElementById('auto-increment-button');


function updateCounterDisplay() {
    counterDisplay.textContent = counterValue;
}


incrementButton.addEventListener('click', () => {
    counterValue++;
    updateCounterDisplay();
});


decrementButton.addEventListener('click', () => {
    counterValue--;
    updateCounterDisplay();
});


resetButton.addEventListener('click', () => {
    counterValue = 0;
    updateCounterDisplay();
    
    if (autoIncrementInterval) {
        clearInterval(autoIncrementInterval);
        autoIncrementInterval = null;
    }
});


autoIncrementButton.addEventListener('click', () => {
    
    if (autoIncrementInterval) {
        clearInterval(autoIncrementInterval);
        autoIncrementInterval = null;
        autoIncrementButton.textContent = '⏩ Auto Increment';
    } else {
        autoIncrementButton.textContent = '⏸ Stop Auto Increment';
        autoIncrementInterval = setInterval(() => {
            counterValue++;
            updateCounterDisplay();
        }, 1000);
    }
});
document.addEventListener("DOMContentLoaded", function() {
    const timerDisplay = document.getElementById("timer");
    const startPomodoroBtn = document.getElementById("startPomodoroBtn");
    const startShortBreakBtn = document.getElementById("startShortBreakBtn");
    const startLongBreakBtn = document.getElementById("startLongBreakBtn");
    const plannerList = document.getElementById("plannerList");
    const planInput = document.getElementById("planInput");
    const addPlanBtn = document.getElementById("addPlanBtn");
    const clearPlansBtn = document.getElementById("clearPlansBtn");
    const notesTextarea = document.getElementById("notesTextarea");
    const alarmSound = new Audio("alarm.mp3"); // Replace "alarm.mp3" with the path to your alarm sound file

    let timerInterval;
    let minutes = 0;
    let seconds = 0;

    // Function to update the timer display
    function updateTimerDisplay() {
        timerDisplay.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    }

    // Function to start the timer
    function startTimer(duration) {
        minutes = duration;
        seconds = 0;
        updateTimerDisplay();
        timerInterval = setInterval(updateTimer, 1000);
    }

    // Function to stop the timer
    function stopTimer() {
        clearInterval(timerInterval);
        alarmSound.play(); // Play the alarm sound
    }

    // Function to update the timer every second
    function updateTimer() {
        if (seconds === 0) {
            if (minutes === 0) {
                clearInterval(timerInterval);
                // Timer has ended, you can add any additional actions here
                stopTimer();
            //    alert("Timer completed!");
                return;
            }
            minutes--;
            seconds = 59;
        } else {
            seconds--;
        }
        updateTimerDisplay();
    }

    // Function to add a plan
    function addPlan() {
        const planText = planInput.value.trim();
        if (planText !== "") {
            const li = document.createElement("li");
            li.textContent = planText;
            plannerList.appendChild(li);
            planInput.value = "";
        }
    }

    // Function to clear all plans
    function clearPlans() {
        plannerList.innerHTML = "";
    }

    // Event listener for Start Pomodoro button
    startPomodoroBtn.addEventListener("click", function() {
        startTimer(25); // 25 minutes 
    });

    // Event listener for Start Short Break button
    startShortBreakBtn.addEventListener("click", function() {
        startTimer(5); // 5 minutes 
    });

    // Event listener for Start Long Break button
    startLongBreakBtn.addEventListener("click", function() {
        startTimer(15 ); // 15 minutes 
    });

    // Event listener for Add Plan button
    addPlanBtn.addEventListener("click", addPlan);

    // Event listener for Clear All button
    clearPlansBtn.addEventListener("click", clearPlans);
});

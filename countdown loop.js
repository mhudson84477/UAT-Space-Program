var countingDown = false;
async function countDown() 
//i added the alert for thr "Countdown initiated" here
{alert("WARNING: COUNTDOWN INITIATED");
    /*  for (initial condition, ending condition - stop when not true, what to after each loop) i++ same as  i = i+1*/
    countingDown = true;
    for (var currTime = 10; countingDown && currTime >= 0; currTime--) {
        document.getElementById("countdownTimer").innerHTML = "TIME REMAINING: " + currTime;
        await new Promise(timer => setTimeout(timer, 1000));
    }
    if (countingDown) {
        document.getElementById("countdownTimer").innerHTML = "Blastoff!";
    } else {
        document.getElementById("countdownTimer").innerHTML = "Count Down Cancelled!";
    }
}
function cancelCountDown () {
    countingDown = false;
}
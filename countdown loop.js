function countDown() 
//i added the alert for thr "Countdown initiated" here
{alert("WARNING: COUNTDOWN INITIATED");
    var currTime = 10;
    /*  for (initial condition, ending condition - stop when not true, what to after each loop) i++ same as  i = i+1*/
    for (var i = 1; i < 12; i++) {

    


        setTimeout(function () {
            document.getElementById("countdownTimer").innerHTML = "TIME REMAINING:" + currTime;
            currTime = currTime - 1;
        }, 1000 * i);
        //this is where my text that displays "time remaining:" is 

        
    setTimeout(function () {
        //I transferred over the final code for the "blastoff! code here"
        document.getElementById("countdownTimer").innerHTML = "Blastoff!";
    }, 11000);
    }
}

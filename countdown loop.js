
function disablelaunch()
{
    document.getElementById("Launch").disabled = true;//turns off launch button
    document.getElementById("Cancel").disabled = false;//turns on cancel button
}

function disablecancel()
{
    document.getElementById("Launch").disabled = false;//turns on launch button
    document.getElementById("Cancel").disabled = true;//turns off cancel button
}


var countingDown = false;
async function countDown() 
//i added the alert for the "Countdown initiated" here
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
function checkCreds()
{
 alert("VERIFYING LOGIN INFORMATION, PLEASE STAND BY")

var firstname = document.getElementById("firstname").value;
var lastname = document.getElementById("lastname").value;
var CIN = document.getElementById("idnum").value;
var fullname = firstname + " " + lastname;

//this is where I added the rules for the log-in page
if(fullname.length > 20 || fullname.length <4)
{
    document.getElementById("loginstatus").innerHTML = "Invalid Name";
    alert ("INVALID NAME")
    return data
}
if(CIN >10 || CIN <2)
    {
        document.getElementById("loginstatus").innerHTML = "Invalid Identification Number";
        alert ("INVALID IDENTIFICATION NUMBER")
        return data
    }

else if(fullname.length <= 20 || fullname.length <= 4)
    {
    document.getElementById("loginstatus").innerHTML = "PROCESSING" + fullname + " " + CIN;
    alert("ACCESS GRANTED");
    location.replace("Page 2.html")
    }
}

//this is where I added my countdown sound
function begincountdown()
{
mysound = new sound("countdown.mp3")
mysound.play();
}
function sound(src)
{
    this.sound = document.createElement("audio")
    this.sound.src = src
    this.play = function(){
        this.sound.play();}
}

function goback()
{
    location.replace ("Page 2.html")
}
 function goback2()
 {
    location.replace ("index.html")
 }

 function loadData()
 {
    location.replace ("Page 3.html")
 }
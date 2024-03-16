let selDate = new Date();
selDate.setDate(selDate.getDate() + 1);

function myFunction() {
    // Get the text field
    var copyText = document.getElementById("urlArea");
  
    // Select the text field
    copyText.select();
    copyText.setSelectionRange(0, 99999); // For mobile devices
  
    // Copy the text inside the text field
    navigator.clipboard.writeText(copyText.value);

  }

function checkDate(date){
    const now = new Date();
    if(date > now){ 
        return true;
    } else {
        return false;
    }

}

function newCountdown(){
    let url = new URL(window.location.href);
    url.searchParams.delete("selectedDate");
    window.location.href = url;
    selDate = "";
    document.getElementById("countdown-area").style.visibility = "hidden";
    document.getElementById("dateSelection-area").style.visibility = "visible";
    document.getElementById("expired-area").style.visibility = "hidden";
}

function calendarChange(val){

    let date = new Date(val);
    if(checkDate(date)){
        for (let i = 0; i < document.getElementsByClassName("selected-date").length; i++) {
            document.getElementsByClassName("selected-date")[i].innerHTML = "Selected Date: " + date.toLocaleDateString();
        }
        //document.getElementById("selected-date").innerHTML = "Selected Date: " + date.toLocaleDateString();
        selDate = val; //val is the date in short format
        let url = new URL(window.location.origin+window.location.pathname+"/Countdown/index.html");
        url.searchParams.append("selectedDate",selDate);
        document.getElementById("urlArea").innerHTML = url;
        document.getElementById("countdown-area").style.visibility = "visible";
        document.getElementById("expired-area").style.visibility = "hidden";
        //getCountdown();
    }else{
        selDate = val;
        for (let i = 0; i < document.getElementsByClassName("selected-date").length; i++) {
            document.getElementsByClassName("selected-date")[i].innerHTML = "The date " + date.toLocaleDateString() + " is not Valid. <//br> Choose a date in the future.";
        }
        document.getElementById("countdown-area").style.visibility = "hidden";
        document.getElementById("expired-area").style.visibility = "visible";
        //document.getElementById("selected-date").innerHTML = "The date " + date.toLocaleDateString() + " is not Valid. <//br> Choose a date in the future.";
    }
}

/*
function hasDate(){
    let url = new URL(window.location.href);
    url.searchParams.append("selectedDate",selDate);
    //window.location.href = url;
   // document.getElementById("dateSelection-area").style.visibility = "hidden";
    document.getElementById("countdown-area").style.visibility = "visible";
    document.getElementById("selected-date").innerHTML = "Selected Date: " + date.toLocaleDateString();
    getCountdown();
}*/

function getCountdown(){
    const now = new Date();
    const date2 = new Date(selDate);
    for (let i = 0; i < document.getElementsByClassName("selected-date").length; i++) {
        if(checkDate(date2)){
            document.getElementsByClassName("selected-date")[i].innerHTML =  "Selected Date: " + date2.toLocaleDateString();
            const diffTime = Math.abs(date2 - now);
            const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
            const diffHours= Math.floor((diffTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));; 
            const diffMinutes = Math.floor((diffTime % (1000 * 60 * 60)) / (1000 * 60));
            const diffSeconds = Math.floor((diffTime % (1000 * 60)) / 1000); 
            document.getElementById("countdownD").innerHTML = "Days: " + diffDays;
            document.getElementById("countdownH").innerHTML = "Hours: " + diffHours;
            document.getElementById("countdownM").innerHTML = "Minutes: " + diffMinutes;
            document.getElementById("countdownS").innerHTML = "Seconds: " + diffSeconds;
        }else{
            document.getElementsByClassName("selected-date")[i].innerHTML = "The date " + date2.toLocaleDateString() + " is not Valid. <//br> Choose a date in the future.";
        }
    }
}
 

setInterval(getCountdown, 1000);
if(checkDate(selDate)){
    getCountdown(selDate);
}

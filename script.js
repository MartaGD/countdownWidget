let selDate = "";

function newCountdown(){
    let url = new URL(window.location.href);
    url.searchParams.delete("selectedDate");
    window.location.href = url;
    selDate = "";
    document.getElementById("countdown-area").style.visibility = "hidden";
    document.getElementById("dateSelection-area").style.visibility = "visible";
}

function calendarChange(val){
    let dateText = document.getElementsByClassName("selected-date");    
    for (let i = 0; i < dateText.length; i++) {
        dateText[i].innerHTML = "Selected Date: " + val;
      }
      selDate = val;
}

function enterDate(){
    let url = new URL(window.location.href);
    url.searchParams.append("selectedDate",selDate);
    window.location.href = url;
    document.getElementById("dateSelection-area").style.visibility = "hidden";
    document.getElementById("countdown-area").style.visibility = "visible";
    //document.getElementById("selected-date").innerHTML = "Selected Date: " + val;
    getCountdown();
}

function hasDate(){
    let url = new URL(window.location.href);
    url.searchParams.append("selectedDate",selDate);
    //window.location.href = url;
    document.getElementById("dateSelection-area").style.visibility = "hidden";
    document.getElementById("countdown-area").style.visibility = "visible";
    //document.getElementById("selected-date").innerHTML = "Selected Date: " + val;
    getCountdown();
}

function getCountdown(){
    const now = new Date();
    const date2 = new Date(selDate);
    const diffTime = Math.abs(date2 - now);
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    const diffHours= Math.floor((diffTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));; 
    const diffMinutes = Math.floor((diffTime % (1000 * 60 * 60)) / (1000 * 60));
    const diffSeconds = Math.floor((diffTime % (1000 * 60)) / 1000); 
    document.getElementById("countdownD").innerHTML = "Days: " + diffDays;
    document.getElementById("countdownH").innerHTML = "Hours: " + diffHours;
    document.getElementById("countdownM").innerHTML = "Minutes: " + diffMinutes;
    document.getElementById("countdownS").innerHTML = "Seconds: " + diffSeconds;
}

function init() {  
    let url = new URL(window.location.href);
    if (url.searchParams.has("selectedDate")){
        //alert("Tiene fecha informada "+url.searchParams.get("selectedDate"));
        calendarChange(url.searchParams.get("selectedDate"));
        hasDate();
        alert("Copia esta URL en tu Notion: "+url);
    }else{
        //alert("No tiene fecha informada :(");
    }
    
}
 
window.onload = init();

setInterval(getCountdown, 1000);
getCountdown(selDate);

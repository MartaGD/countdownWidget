let selDate = "";
const url = window.location.href;

function checkDate(date){
    const now = new Date();
    if(date > now){ 
        return true;
    } else {
        return false;
    }

}

function hasDate(){
    let url = new URL(window.location.href);
    url.searchParams.append("selectedDate",selDate);
    let textLabel = url.searchParams.get("textLabel") ;
    document.getElementById("countdown-area").style.visibility = "visible";
    for (let i = 0; i < document.getElementsByClassName("selected-date").length; i++) {
        if(url.searchParams.get("showDate") === "true"){
            document.getElementsByClassName("selected-date")[i].innerHTML =  textLabel + selDate.toLocaleDateString();
        }else{
            document.getElementsByClassName("selected-date")[i].innerHTML =  textLabel;
        }
        
    }
    getCountdown();
}

function getCountdown(){
    const now = new Date();
    const date2 = new Date(selDate);
    let url = new URL(window.location.href);
    let textLabel = url.searchParams.get("textLabel") ;
    for (let i = 0; i < document.getElementsByClassName("selected-date").length; i++) {
        if(url.searchParams.get("showDate") === "true"){
            document.getElementsByClassName("selected-date")[i].innerHTML =  textLabel + date2.toLocaleDateString();
        }else{
            document.getElementsByClassName("selected-date")[i].innerHTML =  textLabel;
        }
        
    }
    const diffTime = Math.abs(date2 - now);
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    const diffHours= Math.floor((diffTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));; 
    const diffMinutes = Math.floor((diffTime % (1000 * 60 * 60)) / (1000 * 60));
    const diffSeconds = Math.floor((diffTime % (1000 * 60)) / 1000); 
    document.getElementById("countdownD").innerHTML = diffDays;
    document.getElementById("countdownH").innerHTML = diffHours;
    document.getElementById("countdownM").innerHTML = diffMinutes;
    document.getElementById("countdownS").innerHTML = diffSeconds;
}

function init() {  
    let url = new URL(window.location.href);
    let date = new Date(url.searchParams.get("selectedDate"));
    let textcolor = url.searchParams.get("textColor");
    let bgColor = url.searchParams.get("bgColor");
    let roundCorners = url.searchParams.get("rCorners");
    let textLabel = url.searchParams.get("textLabel");
    let showDate = url.searchParams.get("showDate");
    let icon = url.searchParams.get("icon");
    for (let i = 0; i < document.getElementsByClassName("centerDiv").length; i++) {
        document.getElementsByClassName("centerDiv")[i].style.color = textcolor;
        document.getElementsByClassName("centerDiv")[i].style.backgroundColor = bgColor;    
        document.getElementsByClassName("centerDiv")[i].style.borderRadius  = roundCorners; 
    }
    document.getElementById("iconDecor").classList.add(icon);
    for (let i = 0; i < document.getElementsByClassName("selected-date").length; i++) {
        if(showDate === "true"){
            document.getElementsByClassName("selected-date")[i].innerHTML =  textLabel + date.toLocaleDateString();
        }else{
            document.getElementsByClassName("selected-date")[i].innerHTML =  textLabel;
        } 
    }
    if (url.searchParams.has("selectedDate") && checkDate(date)){
        //calendarChange(date);
        selDate = date; //val is the date in short format
        hasDate();
        alert("Copia esta URL en tu Notion: "+url);
    }else if(url.searchParams.has("selectedDate") && !checkDate(date)){
        document.getElementById("countdown-area").style.visibility = "hidden";
        document.getElementById("expired-area").style.visibility = "visible";
        alert("No tiene fecha informada :(");
    }else if(!checkDate(date)){
       alert("No tiene fecha informada :(");
    }
    
}
 
window.onload = init();

setInterval(getCountdown, 1000);
getCountdown(selDate);

/*
titulo en negrita h3 DONE
añadir más espacio entre las labels i ls inputs (16 por ejemplo) DONE
16 o 18 sz. DONE
los inputs han de ser maás altos DONE
iconos de inputs más grnades
puntos 1 2 3 más grande i en negrita DONE

BUUG segons en mnenys d'un xifra

roconre not passa
selected date no borra 
text color no passa
*/
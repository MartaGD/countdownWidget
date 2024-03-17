const themes = {
    default:{text:"#FFFFFF90", background:"#2F3437"},
    grayLM:{text:"#9B9A97", background:"#EBECED"},
    grayDM:{text:"#979A9B95", background:"#454B4E"},
    brownDM:{text:"#937264", background:"#434040"},
    brownLM:{text:"#64473A", background:"#E9E5E3"},
    orangeDM:{text:"#FFA344", background:"#594A3A"},
    orangeLM:{text:"#D9730D", background:"#FAEBDD"},
    yellowDM:{text:"#FFDC49", background:"#59563B"},
    yellowLM:{text:"#DFAB01", background:"#FBF3DB"},
    greenDM:{text:"#4DAB9A", background:"#354C4B"},
    greenLM:{text:"#0F7B6C", background:"#DDEDEA"},
    blueDM:{text:"#529CCA", background:"#364954"},
    blueLM:{text:"#0B6E99", background:"#DDEBF1"},
    purpleDM:{text:"#9A6DD7", background:"#443F57"},
    purpleLM:{text:"#6940A5", background:"#EAE4F2"},
    pinkDM:{text:"#E255A1", background:"#533B4C"},
    pinkLM:{text:"#AD1A72", background:"#F4DFEB"},
    redDM:{text:"#FF7369", background:"#594141"},
    redLM:{text:"#E03E3E", background:"#FBE4E4"},
};
const urlWidget = new URL(window.location.origin+window.location.pathname+"/Countdown/index.html");
let selDate = new Date();
selDate.setDate(selDate.getDate() + 1);
let visualDate = "";

function copyAreaBtn() {
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
/*
function newCountdown(){
    let url = new URL(window.location.href);
    url.searchParams.delete("selectedDate");
    window.location.href = url;
    selDate = "";
    document.getElementById("countdown-area").style.visibility = "hidden";
    document.getElementById("dateSelection-area").style.visibility = "visible";
    document.getElementById("expired-area").style.visibility = "hidden";
}
*/
function calendarChange(val){
    visualDate = new Date(val);
    if(checkDate(visualDate)){
        for (let i = 0; i < document.getElementsByClassName("selected-date").length; i++) {
            document.getElementsByClassName("selected-date")[i].innerHTML = "Selected Date: " + visualDate.toLocaleDateString();
        }
        //document.getElementById("selected-date").innerHTML = "Selected Date: " + date.toLocaleDateString();
        selDate = val; //val is the date in short format
        urlWidget.searchParams.append("selectedDate",selDate);
        document.getElementById("urlArea").innerHTML = urlWidget;
        document.getElementById("countdown-area").style.visibility = "visible";
        document.getElementById("expired-area").style.visibility = "hidden";
        //getCountdown();
    }else{
        selDate = val;
        for (let i = 0; i < document.getElementsByClassName("selected-date").length; i++) {
            document.getElementsByClassName("selected-date")[i].innerHTML = "The date " + visualDate.toLocaleDateString() + " is not Valid. <//br> Choose a date in the future.";
        }
        document.getElementById("countdown-area").style.visibility = "hidden";
        document.getElementById("expired-area").style.visibility = "visible";
        //document.getElementById("selected-date").innerHTML = "The date " + date.toLocaleDateString() + " is not Valid. <//br> Choose a date in the future.";
    }
}

function radioChange(val){
    switch(val){
        case "theme":
            document.getElementById("colorTextSelect").disabled = true;
            document.getElementById("colorBGSelect").disabled = true;
            document.getElementById("notionThemeSelector").disabled = false;
            selectTheme("default");
            break;
        case "color":
            document.getElementById("notionThemeSelector").disabled = true;
            document.getElementById("colorTextSelect").disabled = false;
            document.getElementById("colorBGSelect").disabled = false;
            selectColorText("#FFFFFF");
            selectColorBg("#000000");
            break;
    }

}

function selectTheme(val){
    switch(val){
        case "grayLM":
            for (let i = 0; i < document.getElementsByClassName("centerDiv").length; i++) {
                document.getElementsByClassName("centerDiv")[i].style.color= themes.grayLM.text;
                document.getElementsByClassName("centerDiv")[i].style.backgroundColor= themes.grayLM.background;    
            }
        break;
        case "grayDM":
        for (let i = 0; i < document.getElementsByClassName("centerDiv").length; i++) {
            document.getElementsByClassName("centerDiv")[i].style.color= themes.grayDM.text;
            document.getElementsByClassName("centerDiv")[i].style.backgroundColor= themes.grayDM.background;    
        }
        break;
        case "brownLM":
            for (let i = 0; i < document.getElementsByClassName("centerDiv").length; i++) {
                document.getElementsByClassName("centerDiv")[i].style.color= themes.brownLM.text;
                document.getElementsByClassName("centerDiv")[i].style.backgroundColor= themes.brownLM.background;    
            }
        break;
        case "brownDM":
        for (let i = 0; i < document.getElementsByClassName("centerDiv").length; i++) {
            document.getElementsByClassName("centerDiv")[i].style.color= themes.brownDM.text;
            document.getElementsByClassName("centerDiv")[i].style.backgroundColor= themes.brownDM.background;    
        }
        break;
        case "orangeLM":
            for (let i = 0; i < document.getElementsByClassName("centerDiv").length; i++) {
                document.getElementsByClassName("centerDiv")[i].style.color= themes.orangeLM.text;
                document.getElementsByClassName("centerDiv")[i].style.backgroundColor= themes.orangeLM.background;    
            }
        break;
        case "orangeDM":
        for (let i = 0; i < document.getElementsByClassName("centerDiv").length; i++) {
            document.getElementsByClassName("centerDiv")[i].style.color= themes.orangeDM.text;
            document.getElementsByClassName("centerDiv")[i].style.backgroundColor= themes.orangeDM.background;    
        }
        break;
        case "yellowDM":
            for (let i = 0; i < document.getElementsByClassName("centerDiv").length; i++) {
                document.getElementsByClassName("centerDiv")[i].style.color= themes.yellowDM.text;
                document.getElementsByClassName("centerDiv")[i].style.backgroundColor= themes.yellowDM.background;    
            }
        break;
        case "yellowLM":
        for (let i = 0; i < document.getElementsByClassName("centerDiv").length; i++) {
            document.getElementsByClassName("centerDiv")[i].style.color= themes.yellowLM.text;
            document.getElementsByClassName("centerDiv")[i].style.backgroundColor= themes.yellowLM.background;    
        }
        break;
        case "greenDM":
            for (let i = 0; i < document.getElementsByClassName("centerDiv").length; i++) {
                document.getElementsByClassName("centerDiv")[i].style.color= themes.greenDM.text;
                document.getElementsByClassName("centerDiv")[i].style.backgroundColor= themes.greenDM.background;    
            }
        break;
        case "greenLM":
        for (let i = 0; i < document.getElementsByClassName("centerDiv").length; i++) {
            document.getElementsByClassName("centerDiv")[i].style.color= themes.greenLM.text;
            document.getElementsByClassName("centerDiv")[i].style.backgroundColor= themes.greenLM.background;    
        }
        break;
        case "blueDM":
            for (let i = 0; i < document.getElementsByClassName("centerDiv").length; i++) {
                document.getElementsByClassName("centerDiv")[i].style.color= themes.blueDM.text;
                document.getElementsByClassName("centerDiv")[i].style.backgroundColor= themes.blueDM.background;    
            }
        break;
        case "blueLM":
        for (let i = 0; i < document.getElementsByClassName("centerDiv").length; i++) {
            document.getElementsByClassName("centerDiv")[i].style.color= themes.blueLM.text;
            document.getElementsByClassName("centerDiv")[i].style.backgroundColor= themes.blueLM.background;    
        }
        break;
        case "purpleDM":
            for (let i = 0; i < document.getElementsByClassName("centerDiv").length; i++) {
                document.getElementsByClassName("centerDiv")[i].style.color= themes.purpleDM.text;
                document.getElementsByClassName("centerDiv")[i].style.backgroundColor= themes.purpleDM.background;    
            }
        break;
        case "purpleLM":
        for (let i = 0; i < document.getElementsByClassName("centerDiv").length; i++) {
            document.getElementsByClassName("centerDiv")[i].style.color= themes.purpleLM.text;
            document.getElementsByClassName("centerDiv")[i].style.backgroundColor= themes.purpleLM.background;    
        }
        break;
        case "pinkDM":
            for (let i = 0; i < document.getElementsByClassName("centerDiv").length; i++) {
                document.getElementsByClassName("centerDiv")[i].style.color= themes.pinkDM.text;
                document.getElementsByClassName("centerDiv")[i].style.backgroundColor= themes.pinkDM.background;    
            }
        break;
        case "pinkLM":
        for (let i = 0; i < document.getElementsByClassName("centerDiv").length; i++) {
            document.getElementsByClassName("centerDiv")[i].style.color= themes.pinkLM.text;
            document.getElementsByClassName("centerDiv")[i].style.backgroundColor= themes.pinkLM.background;    
        }
        break
        case "redDM":
            for (let i = 0; i < document.getElementsByClassName("centerDiv").length; i++) {
                document.getElementsByClassName("centerDiv")[i].style.color= themes.redDM.text;
                document.getElementsByClassName("centerDiv")[i].style.backgroundColor= themes.redDM.background;    
            }
        break;
        case "redLM":
        for (let i = 0; i < document.getElementsByClassName("centerDiv").length; i++) {
            document.getElementsByClassName("centerDiv")[i].style.color= themes.redLM.text;
            document.getElementsByClassName("centerDiv")[i].style.backgroundColor= themes.redLM.background;    
        }
        break;
        default:
            for (let i = 0; i < document.getElementsByClassName("centerDiv").length; i++) {
                document.getElementsByClassName("centerDiv")[i].style.color = "#FFFFFF90"
                document.getElementsByClassName("centerDiv")[i].style.backgroundColor = "#2F3437"    
            }
        break;
    }
    urlWidget.searchParams.set("textColor",themes[val].text);
    urlWidget.searchParams.set("bgColor",themes[val].background);
    document.getElementById("urlArea").innerHTML = urlWidget;
}

function selectColorText(val){
    for (let i = 0; i < document.getElementsByClassName("centerDiv").length; i++) {
        document.getElementsByClassName("centerDiv")[i].style.color = val;
    }
    urlWidget.searchParams.set("textColor",val);
    document.getElementById("urlArea").innerHTML = urlWidget;
}

function selectColorBg(val){
    for (let i = 0; i < document.getElementsByClassName("centerDiv").length; i++) {
        document.getElementsByClassName("centerDiv")[i].style.backgroundColor = val;    
    }
    urlWidget.searchParams.set("bgColor",val);
    document.getElementById("urlArea").innerHTML = urlWidget;
}

/*rCorners*/
function selectCorners(val){
    for (let i = 0; i < document.getElementsByClassName("centerDiv").length; i++) {
        document.getElementsByClassName("centerDiv")[i].style.borderRadius = val+"%";    
    }
    urlWidget.searchParams.set("rCorners",val+"%");
    document.getElementById("urlArea").innerHTML = urlWidget;
}

function selectLabel(){
    let textLabel = document.getElementById("labelSelector").value;
    let showDate = document.getElementById("labelDate").checked;
     //let icon = document.getElementById("iconLabel").value;
    visualDate = new Date(selDate);
        for (let i = 0; i < document.getElementsByClassName("selected-date").length; i++) {
             if(showDate){
                document.getElementsByClassName("selected-date")[i].style.innerHTML = textLabel + visualDate.toLocaleDateString();    
            }else{
                document.getElementsByClassName("selected-date")[i].style.innerHTML = textLabel;
            }
        }
    urlWidget.searchParams.set("textLabel",textLabel);
    urlWidget.searchParams.set("showDate",showDate);
    //urlWidget.searchParams.set("icon",icon);
    document.getElementById("urlArea").innerHTML = urlWidget;
}

function getCountdown(){
    const now = new Date();
    const date2  = new Date(selDate);
    let visualDate = date2;
    for (let i = 0; i < document.getElementsByClassName("selected-date").length; i++) {
        if(checkDate(date2)){
            if(document.getElementById("labelDate").checked){
                document.getElementsByClassName("selected-date")[i].innerHTML =  document.getElementById("labelSelector").value + visualDate.toLocaleDateString();
            }else{
                document.getElementsByClassName("selected-date")[i].innerHTML =  document.getElementById("labelSelector").value;
            }
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

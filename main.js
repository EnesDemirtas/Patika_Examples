function get_name() {
    let name = prompt("What's your name?")
    document.getElementById("myName").textContent = name
}
window.addEventListener("load", get_name)


function display_c() {
    var refresh = 1000; // Refresh rate in milli seconds
    mytime = setTimeout('display_ct()', refresh)
}

function display_ct() {
    var currentTime = new Date()
    var hours = currentTime.getHours()
    var minutes = currentTime.getMinutes()
    var sec = currentTime.getSeconds()
    if (minutes < 10){
        minutes = "0" + minutes
    }
    if (sec < 10){
        sec = "0" + sec
    }
    var t_str = hours + ":" + minutes + ":" + sec + " ";
    if(hours > 11){
        t_str += "PM";
    } else {
       t_str += "AM";
    }
    t_str = t_str.replace(hours, hours % 12) 
    document.getElementById('myClock').textContent = t_str;
    display_c();
}

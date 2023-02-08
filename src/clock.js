
updateHeight()
var height;
$(window).resize(function() {
    updateHeight();
    console.log("screen height changed to " + height)
});


function updateHeight()
{
    height = $(window).height();
    document.getElementById('main-page').style.height = `${height}px`
    document.getElementById('h24').checked = true
    document.getElementById('data24').checked = true
    document.getElementById('back24').checked = true
    document.getElementById('set24').checked = true
}


var t = setInterval(ClockUpdate,500);
var use24 = 1;
function ClockUpdate()
{
    var date = new Date();
    var hour = date.getHours();
    var mins = date.getMinutes();
    var seconds = date.getSeconds();
    mins = mins < 10 ? `0${mins}` : mins;
    seconds = seconds < 10 ? `0${seconds}` : seconds;

    if(use24 == 1)
    {
        hour = hour < 10 ? `0${hour}` : hour;
        document.getElementById('clock_show').textContent = `${hour}:${mins}:${seconds}`
    }
    else{
        var format = "AM";
        if(hour == 12) format = "PM";
        if(hour>12){
            hour = hour - 12;
            format = "PM"
        }
        hour = hour < 10 ? `0${hour}` : hour;
        document.getElementById('clock_show').textContent = `${hour}:${mins}:${seconds} ${format}`
    }

    var year = date.getFullYear()
    var month = date.getMonth() + 1
    var day = date.getDate()

    const days_list = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
    var weekday = days_list[date.getDay()];

    document.getElementById('date_show').textContent = `${year}/${month}/${day} ${weekday}`
}

function formatChange()
{
    var checked = document.getElementById('h24').checked
    if(checked == true)
    {
        use24 = 1;
    }else{
        use24 = 0;
    }
}

function dateChange()
{
    var checked = document.getElementById('data24').checked
    if(checked == true)
    {
        document.getElementById('date_show').style.display = "block"
    }else{
        document.getElementById('date_show').style.display = "none"
    }
}

function backChange()
{
    var checked = document.getElementById('back24').checked
    if(checked == true)
    {
        document.getElementById('back_button').style.opacity = 1
    }else{
        document.getElementById('back_button').style.opacity = 0
    }
}

function SettingsChange()
{
    var checked = document.getElementById('set24').checked
    if(checked == true)
    {
        document.getElementById('settings_button').style.opacity = 1
    }else{
        document.getElementById('settings_button').style.opacity = 0
    }
}

function settingsOpen()
{
    document.querySelector('.clock_side_digital_nav').style.width = "250px"
}
function settingsClose()
{
    document.querySelector('.clock_side_digital_nav').style.width = "0px"
}

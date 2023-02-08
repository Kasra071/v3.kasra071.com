const apikey = "72295073f45d86c3b8e4e394c1e45a68";
var unittype = "metric";
var CF = "C";
var speedshow = " KM/H"
var cityname;
var latloc;
var lonloc;
var usedthing = "n";
var citynameshow;
var ccodeshow;
var iconshow;
var temp;
var tempfeel;
var humid;
var dissit;
var dismain;
var windspeedv;
var errorcode;
var cities = 1;
var cities_that_added = []
var datause;
var iused = 0;
var showed = 0;
var city_container = document.getElementById('city_container');

const WEBURLQ = new Proxy(new URLSearchParams(window.location.search), {
    get: (searchParams, prop) => searchParams.get(prop),
  });
let cusTomLoader = WEBURLQ.cus;

if(cusTomLoader == 1)
{
    add_city('shiraz');
    add_city('qeshm');
}

function MyLoc()
{


    if (navigator.geolocation) {
        document.getElementById("error_weather").textContent = "Please Wait..."
        navigator.geolocation.getCurrentPosition(showPosition, showError);
    } else { 
        document.getElementById("error_weather").textContent = "Geolocation is not supported by this browser.";
    }


    function showPosition(position) {
    latloc = position.coords.latitude;
    lonloc = position.coords.longitude;
    add_city_loc()
    }

    function showError(error) {
    switch(error.code) {
        case error.PERMISSION_DENIED:
        document.getElementById("error_weather").textContent = "User denied the request for Geolocation."
        break;
        case error.POSITION_UNAVAILABLE:
            document.getElementById("error_weather").textContent = "Location information is unavailable."
        break;
        case error.TIMEOUT:
            document.getElementById("error_weather").textContent = "The request to get user location timed out."
        break;
        case error.UNKNOWN_ERROR:
            document.getElementById("error_weather").textContent = "An unknown error occurred."
        break;
    }
    }

}

function add_city_loc()
{
    if(iused == 0)
    {

    
    
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latloc}&lon=${lonloc}&appid=${apikey}&units=${unittype}`)
        .then(response => response.json())
        .then(data =>{
 
   errorcode = data['cod'];
    if(errorcode == 200)
    {
        datause = data;
        print_information()
        iused =1;

        }else if(errorcode == 401)
        {
            document.getElementById("error_weather").textContent="Server Error"
        }else if(errorcode == 429)
        {
            document.getElementById("error_weather").textContent="Please Try Again in 1 minute"
        }else{
            document.getElementById("error_weather").textContent="Unknown ERROR"
        }
        
        
    }).catch(err => (document.getElementById("error_weather").textContent="Unknown ERROR!"))
}else{
    document.getElementById("error_weather").textContent="We Already added your location's weather :/"
}
    
}

function add_city(namePar)
{
    if(namePar==undefined || namePar == null || namePar == "")
    {
        var cityname = document.getElementById('city_input').value;
    }else{
        var cityname = namePar
    }
    if(showed == 0 && cities > 1)
    {
        document.getElementById("error_weather").style.color = "#ffffff"
        document.getElementById("error_weather").textContent="if you cant find the city you want , enter 2 letter country code like this : Rome,IT"
        showed = 1;
    }else{
        document.getElementById("error_weather").style.color = "red"
        document.getElementById("error_weather").textContent=""
    }



    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=${apikey}&units=${unittype}`)
    .then(response => response.json())
    .then(data =>{
 
   errorcode = data['cod'];
    if(errorcode == 200)
    {
        datause = data;
        print_information()

        }else if(errorcode == 404 || errorcode == 400)
        {
            document.getElementById("error_weather").textContent="City Not Found"
        }else if(errorcode == 401)
        {
            document.getElementById("error_weather").textContent="Server Error"
        }else if(errorcode == 429)
        {
            document.getElementById("error_weather").textContent="Please Try Again in 1 minute"
        }else{
            document.getElementById("error_weather").textContent="Unknown ERROR"
        }
        
        
        }).catch(err => (document.getElementById("error_weather").textContent="Unknown ERROR!"))
    
}



function remove_city(n)
{
    var removewhat = document.getElementById(`city-${n}`);
    removewhat.remove()
}



function print_information()
{
    citynameshow = datause['name'];
    ccodeshow = datause['sys']['country'];
    temp = datause['main']['temp'];
    tempfeel = datause['main']['feels_like'];
    humid = datause['main']['humidity'];
    dissit = datause['weather']['0']['description'];
    dismain = datause['weather']['0']['main'];
    windspeedv = datause['wind']['speed']
    iconshow = datause['weather']['0']['icon']
    
    windspeedv = windspeedv * 3.6;
    windspeedv = windspeedv.toFixed(2)
    var addTEMP;
    if(windspeedv == 0)
    {
        addTEMP = `
        <div class="city_weather" id="city-${cities}">
        <img class="city_close" alt="remove city" src="https://dl.kasra071.com/v3_assets/remove.svg" onclick="remove_city(${cities})"> 
        <img class="city_iocn" alt="${dismain}" src="https://openweathermap.org/img/wn/${iconshow}@2x.png"> 
        <h2 class="city_name">${citynameshow}</h2>
        <h3 class="country">${ccodeshow}</h3>
        <span class="temp_w">${temp}°C</span>
        <span class="temp_w_feels">Feels Like : ${tempfeel}°C</span>
        <span class="humid_text clear">${dismain}</span>
        <span class="humid_text_small">${dissit}</span>
        <span class="humid_text humid">humidity : ${humid}%</span> 
        <span class="humid_text">Wind Speed : not found</span>      
        </div>
        `
    }else{
        addTEMP = `
        <div class="city_weather" id="city-${cities}">
        <img class="city_close" alt="remove city" src="https://dl.kasra071.com/v3_assets/remove.svg" onclick="remove_city(${cities})"> 
        <img class="city_iocn" alt="${dismain}" src="https://openweathermap.org/img/wn/${iconshow}@2x.png"> 
        <h2 class="city_name">${citynameshow}</h2>
        <h3 class="country">${ccodeshow}</h3>
        <span class="temp_w">${temp}°C</span>
        <span class="temp_w_feels">Feels Like : ${tempfeel}°C</span>
        <span class="humid_text clear">${dismain}</span>
        <span class="humid_text_small">${dissit}</span>
        <span class="humid_text humid">humidity : ${humid}%</span>
        <span class="humid_text">Wind Speed : ${windspeedv} KM/H</span>                    
        </div>
        `
    }

    var addNOTTEMP = document.createElement('div');
    addNOTTEMP.classList.add('inline_block_nomarpad');
    addNOTTEMP.innerHTML = addTEMP;
    city_container.appendChild(addNOTTEMP)
    addTEMP = ""
    cities = cities + 1;


    
}
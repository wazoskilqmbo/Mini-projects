const API_KEY = '6ed3825fe0b38e20dabea217e8bb55bc'

const API = `https://api.openweathermap.org/data/2.5/weather?&appid=${API_KEY}&units=metric`


const checkWeather = async (city) =>{
    const res = await fetch(API + "&q=" + city);

    if(res.status == 404)
    {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none"
    }
    else
    {
        var data = await res.json();

        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

        const weatherIcon = document.querySelector(".weatherIcon");
        
        if(data.weather[0].main == 'Clouds'){
            weatherIcon.src = "images/clouds.png"
        }
        else if(data.weather[0].main == 'Clear'){
            weatherIcon.src = "images/clear.png"
        }
        else if(data.weather[0].main == 'Rain'){
            weatherIcon.src = "images/rain.png"
        }
        else if(data.weather[0].main == 'Drizzle'){
            weatherIcon.src = "images/drizzle.png"
        }
        else if(data.weather[0].main == 'Mist'){
            weatherIcon.src = "images/mist.png"
        }


        document.querySelector(".weather").style.display = "block"
        document.querySelector(".error").style.display = "none"
    }

}
const handleClick = () =>{
    var city = document.getElementById('city').value;
    checkWeather(city)
}
    
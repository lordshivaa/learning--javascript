const userInput = document.querySelector('#user_input')
const search_button = document.querySelector('#serch-img')
const temperature = document.querySelector('.temp')
const city_name = document.querySelector('.city')
const humidity = document.querySelector('.humidity')
const wind_speed = document.querySelector('.wind')
const weather_icon = document.querySelector(".weather-icon")
const weather = document.querySelector(".weather")
const error = document.querySelector(".error")


search_button.addEventListener('click', function(e){
    e.preventDefault()
    const input = userInput.value
    console.log(input);
    getDetails(input)
})


async function getDetails(name){
    try {
        const api_key = "5e79aeb2961d4a6f7442c651cd689632"
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=${api_key}&units=metric`)

        if (response.status == 404) {
            error.style.display = "block";
            weather.style.display = "none"
        }else{
            const data = await response.json()
            console.log(data);
            const tempe = Math.round(data['main']['temp']);
            const humidit = data['main']['humidity'];
            const wind = data['wind']['speed'];
            const c_name = data['name']
    
            temperature.innerHTML = `${tempe}°c`
            city_name.innerHTML = c_name
            humidity.innerHTML = `${humidit}%`
            wind_speed.innerHTML = `${wind} km/h`
    
            if (data.weather[0].main == "Clouds") {
                weather_icon.src = "images/clouds.png"
            }else if (data.weather[0].main == "Clear"){
                weather_icon.src = "images/clear.png"
            }else if (data.weather[0].main == "Rain"){
                weather_icon.src = "images/rain.png"
            }else if (data.weather[0].main == "Drizzle"){
                weather_icon.src = "images/drizzle.png"
            }else if (data.weather[0].main == "Mist"){
                weather_icon.src = "images/mist.png"
            }
    
            weather.style.display = "block"
            error.style.display = "none"
    
        }


    } catch (error) {
        console.log("Error: Wrong");
    }
}




const API_KEY = `611ff4e00eefa5fcd99c5de20b7b0524`
const from = document.querySelector("form")
const search = document.querySelector("#search")
const getWeather = async (city) => {
	weather.innerHTML = `<h2> Loading.... <h2>`
	const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
	const response = await fetch(url);
	const data = await response.json()
	return showWeather(data)
}
const showWeather = (data) =>{
	if(data){
		weather.innerHTML = `<h2> City Not Found <h2>`
	}
	weather.innerHTML = `
	<div>
                <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="">
            </div>
            <div>
                <h2>${data.main.temp} ℃</h2>
                <h4> ${data.weather[0].main} </h4>
            </div> `
}
from.addEventListener(
	"submit", 
	function(event){
		getWeather(search.value)
		event.preventDefault();
	}
)
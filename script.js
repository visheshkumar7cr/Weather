const weather =()=>{
let location=document.getElementById('user').value


const url = `https://weatherapi-com.p.rapidapi.com/current.json?q=${location}`;

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '5b47722d20msh5707327c2b58d7ep1c980cjsnb79b465b9fba',
		'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
	}
};
let response = fetch(url, options)
response.then((value) => {
  return value.json()

}).then((weather) => {
console.log(weather)

 //location
  let country = (weather.location.country)
  let lat = (weather.location.lat)
  let localtime = new Date(weather.location.localtime)
  hh=localtime.getHours()
  mm=localtime.getMinutes()
  ss=localtime.getSeconds()
  let time=hh +":"+ mm 
  let localtime_epoch = (weather.location.localtime_epoch)
  let lon = (weather.location.lon)
  let name = (weather.location.name)
  let region = (weather.location.region)
  let tz_id = (weather.location.tz)

//weather
  let cloud = (weather.current.cloud)
  let text = (weather.current.condition.text)
  let icon = (weather.current.condition.icon)
  let humidity=(weather.current.humidity)

  let feelslike_c = (weather.current.feelslike_c)
  let feelslike_f = (weather.current.feelslike_f)
  let pressure_in = (weather.current.pressure_in)
  let pressure_mb = (weather.current.pressure_mb)
  let temp_c = (weather.current.temp_c)
  let temp_f = (weather.current.temp_f)
  let uv = (weather.current.uv)
  let wind_degree = (weather.current.wind_degree)
  let wind_dir = (weather.current.wind_dir)
  let wind_kph = (weather.current.wind_kph)
  let wind_mph = (weather.current.wind_mph)


// console.log(wind_dir)
ihtml=`  <div class="container">
<div id="info">
<p>Country : ${country}</p>
<p>Loaction : ${name}</p>
<p>Region : ${region}</p>
<p>Time : ${time}</p>
<p>Country : ${country}</p>
</div>
</div>
<div class="container">
<span><img src="${icon}" alt=""></span>
<p>${temp_c}&#x2103;</p>

<div class="info">
<p>Cloud: ${cloud}</p>
<p>Condition: ${text}</p>
    <p>Real feel: ${feelslike_c}</p>
    <p>Humidity : ${humidity}</p>
    <p>UV Index:${uv}</p>
    <p>Cloud Cover</p>
    <p>Wind Directin:' ${wind_dir} '</p>
</div>
</div>
</div>
`












document.getElementById('box').innerHTML=ihtml


})

}
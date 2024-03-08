function buttonClicked(x){

    // var city=document.getElementById(x).value;
    var city=x;
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=9fd7a449d055dba26a982a3220f32aa2`)
    .then((response) => response.json())
    .then((data) => {
        console.log(data)
        // document.getElementById('CityName').innerHTML=`City: `
        document.getElementById('Country').innerHTML=`${data.name}, ${data.sys.country}`
        document.getElementById('Coordinate').innerHTML=`[${data.coord.lat}, ${data.coord.lon}]`
        document.getElementById('map').setAttribute('href',`https://www.google.com/maps/place/${data.coord.lat},${data.coord.lon}`)
        document.getElementById('map').innerHTML=`View Map`
        document.getElementById('map').style.paddingInline='10px'
        document.getElementById('Weather').innerHTML=`${data.weather[0].description}`
        document.getElementById('Temperature').innerHTML=`${((data.main.temp)-273.15).toFixed(2)}°C`
        document.getElementById('MinTemp').innerHTML=`${((data.main.temp_min)-273.15).toFixed(2)}°C`
        document.getElementById('MaxTemp').innerHTML=`${((data.main.temp_max)-273.15).toFixed(2)}°C`
        document.getElementById('Humidity').innerHTML=`${data.main.humidity}%`
        document.getElementById('Wind').innerHTML=`${((data.wind.speed)*18/5).toFixed(2)}km/h`
        document.getElementById('Sunrise').innerHTML=`${new Date(data.sys.sunrise*1000).toLocaleTimeString()}`
        document.getElementById('Sunset').innerHTML=`${new Date(data.sys.sunset*1000).toLocaleTimeString() }`
        currentTime();

        if((data.wind.speed)*18/5<30){
            document.getElementById('condition').innerHTML=`It is safe to do the skydiving activity at this place`
            document.getElementById('condition').style.color='#99ff99'
        }
        else{
            document.getElementById('condition').innerHTML=`It is not safe to do the skydiving activity at this place`
            document.getElementById('condition').style.color='#ff9999'
        }
    })

}

function search(){
    var city=document.getElementById('searchData').value;
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=9fd7a449d055dba26a982a3220f32aa2`)
    .then((response) => response.json())
    .then((data) => {
        console.log(data)
        // document.getElementById('CityName').innerHTML=`City: `
        document.getElementById('Country').innerHTML=`${data.name}, ${data.sys.country}`
        document.getElementById('Coordinate').innerHTML=`[${data.coord.lat}, ${data.coord.lon}]`
        document.getElementById('map').setAttribute('href',`https://www.google.com/maps/place/${data.coord.lat},${data.coord.lon}`)
        document.getElementById('map').innerHTML=`View Map`
        document.getElementById('map').style.paddingInline='10px'
        document.getElementById('Weather').innerHTML=`${data.weather[0].description}`
        document.getElementById('Temperature').innerHTML=`${((data.main.temp)-273.15).toFixed(2)}°C`
        document.getElementById('MinTemp').innerHTML=`${((data.main.temp_min)-273.15).toFixed(2)}°C`
        document.getElementById('MaxTemp').innerHTML=`${((data.main.temp_max)-273.15).toFixed(2)}°C`
        document.getElementById('Humidity').innerHTML=`${data.main.humidity}%`
        document.getElementById('Wind').innerHTML=`${((data.wind.speed)*18/5).toFixed(2)}km/h`
        document.getElementById('Sunrise').innerHTML=`${new Date(data.sys.sunrise*1000).toLocaleTimeString()}`
        document.getElementById('Sunset').innerHTML=`${new Date(data.sys.sunset*1000).toLocaleTimeString() }`
        currentTime();

        if((data.wind.speed)*18/5<30){
            document.getElementById('condition').innerHTML=`It is safe to do the skydiving activity at this place`
            document.getElementById('condition').style.color='#99ff99'
        }
        else{
            document.getElementById('condition').innerHTML=`It is not safe to do the skydiving activity at this place`
            document.getElementById('condition').style.color='#ff9999'
        }
    })
}
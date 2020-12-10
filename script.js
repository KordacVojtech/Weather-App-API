const input = document.getElementById('input');
const submit = document.getElementById('submit');



submit.onclick = async function getWeather(){

    const tempText = document.getElementById('tempText');
    const cityText = document.getElementById('city');
    const countryText = document.getElementById('country');
    const descrip = document.getElementById('descrip');
    const moreDesc = document.getElementById('moreDesc');
    const img = document.getElementById('img');

    
    const city = input.value;
    const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=8fb5d72f02341b18384fc6fc21f551da`, {mode: 'cors'});
    const weatherData = await response.json();
    const cityName = weatherData.name
    console.log(cityName);
    const country = weatherData.sys.country;
    console.log(country);
    const kelv = weatherData.main.temp;
    const cels = Math.round(kelv - 273.15);
    console.log(cels);
    const weatherStatus = weatherData.weather[0].main;
    console.log(weatherStatus);
    const statusDesc = weatherData.weather[0].description;
    console.log(statusDesc);
    console.log(weatherData)
    
    function appendToPage(){
        cityText.textContent = cityName;
        countryText.textContent = country;
        descrip.textContent = weatherStatus;
        moreDesc.textContent = statusDesc;
        tempText.textContent = cels + '°C';
        determineIcon();
    }

    function determineIcon(){
        if(weatherStatus ==='Clear'){
            img.src = './icons/sun.png'
            document.body.style.background = 'url("https://ak.picdn.net/shutterstock/videos/32781985/thumb/1.jpg")';
            document.body.style.backgroundSize = 'cover';
            document.body.style.backgroundPosition = 'center';
            document.body.style.backgroundRepeat = 'no-repeat';
        } else if(weatherStatus ==='Snow'){
            img.src = './icons/snow.png'
            document.body.style.background = 'url("https://wallpaperaccess.com/full/697291.jpg")';
            document.body.style.backgroundSize = 'cover';
            document.body.style.backgroundPosition = 'center';
            document.body.style.backgroundRepeat = 'no-repeat';
        } else if(weatherStatus ==='Rain'){
            img.src = './icons/rain.png'
            document.body.style.background = 'url("https://www.rainstreammedia.com/wp-content/uploads/2017/09/Animated-Rain-Gif-Background-Photography-rain-wallpaper.jpg")';
            document.body.style.backgroundSize = 'cover';
            document.body.style.backgroundPosition = 'center';
            document.body.style.backgroundRepeat = 'no-repeat';
        } else if(weatherStatus ==='Clouds'){
            img.src = './icons/cloud.png'
            document.body.style.background = 'url("https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/84576b8a-e61b-4dd0-9c50-5a5682e4b87e/d4gfe5g-410fe16c-5ed3-4782-bc61-faf5ffa36d80.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvODQ1NzZiOGEtZTYxYi00ZGQwLTljNTAtNWE1NjgyZTRiODdlXC9kNGdmZTVnLTQxMGZlMTZjLTVlZDMtNDc4Mi1iYzYxLWZhZjVmZmEzNmQ4MC5qcGcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.ZIT9f-a9QeP_Nn6eEYmMdgt-7tJtvXDjs95xW5b7Rqs")';
            document.body.style.backgroundSize = 'cover';
            document.body.style.backgroundPosition = 'center';
            document.body.style.backgroundRepeat = 'no-repeat';            
        } else if(weatherStatus ==='Haze'){
            img.src = './icons/cloud.png'
            document.body.style.background = 'url("https://d1acid63ghtydj.cloudfront.net/09-10-2018/t_bc3e74a6f3cd4aa7827169e691066448_name_fog.JPG")';
            document.body.style.backgroundSize = 'cover';
            document.body.style.backgroundPosition = 'center';
            document.body.style.backgroundRepeat = 'no-repeat';
        } else if(weatherStatus ==='Mist'){
            img.src = './icons/cloud.png'
            document.body.style.background = 'url("https://c0.anyrgb.com/images/135/698/nature-weather-outdoors-fog-mist-grey-mountain-wallpaper-background-yosemite.jpg")';
            document.body.style.backgroundSize = 'cover';
            document.body.style.backgroundPosition = 'center';
            document.body.style.backgroundRepeat = 'no-repeat';
        }
    }

    appendToPage();
    
}


//Clear, Snow, Rain, clouds, Haze


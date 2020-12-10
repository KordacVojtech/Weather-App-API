const input = document.getElementById('input');
const submit = document.getElementById('submit');



submit.onclick = async function getWeather(){

    const tempText = document.getElementById('tempText');
    const cityText = document.getElementById('city');
    const countryText = document.getElementById('country');
    const descrip = document.getElementById('descrip');
    const moreDesc = document.getElementById('moreDesc');
    const img = document.getElementById('img');
    const min = document.getElementById('min');
    const max = document.getElementById('max');
    const unitBtn = document.getElementById('unit');
    const celsTempBtn = document.getElementById('celsTemp');

    
    const city = input.value;
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=8fb5d72f02341b18384fc6fc21f551da`, {mode: 'cors'});
    
    if(response.status===404){
        alert('Error: could not find city, please try again with a different city');
    }

    const weatherData = await response.json();
    const cityName = weatherData.name
    const country = weatherData.sys.country;
    const kelv = weatherData.main.temp;
    const cels = Math.round(kelv - 273.15);
    const weatherStatus = weatherData.weather[0].main;
    const statusDesc = weatherData.weather[0].description;
    const minTextKelv = weatherData.main.temp_min;
    const minTextCels = Math.round(minTextKelv - 273.15);
    const maxTextKelv = weatherData.main.temp_max;
    const maxTextCels = Math.round(maxTextKelv-273.15);




    input.value = '';


    
    function appendToPage(){
        cityText.textContent = cityName;
        countryText.textContent = country;
        descrip.textContent = weatherStatus;
        moreDesc.textContent = statusDesc;
        tempText.textContent = cels + '°C';
        min.textContent = 'Min: '+minTextCels + '°C';
        max.textContent = 'Max: '+maxTextCels + '°C';
        determineImg();
    }

    unitBtn.onclick = function(){
        const tempFar = (cels*(9/5)+32);
        const minTempFar = (minTextCels*(9/5)+32);
        const maxTempFar = (maxTextCels*(9/5)+32);
        const tempFarText = Math.round(tempFar);
        const minTempFarText = Math.round(minTempFar);
        const maxTempFarText = Math.round(maxTempFar);
        tempText.textContent = tempFarText + '°F';
        min.textContent = 'Min: '+minTempFarText + '°F';
        max.textContent = 'Max: '+maxTempFarText + '°F';

        celsTempBtn.onclick = function(){
            const tempBackCels = ((tempFarText - 32)*(5/9));
            const minBackCels = ((minTempFarText - 32)*(5/9));
            const maxBackCels = ((maxTempFarText -32)*(5/9));
            const tempBackCelsRound = Math.round(tempBackCels);
            const minBackCelsRound = Math.round(minBackCels);
            const maxBackCelsRound = Math.round(maxBackCels);
            tempText.textContent = tempBackCelsRound + '°C';
            min.textContent = 'Min: '+minBackCelsRound + '°C';
            max.textContent = 'Max: '+maxBackCelsRound + '°C';
 
        }
    }




    function determineImg(){
        switch(weatherStatus){
            case 'Clear':
                img.src = './icons/sun.png'
                document.body.style.background = 'url("https://ak.picdn.net/shutterstock/videos/32781985/thumb/1.jpg")';
                document.body.style.backgroundSize = 'cover';
                document.body.style.backgroundPosition = 'center';
                document.body.style.backgroundRepeat = 'no-repeat';
                break
            case 'Snow':
                img.src = './icons/snow.png'
                document.body.style.background = 'url("https://wallpaperaccess.com/full/697291.jpg")';
                document.body.style.backgroundSize = 'cover';
                document.body.style.backgroundPosition = 'center';
                document.body.style.backgroundRepeat = 'no-repeat';
                break
            case 'Rain':
                img.src = './icons/rain.png'
                document.body.style.background = 'url("https://www.rainstreammedia.com/wp-content/uploads/2017/09/Animated-Rain-Gif-Background-Photography-rain-wallpaper.jpg")';
                document.body.style.backgroundSize = 'cover';
                document.body.style.backgroundPosition = 'center';
                document.body.style.backgroundRepeat = 'no-repeat';
                break
            case 'Clouds':
                img.src = './icons/cloud.png'
                document.body.style.background = 'url("https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/84576b8a-e61b-4dd0-9c50-5a5682e4b87e/d4gfe5g-410fe16c-5ed3-4782-bc61-faf5ffa36d80.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvODQ1NzZiOGEtZTYxYi00ZGQwLTljNTAtNWE1NjgyZTRiODdlXC9kNGdmZTVnLTQxMGZlMTZjLTVlZDMtNDc4Mi1iYzYxLWZhZjVmZmEzNmQ4MC5qcGcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.ZIT9f-a9QeP_Nn6eEYmMdgt-7tJtvXDjs95xW5b7Rqs")';
                document.body.style.backgroundSize = 'cover';
                document.body.style.backgroundPosition = 'center';
                document.body.style.backgroundRepeat = 'no-repeat'; 
                break
            case 'Haze':
                img.src = './icons/cloud.png'
                document.body.style.background = 'url("https://d1acid63ghtydj.cloudfront.net/09-10-2018/t_bc3e74a6f3cd4aa7827169e691066448_name_fog.JPG")';
                document.body.style.backgroundSize = 'cover';
                document.body.style.backgroundPosition = 'center';
                document.body.style.backgroundRepeat = 'no-repeat';
                break
            case 'Mist':
                img.src = './icons/cloud.png'
                document.body.style.background = 'url("https://c0.anyrgb.com/images/135/698/nature-weather-outdoors-fog-mist-grey-mountain-wallpaper-background-yosemite.jpg")';
                document.body.style.backgroundSize = 'cover';
                document.body.style.backgroundPosition = 'center';
                document.body.style.backgroundRepeat = 'no-repeat';
                break   
        }

        
        
    }

    

    appendToPage();
    
}


//Clear, Snow, Rain, clouds, Haze


window.addEventListener('load', () => {
    const apiKey = '4169a06c2d8ccd4acfa0b808e95b7879'; 
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=malaysia&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            const location = data.name;
            const temperature = data.main.temp;
            const conditions = data.weather[0].description;
            const icon = data.weather[0].icon;

            // console.log(icon);

            document.getElementById('location').textContent = location;
            document.getElementById('temperature').textContent = `${temperature} °C`;
            document.getElementById('conditions').textContent = conditions;
            document.getElementById('weather-icon').style.backgroundImage = `url('https://openweathermap.org/img/wn/${icon}.png')`;
        })
        .catch(error => {
            console.error('There was a problem fetching the weather data:', error);
        });
});

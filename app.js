
        document.getElementById('getWeather').addEventListener('click', function() {
            const city = document.getElementById('city').value;
            const apiKey = 'ec94e8003cb2417a946121325243105';  //APi key de la url
            const apiUrl = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=no`;
        
            axios.get(apiUrl)
                .then(response => {
                    const weatherData = response.data;
                    const weatherInfo = `
                        <h2>${weatherData.location.name}, ${weatherData.location.country}</h2>
                        <h3>${weatherData.current.temp_c}°C</h3>
                        <img src="${weatherData.current.condition.icon}" alt="Weather icon">
                        <p>${weatherData.current.condition.text}</p>
                        <p>Humidity: ${weatherData.current.humidity}%</p>
                        <p>Wind: ${weatherData.current.wind_kph} kph</p>
                    `;
                    document.getElementById('weatherInfo').innerHTML = weatherInfo;
                })
                .catch(error => {
                    console.error('Error fetching the weather data', error);
                    document.getElementById('weatherInfo').innerHTML = `<p class="text-danger">Could not retrieve weather data. Please try again.</p>`;
                });
        });
        
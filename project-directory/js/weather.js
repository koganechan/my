const apiKey = 'YOUR_API_KEY';
const city = 'Tokyo';
const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=ja`;

fetch(url)
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        const weatherElement = document.getElementById('weather');
        weatherElement.innerHTML = `
            <h2>${data.name}</h2>
            <p>天気: ${data.weather[0].description}</p>
            <p>温度: ${data.main.temp}°C</p>
            <p>湿度: ${data.main.humidity}%</p>
            <p>気圧: ${data.main.pressure} hPa</p>
            <p>最低/最高気温: ${data.main.temp_min} / ${data.main.temp_max} °C</p>
            <p>降雨量 (1h): ${data.rain ? data.rain['1h'] : 0} mm</p>
            <p>風速: ${data.wind.speed} m/s</p>
            <p>風向: ${data.wind.deg}° (方角：${data.wind.deg})</p>
            <p>データ取得日時: ${new Date(data.dt * 1000).toLocaleString('ja-JP')}</p>
        ;
    })
    .catch(error => {
        console.error('Error fetching weather data:', error);
        document.getElementById('weather').innerHTML = '<p>天気情報を取得できませんでした。</p>';
    });

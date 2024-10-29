const apiKey = '9778186f903a62a3c1aeb24f60e8af0d';  // 取得したAPIキーをここに貼り付ける
const city = 'Tokyo';
const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

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
        `;
    })
    .catch(error => {
        console.error('Error fetching weather data:', error);
        document.getElementById('weather').innerHTML = '<p>天気情報を取得できませんでした。</p>';
    });

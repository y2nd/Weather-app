const API_KEY = window.env.API_KEY;

const BASE_URL = "https://api.openweathermap.org/data/2.5";


const getWeatherData = (infoType, searchParams) => {
    const url = new URL(BASE_URL + '/' + infoType);
    url.search = new URLSearchParams({...searchParams, appid:API_KEY});

    return fetch(url).then(res => res.json());
};

const formatCurrentWeather = (data) => {
    const {
        coord: {lon, lat},
        main: {temp, feels_like, temp_min, temp_max, humidity},
        name,
        dt,
        sys: {country, sunrise, sunset},
        weather,
        wind: {speed},
    } = data;

    const {main: details, icon} = weather[0];

    return {lat, lon, temp, feels_like, temp_min, temp_max, humidity, name, country, sunrise, sunset, details, icon, speed, dt};
};

const getFormattedWeatherData = async (searchParams) => {
    const formattedCurrentWeather = await getWeatherData("weather", searchParams).then(formatCurrentWeather);

    return formattedCurrentWeather;
};


export default getFormattedWeatherData;

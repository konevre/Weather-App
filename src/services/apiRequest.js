import moment from 'moment';

const weatherService = () => {
    const _apiKey = "6cf6cd0da4914f10b1ee0650e8712ea8";
    const _apiBase = "https://api.openweathermap.org/data/2.5/";

    const requestCurrent = async (city) => {
        const response = await fetch(`${_apiBase}/weather?q=${city}&appid=${_apiKey}&units=metric`);
        const result = await response.json();
        return transformCurrent(result);
    }

    const requestToday = async (city) => {
        const response = await fetch(`${_apiBase}/forecast?q=${city}&appid=${_apiKey}&units=metric`);
        const result = await response.json();
        return result.list.slice(0, 6).map(transformToday);
    }

    const requestForecast = async (city) => {
        const response = await fetch(`${_apiBase}/forecast?q=${city}&appid=${_apiKey}&units=metric`);
        const result = await response.json();
        const list = result.list.filter((_, i) => i === 0 || i % 8 === 0 );
        return list.map(transformForecast);
    }

    const transformToday = (data) => {
        return {
            temp: Math.round(data.main.temp),
            descr: data.weather[0].main,
            time: data.dt_txt.slice(-8, -3),
            icon: data.weather[0].icon
        }
    }

    const transformForecast = (data) => {
        const days = ['Mon','Tue','Wed','Thu','Fri','Sat', 'Sun']
        return {
            temp: Math.round(data.main.temp),
            icon: data.weather[0].icon.slice(0, -1),
            descr: data.weather[0].main,
            date: days[new Date(data.dt * 1000).getDay()]
        }
    }

    const transformCurrent = (data) => {

        return {
            name: data.name,
            temp: Math.round(data.main.temp),
            feel: Math.round(data.main.feels_like),
            humidity: data.main.humidity,
            wind: data.wind.speed,
            icon: data.weather[0].icon,
            visibility: data.visibility / 1000,
            time: moment().utcOffset(data.timezone / 60).format("kk:mm")
        }
    }

    return { requestCurrent, requestToday, requestForecast };
}

export default weatherService;
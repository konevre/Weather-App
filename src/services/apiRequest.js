const weatherService = () => {
    const _apiKey = "6cf6cd0da4914f10b1ee0650e8712ea8";
    const _apiBase = "https://api.openweathermap.org/data/2.5/";

    const calcTime = (dt, offset) => {
        const d = new Date(dt * 1000);
        const utc = d.getTime() + (d.getTimezoneOffset() * 60000);
        const nd = new Date(utc + (3600000 * offset / 60 / 60));
        return nd.toLocaleTimeString().slice(0, -3)
    }

    const requestCurrent = async (city) => {
        const response = await fetch(`${_apiBase}/weather?q=${city}&appid=${_apiKey}&units=metric`);
        const result = await response.json();
        return transformCurrent(result);
    }

    const requestToday = async (city) => {
        const response = await fetch(`${_apiBase}/forecast?q=${city}&appid=${_apiKey}&units=metric`);
        const result = await response.json();
        return transformToday(result.list, result.city.timezone)
    }

    const requestForecast = async (city) => {
        const response = await fetch(`${_apiBase}/forecast?q=${city}&appid=${_apiKey}&units=metric`);
        const result = await response.json();
        const list = result.list.filter((_, i) => i === 0 || i % 8 === 0 );
        return list.map(transformForecast);
    }

    const transformToday = (list, timezone) => {
        return list.slice(0, 6).map(item => {
            return {
                temp: Math.round(item.main.temp),
                descr: item.weather[0].main,
                time: calcTime(item.dt, timezone),
                icon: item.weather[0].icon
            }
        })
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
            time: calcTime(data.dt, data.timezone)
        }
    }

    return { requestCurrent, requestToday, requestForecast };
}

export default weatherService;
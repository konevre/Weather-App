const calcTime = (dt, offset) => {
    const d = new Date(dt * 1000);
    const utc = d.getTime() + (d.getTimezoneOffset() * 60000);
    const nd = new Date(utc + (3600000 * offset / 60 / 60));
    return nd.toLocaleTimeString().slice(0, -3)
};

export const transformCurrent = (data) => {
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
};

export const transformToday = (list, timezone, number) => {
    return list.slice(0, number).map(item => {
        return {
            temp: Math.round(item.main.temp),
            descr: item.weather[0].main,
            time: calcTime(item.dt, timezone),
            icon: item.weather[0].icon
        }
    })
};

export const transformForecast = (data, number = 5) => {
    const filtered = data.list.filter(item => item.dt_txt.slice(-8) === "15:00:00");
    const list = number <= 5 ? filtered.slice(0, number) : filtered.slice(0, 5);
    const days = ['Mon','Tue','Wed','Thu','Fri','Sat', 'Sun'];
    
    return list.map(item => {
        return {
            temp: Math.round(item.main.temp),
            icon: item.weather[0].icon.slice(0, -1),
            descr: item.weather[0].main,
            date: days[new Date(item.dt * 1000).getDay()]
        }
    })
}

export const transformCoords = (data) => {
    return [data.coord.lat, data.coord.lon]
};
const calcTime = (dt, offset, hour12) => {
    const d = new Date(dt * 1000);
    const utc = d.getTime() + (d.getTimezoneOffset() * 60000);
    const nd = new Date(utc + (3600000 * offset / 60 / 60));
    return nd.toLocaleTimeString([], { hour12, hour: "2-digit", minute: "2-digit" })
};

const convertTemp = (data, activeTemp) => {
    switch (activeTemp) {
        case "Fahrenheit":
            return Math.round(data * 1.8 + 32) + "°F"
        case "Kelvin":
            return Math.round(data + 273.15) + "°K"
        default:
            return Math.round(data) + "°C"
    }
}

const convertWind = (data, activeWind) => {
    switch (activeWind) {
        case "km/h":
            return Math.round(data * 3.6) + " km/h"
        case "Knots":
            return Math.round(data * 1.944) + " Knots" 
        default:
            return Math.round(data) + " m/s"
    }
}

const convertPressure = (data, activePressure) => {
    switch (activePressure) {
        case "Inches":
            return Math.round(data / 33.864) + " Inches"
        case "kPa":
            return Math.round(data / 10) + " kPa"
        case "mm":
            return Math.round(data / 1.333) + " mm"
        default:
            return data + " hPa"
    }
}

const convertDistance = (data, activeDistance) => {
    switch (activeDistance) {
        case "Miles":
            return Math.round(data / 1.609) + " mi"
        default:
            return Math.round(data) + " km"
    }
} 

export const transformCurrent = (data, settings) => {
    const { 
        activeTemp, 
        activeWind, 
        activePressure, 
        activeDistance,
        hour12
    } = settings;

    return {
        name: data.name,
        temp: convertTemp(data.main.temp, activeTemp),
        feel: convertTemp(data.main.feels_like, activeTemp),
        humidity: data.main.humidity + "%",
        pressure: convertPressure(data.main.pressure, activePressure),
        wind: convertWind(data.wind.speed, activeWind),
        cloudiness: data.clouds.all + "%",
        icon: data.weather[0].icon,
        visibility: convertDistance(data.visibility / 1000, activeDistance),
        coords: [data.coord.lat, data.coord.lon],
        time: calcTime(data.dt, data.timezone, hour12),
        sunrise: calcTime(data.sys.sunrise, data.timezone, hour12),
        sunset: calcTime(data.sys.sunset, data.timezone, hour12),
    }
};

export const transformToday = (list, timezone, number, settings) => {
    const { activeTemp, hour12 } = settings;
    return list.slice(0, number).map(item => {
        return {
            temp: convertTemp(item.main.temp, activeTemp),
            descr: item.weather[0].main,
            time: calcTime(item.dt, timezone, hour12),
            icon: item.weather[0].icon
        }
    })
};

export const transformForecast = (data, settings, number = 5) => {
    const { activeTemp } = settings;

    const days = ['Mon','Tue','Wed','Thu','Fri','Sat', 'Sun'];
    const forecastObj = [];
    const nightTemp = [];

    data.list.forEach(item => {
        if (item.dt_txt.slice(-8) === "15:00:00") {
            forecastObj.push(item);
        } else if (item.dt_txt.slice(-8) === "03:00:00") {
            nightTemp.push(item.main.temp);
        }
    })

    return forecastObj.slice(0, number).map((item, i) => {
        return {
            temp: convertTemp(item.main.temp, activeTemp).slice(0, -2),
            tempNight: convertTemp(nightTemp[i], activeTemp).slice(0, -2),
            icon: item.weather[0].icon.slice(0, -1),
            descr: item.weather[0].main,
            date: days[new Date(item.dt * 1000).getDay()]
        }
    })
}

export const getLocalStorage = (name, def) => {
    return localStorage.getItem(name) ? JSON.parse(localStorage.getItem(name)) : def;
} 

export const setLocalStorage = (name, payload) => {
    localStorage.setItem(name, JSON.stringify(payload))
} 

export const transformCoords = (data) => {
    return [data.coord.lat, data.coord.lon]
};

export const handleDispatch = (page, cities, city, dispatch, addCity, makeActive) => {
    if ((page === "cities" || page === "map") && !cities.includes(city)) {
        dispatch(addCity(city))
    } if (page === "weather") {
        dispatch(makeActive(city))
    }
}
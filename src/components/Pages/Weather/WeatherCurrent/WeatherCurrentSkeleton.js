import Skeleton from '@mui/material/Skeleton';

import "./style/weatherCurrent.scss"

import WeatherError from './WeatherError';

const WeatherCurrentSkeleton = ({error}) => {
    
    const errorDialog = error ? <WeatherError error={error}/> : null;

    return (
        <div className="weather__current">
            {errorDialog}
            <div className="weather__current-wrapper">
                <Skeleton className="weather__current-city skeleton" />
                <Skeleton className="weather__current-rain skeleton" />
            </div>
            <Skeleton className="weather__current-temp skeleton" />
            <Skeleton variant="circular" className="weather__current-img skeleton" />
        </div>
    )
}

export default WeatherCurrentSkeleton;
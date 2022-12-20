import Skeleton from '@mui/material/Skeleton';

import "./weatherCurrent.scss"

import WeatherError from './WeatherError';

const WeatherCurrentSkeleton = ({error}) => {
    
    const errorDialog = error ? <WeatherError error={error}/> : null;

    return (
        <div className="weather__current">
            {errorDialog}
            <div className="weather__current-wrapper">
                <div className="weather__current-city">
                    <Skeleton sx={{ fontSize: "5vh", bgcolor: '#101B2B', width: "80%" }} />
                </div>
                <div className="weather__current-rain">
                    <Skeleton sx={{ fontSize: "2vh", bgcolor: '#101B2B', width: "80%" }} />
                </div>
            </div>
            <div className="weather__current-temp">
                <Skeleton sx={{ fontSize: "7vh", bgcolor: '#101B2B', width: "30%", height: "100%" }} />
            </div>
            <div className="weather__current-img">
                <Skeleton variant="circular" sx={{ marginTop: "5vh", marginRight: "2vh", height: "20vh", width: "11vw", bgcolor: '#101B2B' }} />
            </div>
        </div>
    )
}

export default WeatherCurrentSkeleton;
import Skeleton from '@mui/material/Skeleton';

const WeatherForecastSkeleton = ({number, size}) => {

    const content = []
    for (let i = 0; i < number; i++) {
        content.push(
            <div className="weather__forecast-item skeleton" key={i}>
                <Skeleton className={`weather__forecast-day skeleton ${size}`} />
                <Skeleton className={`weather__forecast-img skeleton ${size}`} variant="circular" />
                <Skeleton className={`weather__forecast-descr skeleton ${size}`} />
                <Skeleton className={`weather__forecast-temp skeleton ${size}`} />
            </div>
        )
    }

    return (
        <div className={`weather__forecast ${size}`}>
            <div className={`weather__forecast-title ${size}`}>5-DAY FORECAST</div>
            <div className="weather__forecast-wrapper">
                {content}
            </div>
        </div>
    )
}

export default WeatherForecastSkeleton;
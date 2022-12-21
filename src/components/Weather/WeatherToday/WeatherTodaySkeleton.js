import Skeleton from '@mui/material/Skeleton';

const WeatherTodaySkeleton = ({number, size}) => {

    const content = []
    for (let i = 0; i < number; i++) {
        content.push(
            <div key={i} className="weather__today-item">
                <Skeleton className="weather__today-time skeleton" />
                <Skeleton variant="circular" className="weather__today-img skeleton" />
                <Skeleton className="weather__today-temp skeleton" />
            </div>
        )
    }

    return (
        <div className={`weather__today ${size}`}>
            <div className={`weather__today-title ${size}`}>TODAY'S FORECAST</div>
            <div className={`weather__today-forecast ${size}`}>
                {content}
            </div>
        </div>
    )
}

export default WeatherTodaySkeleton;
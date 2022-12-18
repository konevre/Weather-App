import Skeleton from '@mui/material/Skeleton';

const WeatherForecastSkeleton = () => {

    const content = []
    for (let i = 0; i < 5; i++) {
        content.push(
            <div className="weather__forecast-item" key={i}>
                <Skeleton sx={{ bgcolor: '#35455E', fontSize: "2.2vh", width: "3vw" }} />
                <Skeleton variant="circular" sx={{ bgcolor: '#35455E', width: "5.2vw", height: "9vh" }} />
                <Skeleton sx={{ bgcolor: '#35455E', fontSize: "2.2vh", width: "3.7vw" }} />
                <Skeleton sx={{ bgcolor: '#35455E', fontSize: "2.2vh", width: "3.7vw" }} />
            </div>
        )
    }

    return (
        <div className="weather__forecast">
            <div className="weather__forecast-title">5-DAY FORECAST</div>
            <div className="weather__forecast-wrapper">
                {content}
            </div>
        </div>
    )
}

export default WeatherForecastSkeleton;
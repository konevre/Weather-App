import Skeleton from '@mui/material/Skeleton';

const WeatherTodaySkeleton = () => {

    const content = []
    for (let i = 0; i < 6; i++) {
        content.push(
            <div key={i} className="weather__today-item">
                <Skeleton sx={{ bgcolor: '#35455E', fontSize: "2vh", width: "80%" }} />
                <Skeleton variant="circular" sx={{ marginTop: "1vh", bgcolor: '#35455E', width: "10vh", height: "10vh" }} />
                <Skeleton sx={{ marginTop: "1vh", fontSize: "2.5vh", bgcolor: '#35455E', width: "80%" }} />
            </div>
        )
    }

    return (
        <div className="weather__today">
            <div className="weather__today-title">TODAY'S FORECAST</div>
            <div className="weather__today-forecast">
                {content}
            </div>
        </div>
    )
}

export default WeatherTodaySkeleton;
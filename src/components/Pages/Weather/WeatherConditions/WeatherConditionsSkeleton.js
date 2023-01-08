import Skeleton from '@mui/material/Skeleton';

const WeatherConditionsSkeleton = () => {
    const sxImgNSub = { fontSize: "2.2vh", bgcolor: '#35455E', width: "80%" };
    const sxValue = { fontSize: "3vh", bgcolor: '#35455E', width: "80%" };

    const content = []
    for (let i = 0; i < 8; i++) {
        content.push(
            <div key={i} className="weather__conditions-item">
                <Skeleton sx={sxImgNSub} />
                <Skeleton sx={sxImgNSub} />
                <div className="weather__conditions-value"><Skeleton sx={sxValue}/></div>
            </div>
        )
    }

    return (
        <div className="weather__conditions">
            <div className="weather__conditions-title">GENERAL</div>
            <div className="weather__conditions-wrapper">
                {content}
            </div>
        </div>
    )
}

export default WeatherConditionsSkeleton;
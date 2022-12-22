import Skeleton from '@mui/material/Skeleton';

import close from "../../../resources/close.svg";
import "./citiesItem.scss";

const CitiesListSkeleton = () => {
    return (
        <div className="cities__item">
            <Skeleton variant="circular" className="cities__item-img skeleton"/>
            <div className="cities__item-descr">
                <Skeleton className="cities__item-name skeleton" />
                <Skeleton className="cities__item-time skeleton" />
            </div>
            <Skeleton className="cities__item-temp skeleton" />
            <img src={close} alt="close" className="cities__item-delete" />
        </div>
    )
}

export default CitiesListSkeleton;
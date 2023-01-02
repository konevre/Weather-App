import Skeleton from '@mui/material/Skeleton';

import { ReactComponent as Close } from "../../../../resources/close.svg";
import "./style/citiesItem.scss";

const CitiesListSkeleton = () => {
    return (
        <div className="cities__item">
            <Skeleton variant="circular" className="cities__item-img skeleton"/>
            <div className="cities__item-descr">
                <Skeleton className="cities__item-name skeleton" />
                <Skeleton className="cities__item-time skeleton" />
            </div>
            <Skeleton className="cities__item-temp skeleton" />
            <Close className="cities__item-delete"/>
        </div>
    )
}

export default CitiesListSkeleton;
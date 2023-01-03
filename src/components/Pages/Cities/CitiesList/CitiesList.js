import { useSelector, useDispatch } from "react-redux";
import { Reorder } from "framer-motion"

import CitiesItem from "../CitiesItem/CitiesItem";
import { updateCities } from "../CitiesSlice";

import "./citiesList.scss";

const CitiesList = ({size}) => {

    const { cities } = useSelector(state => state.cities)
    const dispatch = useDispatch();

    if (cities.length === 0) {
        return  (
            <div className="empty">Please, search for any city <span>🔍</span></div>
        )
        
    }

    const items = cities.map((item, i) => {
            return <CitiesItem item={item} key={item} size={size}/>
        }
    )

    return (
        <Reorder.Group 
            axis="y"
            layoutScroll
            className={`cities__wrapper`}
            as="div" 
            values={cities}
            onReorder={(state) => dispatch(updateCities(state))}
        >
            {items}
        </Reorder.Group>
    )

};

export default CitiesList;
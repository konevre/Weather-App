import { useSelector, useDispatch } from "react-redux";
import { Reorder } from "framer-motion"

import CitiesItem from "../CitiesItem/CitiesItem";
import { updateCities } from "../CitiesSlice";

import "./citiesList.scss";

const CitiesList = () => {

    const { cities } = useSelector(state => state.cities)
    const dispatch = useDispatch();
    console.log(cities)

    if (cities.length === 0) {
        return  (
            <div className="empty">Please, search for any city <span>🔍</span></div>
        )
        
    }

    const items = cities.map(item => {
            return <CitiesItem item={item} key={item}/>
        }
    )

    return (
        <Reorder.Group 
            axis="y"
            layoutScroll
            className="cities__wrapper" 
            as="div" 
            values={cities}
            onReorder={(state) => dispatch(updateCities(state))}
        >
            {items}
        </Reorder.Group>
    )

};

export default CitiesList;
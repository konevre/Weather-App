import { useSelector, useDispatch } from "react-redux";

import { citiesReceived } from "../CitiesSlice";
import CitiesItem from "../CitiesItem/CitiesItem";
import { filterActive, citiesSelector } from "../CitiesSlice";

import "./citiesList.scss";

const CitiesList = () => {

    const cities = useSelector(citiesSelector);
    console.log(cities)

    const dispatch = useDispatch();

    if (cities.length === 0) {
        return  (
            // TODO
            <h2>NO CITIES ADDED</h2>
        )
        
    }

    const items = cities.map((item, i) => {
        return <CitiesItem item={item.name} key={i}/>
    })

    return (
        <div className="cities__wrapper">
            {items}
        </div>
    )

};

export default CitiesList;
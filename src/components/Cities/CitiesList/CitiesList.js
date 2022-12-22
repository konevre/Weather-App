import { useSelector } from "react-redux";

import CitiesItem from "../CitiesItem/CitiesItem";

import "./citiesList.scss";

const CitiesList = () => {

    const { cities } = useSelector(state => state.cities)
    console.log(cities)

    if (cities.length === 0) {
        return  (
            // TODO
            <h2>NO CITIES ADDED</h2>
        )
        
    }

    const items = cities.map((item, i) => {
        return <CitiesItem item={item} key={i}/>
    })

    return (
        <div className="cities__wrapper">
            {items}
        </div>
    )

};

export default CitiesList;
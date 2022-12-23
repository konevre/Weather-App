import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Reorder } from "framer-motion"

import CitiesItem from "../CitiesItem/CitiesItem";
import { updateCities } from "../CitiesSlice";

import "./citiesList.scss";

const CitiesList = () => {

    const { cities } = useSelector(state => state.cities)
    const [ dndCities, setDnDCities ] = useState(cities)
    const dispatch = useDispatch();

    console.log("REDUX: ", cities);
    console.log("DND: ", dndCities);

    useEffect(() => {
        dispatch(updateCities(dndCities))
    }, [dndCities])

    useEffect(() => {
        setDnDCities(cities);
    }, [cities])

    console.log("render",)

    if (dndCities.length === 0) {
        return  (
            // TODO
            <h2>NO CITIES ADDED</h2>
        )
        
    }

    const items = dndCities.map(item => {
            return <CitiesItem item={item} key={item}/>
        }
    )

    return (
        <Reorder.Group 
            axis="y"
            layoutScroll
            className="cities__wrapper" 
            as="div" 
            values={dndCities}
            onReorder={setDnDCities}
        >
            {items}
        </Reorder.Group>
    )

};

export default CitiesList;
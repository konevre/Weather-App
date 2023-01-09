import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { makeActive } from "../Pages/Weather/weatherSlice";
import { addCity } from "../Pages/Cities/CitiesSlice";
import useErrorHandler from "../../hooks/useErrorHandler";
import { handleDispatch } from "../../utils/utils";

import "./locationButton.scss";
import icon from "../../resources/search/location.svg";
import spinner from "../../resources/search/spinner.svg"

const _geolocationAPIKey = "c6b672ea1cfa46b19344cadfc2eb4428",
      _geolocationAPI = 'https://api.ipgeolocation.io/ipgeo',
      url = `${_geolocationAPI}?apiKey=${_geolocationAPIKey}&fields=city`

const LocationButton = ({page}) => {
    const { cities } = useSelector(state => state.cities);
    const { bindError, isError, errorDialog } = useErrorHandler();
    const [ isLoading, setLoading ] = useState(false);
    const dispatch = useDispatch();

    const getLocation = () => {
        setLoading(true)
        fetch(url)
            .then(res => res.json())
            .then(data => {
                if ( data.city ) {
                    handleDispatch(page, cities, data.city, dispatch, addCity, makeActive)
                } else {
                    bindError("ip");
                }
                setLoading(false)
            })
            .catch(() => bindError("network"))
    }
    
    const buttonText = isLoading ? "Loading" : "Location";
    const src = isLoading ? spinner : icon;
                               
    return (
        <>
            { isError && errorDialog }
            <button 
                className="location__button" 
                disabled={isLoading}
                onClick={getLocation}>
                <div className="location__text">{ buttonText }</div>
                <img src={src} alt="location_icon" className="location__button-img"/>
            </button>
        </>
    )
}

export default LocationButton;
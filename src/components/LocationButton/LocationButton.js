import "./locationButton.scss";
import icon from "../../resources/search/location.svg";
import spinner from "../../resources/search/spinner.svg"

// import { Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { makeActive } from "../Pages/Weather/weatherSlice";

import useErrorHandler from "../../hooks/useErrorHandler";
import { useState } from "react";

const _geolocationAPIKey = "c6b672ea1cfa46b19344cadfc2eb4428",
      _geolocationAPI = 'https://api.ipgeolocation.io/ipgeo',
      url = `${_geolocationAPI}?apiKey=${_geolocationAPIKey}&fields=city`

const LocationButton = () => {
    const { bindError, isError, errorDialog } = useErrorHandler();
    const [ isLoading, setLoading ] = useState(false);
    const dispatch = useDispatch();

    const onLocation = (e) => {
        e.preventDefault()
        getLocation()
    } 
    const getLocation = () => {
        setLoading(true)
        fetch(url)
            .then(res => res.json())
            .then(data => {
                Object.keys(data).length === 2 ? dispatch(makeActive(data.city)) :
                    bindError("ip");
                setLoading(false)
            })
            .catch(e => bindError("network"))
    }
    
    const buttonText = isLoading ? "Loading" : "Location";
    const src = isLoading ? spinner : icon;
                               
    return (
        <>
            { isError && errorDialog }
            <button 
                className="location__button" 
                disabled={isLoading}
                onClick={onLocation}>
                <div className="location__text">{ buttonText }</div>
                <img src={src} alt="location_icon" className="location__button-img"/>
            </button>
        </>
    )
}

export default LocationButton;
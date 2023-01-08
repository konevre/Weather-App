import { useState } from "react";
import WeatherError from "../components/Pages/Weather/WeatherCurrent/WeatherError";

const useErrorHandler = () => {
    const [ isError, setError ] = useState(false);
    const [ message, setMessage ] = useState("");
    const errorDialog = <WeatherError descr={message} setError={setError}/>;

    const bindError = (message) => {
        setMessage(message);
        setError(true);
    }

    return { bindError, isError, errorDialog }
}

export default useErrorHandler;
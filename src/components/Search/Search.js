import { useDispatch, useSelector } from "react-redux";

import useErrorHandler from "../../hooks/useErrorHandler";
import { makeActive } from "../Pages/Weather/weatherSlice";
import { addCity } from "../Pages/Cities/CitiesSlice";
import { handleDispatch } from "../../utils/utils";

import "./style/search.scss"

const Search = ({page}) => {
    const { bindError, isError, errorDialog } = useErrorHandler();
    const { cities } = useSelector(state => state.cities);
    const dispatch = useDispatch();

    const submitHandler = async (page, list, city) => {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=e418a47a172d8f5a163ca9f1d327b2ed`;
        fetch(url)
            .then(res => res.json())
            .then(data => {
                    switch (data.cod) {
                        case 200:
                            handleDispatch(page, list, city, dispatch, addCity, makeActive)
                            break;
                        case "404":
                            bindError("404")
                            break
                        default:
                            bindError("500")
                            break
                    }
                })
            .catch(() => bindError("network"))
    }

    const submitSearch = (e) => {
        e.preventDefault()
        const city = e.target.search.value;

        submitHandler(page, cities, city)

        e.target.reset();
    }

    return (
        <form onSubmit={submitSearch}>
            { isError && errorDialog }
            <input name="search" type="search" className="search" placeholder="Search for cities..." />
        </form>
    )
}

export default Search;
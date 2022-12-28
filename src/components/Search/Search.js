import { makeActive } from "../Weather/weatherSlice";
import { addCity } from "../Cities/CitiesSlice";
import { useDispatch, useSelector } from "react-redux";

import "./search.scss"

const Search = ({page}) => {
    const { cities } = useSelector(state => state.cities);
    const dispatch = useDispatch();

    const submitHandler = (page, list, city) => {
        page === "cities" || page === "map" ? 
            list.includes(city) ? console.log("ALREADY EXIST") :  dispatch(addCity(city)) :
        dispatch(makeActive(city))
    }

    const submitSearch = (e) => {
        e.preventDefault()
        const city = e.target.search.value;

        submitHandler(page, cities, city)

        e.target.reset();
    }

    return (
        <form onSubmit={submitSearch}>
            <input name="search" type="search" className="search" placeholder="Search for cities..." />
        </form>
    )
}

export default Search;
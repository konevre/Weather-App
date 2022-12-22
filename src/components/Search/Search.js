import { makeActive } from "../Weather/weatherSlice";
import { addCity } from "../Cities/CitiesSlice";
import { useDispatch, useSelector } from "react-redux";

import "./search.scss"

const Search = ({page}) => {

    const { cities } = useSelector(state => state.cities);
    const checkCities = (list, city) => {
        return list.includes(city)
    }

    const submitHandler = (page, list, city) => {
        page === "cities" ? 
            checkCities(list, city) ? console.log("ALREADY EXIST") :  dispatch(addCity(city)) :
        dispatch(makeActive(city))

    }

    const dispatch = useDispatch();

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
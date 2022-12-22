import { makeActive } from "../Weather/weatherSlice";
import { filterActive } from "../Cities/CitiesSlice";
import { useDispatch } from "react-redux";

import "./search.scss"

const Search = ({page}) => {

    const dispatch = useDispatch();

    const submitSearch = (e) => {
        e.preventDefault()
        const city = e.target.search.value;

        page === "cities" ? dispatch(filterActive(city)) : dispatch(makeActive(city));

        e.target.reset();
    }

    return (
        <form onSubmit={submitSearch}>
            <input name="search" type="search" className="search" placeholder="Search for cities..." />
        </form>
    )
}

export default Search;
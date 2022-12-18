import { makeActive } from "../Weather/weatherSlice";
import { useDispatch } from "react-redux";

import "./search.scss"

const Search = () => {

    const dispatch = useDispatch();

    const submitSearch = (e) => {
        e.preventDefault()
        
        const city = e.target.search.value;
        dispatch(makeActive(city));
        e.target.reset();
    }

    return (
        <form onSubmit={submitSearch}>
            <input name="search" type="search" className="search" placeholder="Search for cities..." />
        </form>
    )
}

export default Search;
import { makeActive } from "../Pages/Weather/weatherSlice";
import { addCity } from "../Pages/Cities/CitiesSlice";
import { useDispatch, useSelector } from "react-redux";
import "./style/search.scss"

const Search = ({page}) => {
    const { cities } = useSelector(state => state.cities);
    const dispatch = useDispatch();

    const submitHandler = (page, list, city) => {
        if ( (page === "cities" || page === "map") && !list.includes(city) ) {
            dispatch(addCity(city))
            console.log("added")
        } else if (page === "settings") {
            return
        } else {
            dispatch(makeActive(city))
        }
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
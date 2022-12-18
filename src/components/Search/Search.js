import "./search.scss"

const Search = (props) => {

    const submitSearch = (e) => {
        e.preventDefault()
        const city = e.target.search.value;
        props.setCity(city);
        e.target.reset();
    }

    return (
        <form onSubmit={submitSearch}>
            <input name="search" type="search" className="search" placeholder="Search for cities..." />
        </form>
    )
}

export default Search;
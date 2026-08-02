function SearchBar({searchTerm, onSearch }) {
    return(
        <label className="search-box">
            <span>Search Dispensers</span>
            <input
            type="text"
            onChange={(e) => onSearch(e.target.value)}
            placeholder="Search by name or type"/>
        </label>
    )
}

export default SearchBar;
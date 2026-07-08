function SearchBar({ search, setSearch }) {
  return (
    <div className="search-container">
      <label htmlFor="search-posts" className="sr-only">
        Search Posts
      </label>

      <input
        id="search-posts"
        type="search"
        placeholder="Search posts..."
        aria-label="Search posts"
        autoComplete="off"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
}

export default SearchBar;
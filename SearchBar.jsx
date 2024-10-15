import React, { useState } from 'react';

function SearchBar() {
  const [query, setQuery] = useState('');

  const submitSearch = (event) => {
    event.preventDefault(); // prevent form submission
    if (query.trim() === '') return; // do nothing if input is empty
    const searchUrl = "https://www.google.com/search?q=" + encodeURIComponent(query);
    window.open(searchUrl, "_blank"); // open search in a new tab
    setQuery(''); // reset input field
  };

  return (
    <div className="mx-auto" style={{ width: '140px' }}>
      <form onSubmit={submitSearch}>
        <input
          type="text"
          placeholder="Search anything..."
          className="form-control"
          aria-label="Search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          style={{ height: '25px' }} // Set custom height
        />
      </form>
    </div>
  );
}

export default SearchBar;

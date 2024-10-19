import React, { useState, useEffect } from 'react';
import { PiX } from 'react-icons/pi';

function SearchBar() {
  const [query, setQuery] = useState('');
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 992);

  // Add useEffect to handle screen resizing
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 992); // Check if window width is less than or equal to 992px
    };

    window.addEventListener('resize', handleResize); // Add event listener for resize

    // Cleanup function to remove event listener on unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const submitSearch = (event) => {
    event.preventDefault(); // prevent form submission
    if (query.trim() === '') return; // do nothing if input is empty
    const searchUrl = "https://www.google.com/search?q=" + encodeURIComponent(query);
    window.open(searchUrl, "_blank"); // open search in a new tab
    setQuery(''); // reset input field
  };

  return (
    <div className="mx-auto" style={{ width: '140px', marginBottom: isMobile ? '40px' : '0px' }}>
      <form onSubmit={submitSearch}>
        <input
          type="text"
          placeholder="Search anything..."
          className="form-control"
          aria-label="Search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          style={{ height: '25px'  }} // Set custom height
        />
      </form>
    </div>
  );
}

export default SearchBar;

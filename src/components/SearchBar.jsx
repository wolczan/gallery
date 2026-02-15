import React, { useState, useEffect } from 'react';
import { FiSearch } from 'react-icons/fi';   // 👈 WAŻNE – MUSI BYĆ

function SearchBar() {
  const [query, setQuery] = useState('');
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 992);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 992);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const submitSearch = (event) => {
    event.preventDefault();
    if (!query.trim()) return;
    window.open(
      "https://www.google.com/search?q=" + encodeURIComponent(query),
      "_blank"
    );
    setQuery('');
  };

  return (
    <div
      className="mx-auto"
      style={{ width: '170px', marginBottom: isMobile ? '40px' : '0px' }}
    >
      <form onSubmit={submitSearch} style={{ position: 'relative' }}>
        
        {/* 🔍 LUPKA */}
        <FiSearch
          style={{
            position: 'absolute',
            top: '50%',
            left: '8px',
            transform: 'translateY(-50%)',
            pointerEvents: 'none',
            color: '#ffffff',             // 👈 KONTRAST
            opacity: 0.85,                // lekka przezroczystość
            fontSize: '15px',             // 👈 była zbyt mała
          }}
        />

        <input
          type="text"
          placeholder="Wyszukaj"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="form-control"
          style={{
            height: '28px',
            paddingLeft: '26px',          // 👈 miejsce na lupkę
            backgroundColor: 'rgba(0,0,0,0.45)',
            border: '1px solid rgba(255,255,255,0.35)',
            color: 'white',
            borderRadius: '8px',
            outline: 'none',
          }}
        />
      </form>
    </div>
  );
}

export default SearchBar;

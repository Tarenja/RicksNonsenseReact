import React, { useState, useEffect } from 'react';
import Characters from './components/Characters';
import axios from 'axios';
import './App.css';

function App() {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(false);
  const [totalPages, setTotalPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchCharacters = async () => {
      setLoading(true);
      const res = await axios.get('https://rickandmortyapi.com/api/character/');
      setCharacters(res.data.results);
      setTotalPages(res.data.info.pages);
      setLoading(false);
    }

    fetchCharacters();
  }, []);

  console.log(characters)
  return (
    <div className="App">
      <h1 className="page-title">Rick's Biographical Nonsense</h1>
      <Characters characters={characters} loading={loading} />
    </div>
  );
}

export default App;

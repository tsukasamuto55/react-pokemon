import { useEffect, useState } from 'react';
import './App.css';
import { getAllPokemon } from './utils/pokemon';

function App() {
  const initialURL = 'https://pokeapi.co/api/v2/pokemon';
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPokemonData = async () => {
      const res = await getAllPokemon(initialURL);

      loadPokemonData(res.results);
      setLoading(false);
    };
    fetchPokemonData();
  });

  const loadPokemonData = data => {
    const _pokemonData = Promise.all(
      data.map(pokemon => {
        console.log(pokemon);
      })
    );
  };

  return (
    <div className='App'>
      {loading ? (
        <h1>Loading... </h1>
      ) : (
        <h1>Fetching Pokemon data is complete</h1>
      )}
    </div>
  );
}

export default App;

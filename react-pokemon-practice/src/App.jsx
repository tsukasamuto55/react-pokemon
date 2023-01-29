import { useEffect, useState } from 'react';
import './App.css';
import { getAllPokemon, getPokemonInfo } from './utlis/pokemon';

function App() {
  const initialURL = 'https://pokeapi.co/api/v2/pokemon';
  const [loading, setLoading] = useState(true);
  const [pokemonData, setPokemonData] = useState([]);

  useEffect(() => {
    const fetchPokemonData = async () => {
      const res = await getAllPokemon(initialURL);
      loadPokemonData(res.results);
      setLoading(false);
    };
    fetchPokemonData();
  }, []);

  const loadPokemonData = async data => {
    const _pokemonData = await Promise.all(
      data.map(pokemon => {
        const pokemonRecord = getPokemonInfo(pokemon.url);
        return pokemonRecord;
      })
    );
    setPokemonData(_pokemonData);
  };

  return (
    <div className='App'>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div>
          {pokemonData.map((pokemon, idx) => (
            <div key={idx}>{pokemon.name}</div>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;

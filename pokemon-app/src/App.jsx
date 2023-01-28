import { useEffect, useState } from 'react';
import './App.css';
import Card from './components/Card/Card';
import { getAllPokemon, getPokemon } from './utils/pokemon';

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
        const pokemonRecord = getPokemon(pokemon.url);
        return pokemonRecord;
      })
    );
    setPokemonData(_pokemonData);
  };

  return (
    <div className='App'>
      {loading ? (
        <h1>Loading... </h1>
      ) : (
        <>
          <div className='pokemonCardContainer'>
            {pokemonData.map((pokemon, idx) => {
              return <Card key={idx} pokemon={pokemon} />;
            })}
          </div>
        </>
      )}
    </div>
  );
}

export default App;

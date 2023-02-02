import { useEffect, useState } from 'react';
import './App.css';
import { getAllPokemon, getPokemonInfo } from './utils/pokemon';
import Card from './components/Card/Card';

function App() {
  const initialURL = 'https://pokeapi.co/api/v2/pokemon';
  const [loading, setLoading] = useState(true);
  const [pokemonData, setPokemonData] = useState([]);
  const [nextURL, setNextURL] = useState('');
  const [prevURL, setPrevURL] = useState('');

  useEffect(() => {
    const fetchPokemonData = async () => {
      const res = await getAllPokemon(initialURL);
      loadPokemonData(res.results);
      setNextURL(res.next);
      setPrevURL(res.previous);
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

  const handleNextPage = async () => {
    setLoading(true);
    const res = await getAllPokemon(nextURL);
    await loadPokemonData(res.results);
    setNextURL(res.next);
    setPrevURL(res.previous);
    setLoading(false);
  };

  const handlePrevPage = async () => {
    if (prevURL === null) return;

    setLoading(true);
    const res = await getAllPokemon(prevURL);
    await loadPokemonData(res.results);
    setNextURL(res.next);
    setPrevURL(res.previous);
    setLoading(false);
  };
  return (
    <>
      <div className='App'>
        {loading ? (
          <div>Loading...</div>
        ) : (
          <div>
            {pokemonData.map((pokemon, idx) => (
              <div key={idx}>{<Card pokemon={pokemon} />}</div>
            ))}
          </div>
        )}
      </div>
      <button onClick={handlePrevPage}>Prev</button>
      <button onClick={handleNextPage}>Next</button>
    </>
  );
}

export default App;

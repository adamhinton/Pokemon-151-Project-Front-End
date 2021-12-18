import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import AllPokemon from './components/AllPokemon';

function App() {
const [pokemon, setPokemon] = useState({});

useEffect( () =>{
  axios.get('https://pokeapi.co/api/v2/pokemon/?limit=151')
    .then(res =>{
      console.log('Res.data.results:', res.data.results)
      setPokemon(res.data.results)
    })
    .catch(err =>{
      console.log('Error:', err)
    })
}, [])
  
console.log(pokemon[0])


  return (
    <div className="App">
      <AllPokemon pokemon = {pokemon}/>
    </div>
  );
}

export default App;

import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import "./Pokemon.css";


const Pokemon = () => {
  const [pokemon, setPokemon] = useState({});
  const [isShow, setIsShow] = useState(true)
  // const pokeAleatorio = ()=>Math.floor(Math.random)*600;
  useEffect(() => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${Math.floor(Math.random()*601)+1}`)
    .then(res=>setPokemon(res.data))
  
  }, []);
  console.log(pokemon);
  
  const changePokemon = ()=>{
    axios.get(`https://pokeapi.co/api/v2/pokemon/${Math.floor(Math.random()*601)+1}`)
    .then(res=>setPokemon(res.data));
    setIsShow(true);
  }
  const showPokemon = ()=>setIsShow(!isShow)
  return (
    <div className='card-pokemon'>
      <h1>{isShow ? `Quien es este Pokemon?`: `Es ${pokemon.name}!`}</h1>
      <img className={isShow? "showPokemon": ""} src={pokemon.sprites?.other.dream_world.front_default} width="200px" alt="" />
      <p>weigth: {isShow? `?` : `${pokemon.weight/10} kg`}</p>
      <p>heigth: {isShow? `?` : `${pokemon.height*10} cm`} </p>
      <p>type: {isShow? `?` :pokemon.types?.map((element,index) => (<span key={index}>{element.type.name} </span> ))}</p>
      <button onClick={showPokemon}>{isShow? "Mostrar": "Ocultar"}</button>
      <button onClick={changePokemon}>Change</button>
    </div>
  )
}

export default Pokemon
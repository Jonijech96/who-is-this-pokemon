import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import "./Pokemon.css";
import fondoImage from "../assets/borde-pokemon.png";



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
  <>
    <div className='card-pokemon'>
      <h1>{isShow ? `Quien es ese Pokemon?`: `Es ${pokemon.name}!`}</h1>
      <img className={`img-pokemon ${isShow? "showPokemon": ""}`} src={pokemon.sprites?.other.dream_world.front_default} width="150px" alt="" />
      <p>weigth: {isShow? `?` : `${pokemon.weight/10} kg`}</p>
      <p>heigth: {isShow? `?` : `${pokemon.height*10} cm`} </p>
      <p>type: {isShow? `?` :pokemon.types?.map((element,index) => (<span key={index}>{element.type.name} </span> ))}</p>
      <button onClick={showPokemon}>{isShow? "Show": "Hide"}</button>
      <button onClick={changePokemon}>Change</button>
    </div>
    <div className="content">
      <img src={fondoImage} className="fondo-pokemon" width="800px" alt="" />
    </div>
  
  </>
  )
}

export default Pokemon
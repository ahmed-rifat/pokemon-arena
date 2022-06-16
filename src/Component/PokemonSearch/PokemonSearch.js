import React from 'react';
import { useState } from 'react';
import './PokemonSearch.css'

const PokemonSearch = () => {
    const [pokemon, setPokemon] = useState('');
    console.log(pokemon);

  const pokimon =(e)=>{
     
      const pokimonName = document.getElementById('pokimon').value;
      fetch(`https://pokeapi.co/api/v2/pokemon/${pokimonName}`)
    .then(res=> res.json())
    .then(data => setPokemon(data)
    ) 
  }
 


    return (

        <div>

                  <div className='grid place-content-center pokemon-body'>
                    <div>
                        {/*search area start */}

                  <input id='pokimon' type="text" placeholder="Find your pokemon" className="input input-bordered input-info w-full max-w-xs mt-40" />
                  <button onClick={()=>pokimon()} className="btn btn-accent mt-3">Search</button>
                  
                  {/* search area start */}
                    </div>

                  
                  {/* pokimon card start */}

                    {(pokemon?.name)?
                    <div className="card w-96 bg-base-100 shadow-xl mt-5 mb-16 ">
                    <figure className="px-10 pt-10">
                        <img src={pokemon?.sprites?.other?.dream_world?.front_default} alt="pokemon" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">{pokemon?.name}</h2>
                        <p>Moves: {pokemon?.moves?.[0].move?.name}</p>
                        <p>Weight: {pokemon?.weight}</p>
                        <p>Ability: {pokemon?.abilities?.[0].ability?.name}</p>
                        <p>base-experience: {pokemon?.base_experience}</p>
                        
                    </div>
                    </div>:
                    <div className="card lg:card-side bg-base-100 shadow-xl mt-5 mb-16">
                    <figure><img src="https://s.clipartkey.com/mpngs/s/54-542290_transparent-pokeball-png-transparent-background-pokeball-opening.png" alt="Album"/></figure>
                  </div>
                    
                    }
                    


                    {/* pokimon card End */}

                  </div>
                

                  

            
        </div>
    );
};

export default PokemonSearch;
import React from 'react';
import Pokemon from './Pokemon';

class Pokemons extends React.Component {

    ProfileArray = this.props.pokemons.filter( pokemon => {
      return pokemon.types.includes(this.props.type)
    });

  render () {

    return (
        <div>
            {
            this.ProfileArray.map(pokemon => {
                return <Pokemon pokemon={pokemon}/>
            })
            }
        </div>
    );

  }
}

export default Pokemons;

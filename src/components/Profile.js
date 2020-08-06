import React from 'react';
import Pokemon from './Pokemon';
import { Router, Link, Route} from 'react-router-dom';
import Pokemons from './Pokemons';

class Profile extends React.Component {

  render () {
    return (
        <table>
            <thead>
                <tr>
                <th>{this.props.pokemon.name}</th>
                </tr>
                <tr> 
                    {
                        this.props.pokemon.types.map(type => {
                            return type
                    })
                    }
                </tr>
            </thead> 
            <tr>
                <td><img src={this.props.pokemon.img}/></td>
            </tr>
        </table>
    );
  }
}

export default Profile;
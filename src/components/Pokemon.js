import React from "react";
import { Router, Link, Route} from 'react-router-dom';

class Pokemon extends React.Component {
    render() {
        return(
            <tr>
                <td>{this.props.pokemon.name}</td>
                <td><Link to={"/"+this.props.pokemon.name}><img src={this.props.pokemon.img}/></Link></td>
                <td>{this.props.type}</td>
            </tr>
        )
    }
}

export default Pokemon;
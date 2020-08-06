import React from 'react';
import logo from './logo.svg';
import './App.css';
// import Player from './components/Player';
import Pokemon from './components/Pokemon';
import { Router, Link, Route} from 'react-router-dom';
import Pokemons from './components/Pokemons';
import Profile from './components/Profile';

class App extends React.Component {
    // const players = [ 
    //   { name: "Jordan", jerseyNumber: "23"},
    //   { name: "James", jerseyNumber: "23"},
    //   { name: "Bryant", jerseyNumber: "24"}
    // ];

    pokemons = [
      {
        name: "Bulbasaur",
        id: "#001",
        img: "https://img.pokemondb.net/artwork/vector/large/bulbasaur.png",
        types: ["Grass","Poison"]
      },
      {
        name: "Ivysaur",
        id: "#002",
        img: "https://img.pokemondb.net/artwork/vector/large/ivysaur.png",
        types: ["Grass","Poison"]
      },
      {
        name: "Venusaur",
        id: "#003",
        img: "https://img.pokemondb.net/artwork/vector/large/venusaur.png",
        types: ["Grass","Poison"]
      },
      {
        name: "Charmander",
        id: "#004",
        img: "https://img.pokemondb.net/artwork/vector/large/charmander.png",
        types: ["Fire"]
      },
      {
        name: "Charmeleon",
        id: "#005",
        img: "https://img.pokemondb.net/artwork/vector/large/charmeleon.png",
        types: ["Fire"]
      },
      {
        name: "Charizard",
        id: "#006",
        img: "https://img.pokemondb.net/artwork/vector/large/charizard.png",
        types: ["Fire","Flying"]
      },
      {
        name: "Squirtle",
        id: "#007",
        img: "https://img.pokemondb.net/artwork/vector/large/squirtle.png",
        types: ["Water"]
      },
      {
        name: "Caterpie",
        id: "#010",
        img: "https://img.pokemondb.net/artwork/vector/large/caterpie.png",
        types: ["Bug"]
      },
      {
        name: "Pidgey",
        id: "#016",
        img: "https://img.pokemondb.net/artwork/vector/large/pidgey.png",
        types: ["Normal", "Flying"]
      },
      {
        name: "Rattata",
        id: "#019",
        img: "https://img.pokemondb.net/artwork/vector/large/rattata.png",
        types: ["Normal"]
      },
      {
        name: "Arbok",
        id: "#024",
        img: "https://img.pokemondb.net/artwork/vector/large/arbok.png",
        types: ["Poison"]
      },
      {
        name: "Pikachu",
        id: "#025",
        img: "https://img.pokemondb.net/artwork/vector/large/pikachu-alt2.png",
        types: ["Electric"]
      },
      {
        name: "Sandshrew",
        id: "#027",
        img: "https://img.pokemondb.net/artwork/vector/large/sandshrew.png",
        types: ["Ground"]
      },
      {
        name: "Jigglypuff",
        id: "#039",
        img: "https://img.pokemondb.net/artwork/vector/large/jigglypuff.png",
        types: ["Fairy"]
      },
      {
        name: "Mankey",
        id: "#056",
        img: "https://img.pokemondb.net/artwork/vector/large/mankey.png",
        types: ["Fighting"]
      },
      {
        name: "Poliwrath",
        id: "#062",
        img: "https://img.pokemondb.net/artwork/vector/large/poliwrath.png",
        types: ["Water","Fighting"]
      },
      {
        name: "Geodude",
        id: "#074",
        img: "https://img.pokemondb.net/artwork/vector/large/geodude.png",
        types: ["Rock", "Ground"]
      },
      {
        name: "Magnemite",
        id: "#081",
        img: "https://img.pokemondb.net/artwork/vector/large/magnemite.png",
        types: ["Electric","Steel"]
      },
      {
        name: "Cloyster",
        id: "#091",
        img: "https://img.pokemondb.net/artwork/vector/large/cloyster.png",
        types: ["Water","Ice"]
      },
      {
        name: "Gastly",
        id: "#092",
        img: "https://img.pokemondb.net/artwork/vector/large/gastly.png",
        types: ["Ghost"]
      },
      {
        name: "Haunter",
        id: "#093",
        img: "https://img.pokemondb.net/artwork/vector/large/haunter.png",
        types: ["Ghost","Poison"]
      },
      {
        name: "Gengar",
        id: "#094",
        img: "https://img.pokemondb.net/artwork/vector/large/gengar.png",
        types: ["Ghost","Poison"]
      },
      {
        name: "Scyther",
        id: "#123",
        img: "https://img.pokemondb.net/artwork/vector/large/scyther.png",
        types: ["Bug", "Flying"]
      },
      {
        name: "Omanyte",
        id: "#138",
        img: "https://img.pokemondb.net/artwork/vector/large/omanyte.png",
        types: ["Rock", "Water"]
      },
      {
        name: "Aerodactyl",
        id: "#142",
        img: "https://img.pokemondb.net/artwork/vector/large/aerodactyl.png",
        types: ["Flying"]
      },
      {
        name: "Articuno",
        id: "#144",
        img: "https://img.pokemondb.net/artwork/vector/large/articuno.png",
        types: ["Ice","Flying"]
      },
      {
        name: "Azumarill",
        id: "#184",
        img: "https://img.pokemondb.net/artwork/vector/large/azumarill.png",
        types: ["Water","Fairy"]
      },
      {
        name: "Umbreon",
        id: "#197",
        img: "https://img.pokemondb.net/artwork/vector/large/umbreon.png",
        types: ["Dark"]
      },
      {
        name: "Murkrow",
        id: "#198",
        img: "https://img.pokemondb.net/artwork/vector/large/murkrow.png",
        types: ["Dark", "Flying"]
      },
      {
        name: "Forretress",
        id: "#205",
        img: "https://img.pokemondb.net/artwork/vector/large/forretress.png",
        types: ["Bug", "Steel"]
      },
    ];
    types = ["Normal", "Fire", "Water", "Electric", "Grass", "Ice", "Fighting", "Poison", "Ground", "Flying", "Bug", "Rock", "Ghost", "Dark", "Steel", "Fairy"]  
  

  render() {
    return (
      <div className="App">
        <header className="App-header">
        <ul>
          {
            this.types.map(type => {
                return <li><Link to={"/"+type}>{type} |</Link></li>  
            })
          }
        </ul>

          <table>
              {/* <thead>
                  <tr>
                    <th>name</th>
                    <th>image</th>
                    <th>type</th>
                  </tr>
              </thead> */}
              <tbody>
                {
                  this.types.map(type => {
                    return (
                      <Route path={"/"+type}>
                        <Pokemons pokemons={this.pokemons} type={type}/>
                      </Route>
                    )
                  })
                }
              </tbody>
          </table>
          <div>
            {
              this.pokemons.map(pokemon => {
                return (
                  <Route path={"/"+pokemon.name}>
                    <Profile pokemon={pokemon}/>
                  </Route>
                )
              })
            }
          </div>
          {/* {
            players.map( player => { 
  
              return <Player name = {player.name} jerseyNumber = {player.jerseyNumber}/>
            })
          }
           */}
        </header>
      </div>
    );
  }
  }

  export default App;


import React from "react";
import Papa from "papaparse";
import pokemon from "./assets/files/pokemon.csv"

class PokemonRow extends React.Component {
    render() {
        const pokemon = this.props.pokemon;
        return (
        <tr>
            <td>{pokemon['NUMBER']}</td>
            <td><a href={"./pokemon.html?id=" + pokemon['NUMBER']}>{pokemon['NAME']}</a></td>
            <td>{pokemon['TYPE1']}</td>
            <td>{pokemon['TYPE2']}</td>
            <td>{pokemon['COLOR']}</td>
            <td>{pokemon['ABILITY1']}</td>
            <td>{pokemon['ABILITY2']}</td>
            <td>{pokemon['GENERATION']}</td>
            <td>{pokemon['HEIGHT']}</td>
            <td>{pokemon['WEIGHT']}</td>
            <td>{pokemon['HP']}</td>
            <td>{pokemon['ATK']}</td>
            <td>{pokemon['DEF']}</td>
        </tr>
        );
    }
}


export default class PokemonTable extends React.Component {
    constructor(props) {
        super(props)
        this.state = {pokemon : []}
    }
    

    componentDidMount() {
        fetch(pokemon).then(response => response.text()) .then(csvString => {
            this.setState({pokemon: Papa.parse(csvString, {"header": true}).data});
        });
    }


    render() {
        const rows = [];
        
        this.state.pokemon.forEach((pokemon) => {
            rows.push(
                <PokemonRow
                pokemon={pokemon}
                key={pokemon['SERIAL']} />
            );
        });

        return (
        <table>
            <thead>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Type 1</th>
                <th>Type 2</th>
                <th>Color</th>
                <th>Ability 1</th>
                <th>Ability 2</th>
                <th>Generation</th>
                <th>Height</th>
                <th>Weight</th>
                <th>HP</th>
                <th>ATK</th>
                <th>DEF</th>
            </tr>
            </thead>
            <tbody>{rows}</tbody>
        </table>
        );
    }
}

  

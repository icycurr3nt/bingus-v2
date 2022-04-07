import React from "react";
import groceryItemsJSON from "../assets/files/GroceryItems.json";
import "../assets/css/grocerylist.css";


function GroceryItem(props) {
    return (
    <li class="groceryItem">
         <h2>{props.name}</h2>
         <p>Price: ${props.price} Category: {props.category}</p>
         <img src={props.image} alt={props.name}></img>
    </li>
    )
}


function GroceryItems(props) {
    const rows = [];
        
    props.groceryItems.forEach((grocery) => {
        console.log(props.searchText)
        if (grocery.name.includes(props.searchText)) {
            
        rows.push(
            <GroceryItem name={grocery.name} price={grocery.price} image={grocery.image}
                category={grocery.category} key={grocery.name}
            />
        );
        }

    });

    return <ul id="groceryList">{rows}</ul>
}

class SearchBar extends React.Component {
    constructor (props) {
        super(props)
        this.handleFilterTextChange = this.handleFilterTextChange.bind(this)
    }
    
    handleFilterTextChange(e) {
        this.props.onChange(e.target.value)
    }


    render () {
        return (
        <div id="searchWrapper">
        <input
            type="text"
            name="searchBar"
            id="searchBar"
            value={this.props.value}
            onChange={this.handleFilterTextChange}
            placeholder="search for an item"
        />  
    </div>
        )
    }
}


export default class GroceryList extends React.Component {
    constructor (props) {
        super(props)
        this.state = {searchText: ''};
        this.handleSearchBarChange = this.handleSearchBarChange.bind(this);
        
    }

    handleSearchBarChange (filterText) {
        this.setState({searchText: filterText})
    }

    render () {
        return (
                <div class="container">
                    <h1>&#x2728;Grocery List &#x2728;</h1>
                    <SearchBar onChange={this.handleSearchBarChange} value={this.state.searchText}/>
                    <GroceryItems groceryItems={groceryItemsJSON} searchText={this.state.searchText}/>
                </div>
            )  
    }
}


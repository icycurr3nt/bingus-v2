import React, { useState } from "react";
import groceryItemsJSON from "../assets/files/GroceryItems.json";
import "../assets/css/grocerylist.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";


function GroceryItem(props) {
    const [cartQuantity, setCartQuantity] = useState(1);
    let btnColor;
    if (cartQuantity >= props.quantity) {btnColor = "red"
    } else {btnColor = "black"}

    return (
    <li class="groceryItem">
         <h2>{props.name}</h2>
         <img src={props.image} alt={props.name}></img>
         <div id="test">
            <p style={{"gridArea": "house"}}>Price: ${props.price}</p>
            <p style={{"gridArea": "apartment"}}>Category: {props.category}</p>
            
            <p style={{"gridArea": "quantity", "color": btnColor}}>
                Quantity: {props.showCart ? cartQuantity : props.quantity}
                </p>
        </div>
         <div style={{"gridArea":"button", "marginTop":"5px"}}>
             <button style={{"width": "50%"}} onClick={props.onClick}>{props.btnText}</button>

             {props.showCart == true &&
             <><button style={{ "width": "10%"}} onClick={() => { 
                 console.log(cartQuantity);
                 console.log(props.quantity)
                 if (cartQuantity >= props.quantity) {
                     return
                 } else {
                    setCartQuantity(cartQuantity + 1); 
                 }
                 } } disabled={cartQuantity == props.quantity ? true : false}>+</button>
             <button style={{ "width": "10%" }} onClick={() => {
                        if (cartQuantity == 1 ) {
                            return;
                        } else {
                            setCartQuantity(cartQuantity - 1);
                        }

                    } } disabled={cartQuantity == 1 ? true : false}>-</button>
                    </>
                }
            
         </div>
    </li>
    )
}


function GroceryItems(props) {
    const rows = [];
    const [cartItems, setCartItems] = useState(new Set());
    
    

    props.groceryItems.forEach((grocery) => {
        const matchText = new RegExp(props.searchText.toLowerCase(), 'g')
        if (matchText.test(grocery.name.toLowerCase())) {
            if (props.showCart && cartItems.has(grocery.name)) {

                const onClickGrocery = () => {
                    let cloned_cart = new Set(cartItems);
                    cloned_cart.delete(grocery.name)
                    setCartItems(cloned_cart)
                }
                
                
                rows.push(
                    <GroceryItem name={grocery.name} price={grocery.price} image={grocery.image}
                        category={grocery.category} key={grocery.name} onClick={onClickGrocery}
                        btnText="Remove" showCart={true} quantity={grocery.quantity}
                    />);
                }
            else if (props.showCart !== true) {

                const onClickGrocery = () => {
                    setCartItems(cartItems.add(grocery.name))
                }

                rows.push(
                    <GroceryItem name={grocery.name} price={grocery.price} image={grocery.image}
                        category={grocery.category} key={grocery.name} onClick={onClickGrocery}
                        btnText="Add to Cart" quantity={grocery.quantity} showCart={false}
                    />);
            }
        }

    });
    return (
        <div>
            <button input="button" onClick={props.toggleShowCart} style={{"position": "absolute",
                        "top": "100px",
                        "right": "100px"}}>
                <FontAwesomeIcon icon={faShoppingCart} />
            </button>
            <ul id="groceryList">{rows}</ul>
        </div>
    )
}


function SearchBar (props) {
    return (
    <div id="searchWrapper">
    <input
        type="text"
        name="searchBar"
        id="searchBar"
        value={props.value}
        onChange={props.onChange}
        placeholder="search for an item"
    />  
</div>
    )
    
}


export default function GroceryList (props) {
    const [searchText, setSearchText] = useState("");
    const [showCart, toggleShowCart] = useState(false);
    const onChangeSearchBar = (e) =>  {
        setSearchText(e.target.value)
    }

    const onClickShoppingCart = () => {
        toggleShowCart(showCart ? false : true)
    }
    return (
            <div class="container">
                <h1>&#x2728;Grocery {showCart ? "Cart" : "List"} &#x2728;</h1>
                <SearchBar onChange={onChangeSearchBar} value={searchText}/>
                <GroceryItems groceryItems={groceryItemsJSON} searchText={searchText}
                            showCart={showCart} toggleShowCart={onClickShoppingCart}/>
            </div>
        ) 
}


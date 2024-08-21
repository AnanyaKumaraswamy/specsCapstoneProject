import React from "react"
import "./Menu.css";
import Button from "../components/UI/Button";
import CartContext from "../store/CartContext";
import { useContext} from 'react';




export default function ItemCard({item})
{
    const cartCtx = useContext(CartContext);

    

    function handleAddItemToCart(){
        cartCtx.addItem(item)
    }

    return(
        <div 
        className={`menu_card category ${item.category}`}
        key={item.ItemID} >
                 <img className="menu_img" src={item.ImageURL}/>
                 <h2 className="menu_name">{item.ItemName}</h2>
                 <h3 className="menu_price">${item.itemprice}</h3>
                 <h4 className="menu_desc">{item.ItemDescription}</h4>
                 <Button className="menu_card_button" onClick= {handleAddItemToCart}>Add to Cart</Button>
             </div>
    
)

};
             
         

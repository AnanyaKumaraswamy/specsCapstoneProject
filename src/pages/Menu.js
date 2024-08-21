import React from "react"
import axios from 'axios';
import {useState, useEffect} from 'react';
import "./Menu.css";
import ItemCard from "./ItemCard";
import Menucategory from "./Menucategory"

const Menu = ()=> {
    
    const [menuItems, setMenuItems] = useState([])
    
    useEffect(() => {
        axios.get("http://localhost:4006/getAllMenu")
        .then(res => {
            
            setMenuItems(res.data)
            console.log(res.data)  
          })
          .catch(err => {
               console.log(err)
           })
       }, [])

       const mappedMenuItems = menuItems.map(item => {
        return (                
             <ItemCard item={item} ></ItemCard>           
         )
     })

    return (
        <div className="menu">
            <select className="menu_Category" id="Category" onChange={Menucategory}>
                <option value="-1">VIEW ALL CATEGORY </option>
                <option value="1">YOGA MATS</option>
                <option value="2">YOGA BLOCKS</option>
                <option value="3">BOOKS</option>
                <option value="4">OTHER ESENTIALS</option>
        </select>
        <main className="menu_items">
             {mappedMenuItems}
        </main>
        </div>
    ) 
}

export default Menu;
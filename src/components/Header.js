import React from "react"
import { Link } from "react-router-dom";
import CartContext from "../store/CartContext";
import { useContext} from 'react';
import UserProgressContext from "../store/UserProgressContext";
import './Layout.css';
import { HiOutlineShoppingBag } from "react-icons/hi2";

const Header = ()=> {
    
    const cartCtx = useContext(CartContext);
    const userProgressCtx =useContext(UserProgressContext);

    const totalCartItems = cartCtx.items.reduce((totalNumberOfItems, item) => {
        return totalNumberOfItems + item.quantity;
        }, 0);



    return (
        <div className="header-main">
        <div className="header-section">
            <div className="header_heading">
                <h2 className="header_heading-1">ANA</h2>
                <h3 className="header_heading-2">Yoga Essentials</h3>
            </div>
            <div className="header-right">
                <nav className="header-nav">
                    <Link to="">
                        <button className="nav-button">Home</button>
                    </Link>
                    <Link to="/menu" id="menu">
                        <button className="nav-button">Products</button>
                    </Link>
                    <Link to="/cart" className="header-cart">
                        <HiOutlineShoppingBag className="header-cart-img"/>                      
                        {totalCartItems<10 && (
                        <span className="header-cart-span-oned">
                            {totalCartItems}
                        </span>
                        )}
                         {totalCartItems>=10 && (
                        <span className="header-cart-span-twod">
                            {totalCartItems}
                        </span>
                    )}
                    </Link>
                    
               </nav>
            </div>
        </div>
        
    </div>
)
    
}

export default Header;
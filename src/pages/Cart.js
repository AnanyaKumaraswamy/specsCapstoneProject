import {React,  useContext} from "react"
import CartContext from "../store/CartContext"
import Button from "../components/UI/Button";
import UserProgressContext from "../store/UserProgressContext";
import "./Cart.css"


export default function Cart() {

    

    const cartCtx = useContext(CartContext);
    const userProgressCtx =useContext(UserProgressContext);

    const cartTotal = Math.round((cartCtx.items.reduce(
        (totalPrice, item) => totalPrice + item.quantity * item.itemprice , 0))* 100) / 100;

    function handleGoToCheckout(){
            userProgressCtx.showCheckout();
        }

    return( 
        <div className="cartpage">
    <main className="cart"  >
        <h2> Your Cart</h2>
        <ol >
            {cartCtx.items.map(item => 
            <li key={item.itemID}  > 
            <div className="cart-content">
            <p>
            {item.ItemName} - {item.quantity}  x ${item.itemprice}
            </p>
            <p className="cart-item-actions">
            <button className="cart-item-button" onClick={() => cartCtx.removeItem(item.ItemID)}> - </button>
            <span> {item.quantity}  </span>
            <button className="cart-item-button" onClick={() => cartCtx.addItem(item)}> + </button>
            </p>
            </div>
            </li>
            )}

        </ol>
        <div  className="cart_checkout">
            <h4 className="cart-total">Total Price: ${cartTotal}</h4>
            <p className="modal-actions">
            {cartCtx.items.length>0 && (
            <Button className="GoToCheckout-btn" onClick={handleGoToCheckout}>Go to Checkout</Button>
            )}
            

        </p>
        </div>
    </main>
        </div>
    )

};
import { useContext } from 'react';
import Modal from './UI/Modal.jsx';
import CartContext from '../store/CartContext.jsx';
import Button from './UI/Button.jsx';
import UserProgressContext from '../store/UserProgressContext.jsx';
import './Checkout.css'


export default function OrderConfirmation() {
const cartCtx = useContext(CartContext);
const userProgressCtx = useContext(UserProgressContext);



    function handleClose(){
        userProgressCtx.hideOrderConfirmation();
    }

    function handleClose2(){
        userProgressCtx.hideOrderConfirmation();
        cartCtx.removeAllItem();
        document.getElementById('menu').click();
         
        var list = document.getElementsByClassName('checkout_form-input');
        var n;
        for (n = 0; n < list.length; ++n) {
            list[n].value='';
        }
    }

     
 return <Modal open={userProgressCtx.progress === 'orderconfirmation'} onClose={handleClose}>
         <h2 className="checkout_heading">Your order is in.</h2>
         <h2 className="checkout_heading">We truly appreciate you shopping with us.!</h2>
       
        <div className='checkout_modal-actions'> 
        <Button className="checkout_form-continue-shopping-btn" type="button" textOnly onClick = {handleClose2}>Continue shopping</Button>
         </div>
        
 
 </Modal>
}
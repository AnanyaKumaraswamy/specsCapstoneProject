import { useContext } from 'react';
import Modal from './UI/Modal.jsx';
import CartContext from '../store/CartContext.jsx';
import Input from './UI/Input.jsx';
import Button from './UI/Button.jsx';
import UserProgressContext from '../store/UserProgressContext.jsx';
import axios from 'axios';
import './Checkout.css'



export default function Checkout() {
const cartCtx = useContext(CartContext);
const userProgressCtx = useContext(UserProgressContext);

const cartTotal = Math.round((cartCtx.items.reduce(
    (totalPrice, item) => totalPrice + item.quantity * item.itemprice , 0))* 100) / 100;

 
    function handleClose(){
        userProgressCtx.hideCheckout();
    }

    function handleSubmit(event){
        event.preventDefault();

        const fd = new FormData(event.target);
        const customerData = Object.fromEntries(fd.entries());
        
        const OrderNumber = "A" + Math.floor(1000 + Math.random() * 9000).toString();
        const OrderName = customerData.OrderName;
        const OrderEmail = customerData.OrderEmail;
        const OrderAddress = customerData.OrderAddress;
        const OrderCity = customerData.OrderCity;
        const OrderZIP = customerData.OrderZIP;
        const CardNumber = customerData.CardNumber;
        const CardExpiry = customerData.CardExpiry;
        const CardCVV = customerData.CardCVV;

           
        

        axios.post('http://localhost:4006/addOrder', {OrderNumber, OrderName, OrderEmail, OrderAddress, OrderCity, OrderZIP, CardNumber, CardExpiry, CardCVV })
            .then(res => {
                 
                cartCtx.items.map(item => {
                    const OrderID = res.data.orderid;
                    const ItemID = item.ItemID;
                    const ItemQuantity = item.quantity;
                    axios.post('http://localhost:4006/addOrderItem', {OrderID, ItemID, ItemQuantity})
                .then(() => {
                    userProgressCtx.showOrderConfirmation();
                 })
                .catch(err => console.log(err))
                 })

                 userProgressCtx.showOrderConfirmation();
            })
            .catch(err => console.log(err))
           
           
            userProgressCtx.showOrderConfirmation();

        }

    return <Modal open={userProgressCtx.progress === 'checkout'} onClose={handleClose}>
                <form onSubmit={handleSubmit} className='checkout_form'>
                    <h2 className="checkout_heading">Checkout</h2>
                    <p className="checkout_total-price">Total Amount: ${cartTotal} </p>
                    <div >
                        <div className='checkout_form-card-input-1'>
                            <Input className="checkout_form-input" label="Name on card" type="text" id="OrderName"/>   
                            <Input className="checkout_form-input" label="Card Number" type="text" id="CardNumber" />
                        </div>
                        <div className='checkout_form-card-input-2'>
                            <Input className="checkout_form-input" label="Expiry" type="text" id="CardExpiry" placeholder="mm/yy"/>
                            <Input className="checkout_form-input" label="Security Code" type="password" id="CardCVV"/>
                        </div>
                    </div>
        
                    <Input className="checkout_form-input" label="E-mail" type="email" id="OrderEmail"/>
                    <Input className="checkout_form-input" label="Street" type="text" id="OrderAddress"/>
                    <Input  className="checkout_form-input" label="City" type="text" id="OrderCity"/>
                    <Input  className="checkout_form-input" label="ZIP Code" type="text" id="OrderZIP"/>
        
        
                    <div className='checkout_modal-actions'> 
                        <Button className="checkout_form-btn" type="button" textOnly onClick = {handleClose}>Close</Button>
                        <Button className="checkout_form-btn" > Submit Order</Button>
                    </div>
        
                </form>

            </Modal>
}
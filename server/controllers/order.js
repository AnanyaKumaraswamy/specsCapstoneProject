require('dotenv').config();
const { Order } = require("../models/Order");
const { OrderItem } = require("../models/OrderItem");


module.exports = {
    addOrder: async (req, res) => {
      try {
         const {OrderNumber, OrderName, OrderEmail, OrderAddress, OrderCity, OrderZIP, CardNumber, CardExpiry, CardCVV} = req.body
         
         const testvar = await Order.create({OrderNumber, OrderName, OrderEmail, OrderAddress, OrderCity, OrderZIP, CardNumber, CardExpiry, CardCVV})
         const orderid = {"orderid" : testvar.OrderID};
         res.send(orderid);
      } catch (error) {
         console.log('ERROR IN addOrder')
         console.log(error)
         res.sendStatus(400)
      }
   },

   addOrderItem: async (req, res) => {
    try {
       const {OrderID, ItemID, ItemQuantity} = req.body
       
       const testvar = await OrderItem.create({OrderID, ItemID, ItemQuantity})
         res.sendStatus(200);
         } catch (error) {
            console.log('ERROR IN addOrderItem')
            console.log(error)
            res.sendStatus(400)
         }
      },
   
  };
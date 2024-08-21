require('dotenv').config()
const express = require('express')
const cors = require('cors')
const app = express()
const PORT = process.env.PORT || 4006
const {sequelize} = require('./util/database')

const {getAllMenuItems} = require('./controllers/menu');
const {addOrder, addOrderItem} = require('./controllers/order');


app.use(express.json())
app.use(cors())
app.get('/getAllMenu', getAllMenuItems)
app.post('/addOrder', addOrder)
app.post('/addOrderItem', addOrderItem)
 

sequelize.sync()
.then(() => {
   app.listen(PORT, () => console.log(`db sync successful & server running on port ${PORT}`))           
})
.catch(err => console.log(err))
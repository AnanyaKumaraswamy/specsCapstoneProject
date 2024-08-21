require('dotenv').config();
const { Menu } = require("../models/Menu");

module.exports = {
   getAllMenuItems: async (req, res) => {
      try {
          const menuItems = await Menu.findAll({      
          order: [
            ['category', 'ASC'],
          ]    
         });
        res.status(200).send(menuItems);
        
       } catch (error) {
        console.log("ERROR IN getAllMenuItems");
        console.log(error);
        res.sendStatus(400);
       }
     },   

  };
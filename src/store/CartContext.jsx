import { createContext, useReducer } from "react";

const CartContext = createContext({

    items: [],
    addItem: (item) => {},
    removeItem: (ItemID) => {},
    removeAllItem: (ItemID) => {}
});


function cartReducer(state,action) {
    if(action.type === 'ADD_ITEM'){
        const existingCartItemIndex = state.items.findIndex(
            (item) => item.ItemID === action.item.ItemID 
        );

        const updatedItems = [...state.items];

        if (existingCartItemIndex > -1){
            const existingItem = state.items[existingCartItemIndex]
            const updatedItem = {
                ...existingItem,
                quantity: existingItem.quantity + 1
            };
            updatedItems[existingCartItemIndex] = updatedItem;
        }
        else{
            updatedItems.push({...action.item, quantity: 1});
        }

        return { ...state, items: updatedItems};
    }

    if(action.type === 'REMOVE_ITEM'){
           
        const existingCartItemIndex = state.items.findIndex(
            (item) => item.ItemID === action.ItemID
        );

        const existingCartItem = state.items[existingCartItemIndex];

        const updatedItems = [...state.items];
        
        if(existingCartItem.quantity === 1 ) {
           
            updatedItems.splice(existingCartItemIndex,1);
            
        } else{
            const updatedItem = {
                ...existingCartItem,
                quantity: existingCartItem.quantity - 1,


            };
            updatedItems[existingCartItemIndex] = updatedItem;
        }

        return { ...state, items: updatedItems};
    }

    if(action.type === 'REMOVE_ALL_ITEM'){
        

        return { ...state, items: []};
    }

    return state;
}



export function CartContextProvider({children}) {

    const [cart, dispatchCartAction ] = useReducer(cartReducer, { items: []});

   

    function addItem(item){
        dispatchCartAction({type: 'ADD_ITEM', item : item})
    }

    function removeItem(ItemID){
        dispatchCartAction({type: 'REMOVE_ITEM', ItemID: ItemID})
    }

    
    function removeAllItem(){
        dispatchCartAction({type: 'REMOVE_ALL_ITEM'})
    }

    const cartContext = {
        items: cart.items,
        addItem: addItem,
        removeItem: removeItem,
        removeAllItem: removeAllItem
    };

   

    return <CartContext.Provider value = {cartContext}>{children}</CartContext.Provider>
}

export default CartContext
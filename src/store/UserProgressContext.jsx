import { createContext, useState } from "react";

const UserProgressContext = createContext({
    progress : '',
    showOrderConfirmation: () => {},
    hideOrderConfirmation: () => {},
    showCheckout: () => {},
    hideCheckout : () => {},

})

export function UserProgressContextProvider({children}){

    const [userProgress, setUserProgress] = useState('');

     
    function showOrderConfirmation(){
        setUserProgress('orderconfirmation');
    }

    function hideOrderConfirmation(){
        setUserProgress('');
    }

    function showCheckout(){
        setUserProgress('checkout');
    }

    function hideCheckout(){
        setUserProgress('');
    }

const userProgressCxt = {
    progress : userProgress,
    showOrderConfirmation: showOrderConfirmation,
    hideOrderConfirmation: hideOrderConfirmation,
    showCheckout: showCheckout,
    hideCheckout : hideCheckout,
};


return(
    <UserProgressContext.Provider value={userProgressCxt}>
        {children}
    </UserProgressContext.Provider>

)

};

export default UserProgressContext;

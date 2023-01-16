import React from "react";

export const PaymentContext = React.createContext();

export function PaymentContextProvider({children}){
    const[proceed , setProceed] = React.useState(false);
    const [title , setTitle] = React.useState("");
    const [details , setDetails] = React.useState({});

    return (
          <PaymentContext.Provider value = {{proceed , setProceed , title , setTitle , details , setDetails}}>
             {children}
          </PaymentContext.Provider>
    )
}
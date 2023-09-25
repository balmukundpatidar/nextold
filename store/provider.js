"use client";
import { SessionProvider } from "next-auth/react";
// import { Provider } from "react-redux";
// import configureStore from "./configureStore";


export function Providers({children}){
    // const store = configureStore();
    return(
    
            <SessionProvider>
            {children}
        </SessionProvider>
  
    )
}
import React from "react";
import {ChakraProvider} from "@chakra-ui/react";
import { Box } from '@chakra-ui/react'
import {LeftSubscription} from "./LeftSubscription";
import {RightSubscription} from "./RightSubscription";
import "../styles/Subscription.css";


export function Subscription(){
    return(
        <ChakraProvider>
            <>
            {/* <Box mt = "20px" ml = "10%">
                  <img src = "https://static.uacdn.net/production/_next/static/images/logo.svg?q=75&w=256" alt = ""/>  
            </Box> */}
            <Box className = "parentBox">
                  <LeftSubscription/>
                  <RightSubscription/>
            </Box>
            </>

        </ChakraProvider>
       
    )
}
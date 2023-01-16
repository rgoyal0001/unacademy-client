import { ChakraProvider, position } from "@chakra-ui/react";
import jwt_decode from "jwt-decode";
import React from 'react';
import { Link } from 'react-router-dom'
export default function Navbar() {

    const SECRET = "yutuyghguyjksttyyy";

    const [user, setUser] = React.useState({});
    const [login, setLogin] = React.useState(false);

    let token = localStorage.getItem('token');

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const logout = () => {
        localStorage.removeItem('token');
        setUser({});
    }

    React.useEffect(() => {

        if (token) {
            
            const decoded_user = jwt_decode(token, SECRET);
            const { id, name, email, mobile } = decoded_user
            setUser({
                id, name, email, mobile
            })
            setLogin(true)
          
        } else {
            setLogin(false)
            console.log("token not found");
        }
    }, [token])


    return (
        <div style={{ position: "sticky", top: "0", backgroundColor: "white", padding: "1rem", zIndex: "2", boxShadow: "inset 0px -1px 0px rgba(233, 238, 242, 0.4)" }}>
            <div style={{ display: "flex", width: "1200px", margin: "auto", marginInline: "auto", backgroundColor: "transparent", justifyContent: "space-between", alignItems: "center" }}>
                <Link to="/"><img src="https://static.uacdn.net/production/_next/static/images/logo.svg?q=75&w=256" alt="" /></Link>
                <div style={{ display: "flex", justifyContent: "flex-start", alignItems: "center" }}><p style={{ paddingRight: "15px", fontWeight: "bold", fontSize: "20px", color: "#696969" }}>{user.name}</p><Link to="/login"> <button onClick={logout} style={{ border: "none", color: "white", backgroundColor: "#08BD80", padding: "8px 12px", borderRadius: "6px", cursor: "pointer" }}>{login ? "Logout" : "login"}</button></Link></div>
            </div>
        </div>

        // <div position="sticky" top="0px" left="0px" width="100%" height="72px" backgroundColor="#FFFFFF" divShadow="inset 0px -1px 0px rgba(233, 238, 242, 0.4)" zIndex="2">
        //             <div width="1200px" margin="auto" padding="15px" display="flex" justifyContent="space-between" alignItems="center" height="100%" marginInline="auto" backgroundColor="transparent">
        //                 <img src="https://static.uacdn.net/production/_next/static/images/logo.svg?q=75&w=256" />
        //                 <Link href="/login"><button colorScheme="green" fontSize="sm" fontWeight="semibold">Login</button></Link>
        //             </div>
        // </div>



    )
}
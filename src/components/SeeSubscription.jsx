import React from "react";
import "../styles/SeeSubscription.css";
import jwt_decode from "jwt-decode";
import {useParams} from "react-router-dom";

export function SeeSubscription(){
    const params = useParams()
    const SECRET = "yutuyghguyjksttyyy";

    const [subscribeUser, setSubscribeUser] = React.useState([])
  
    let token = localStorage.getItem('token');
  
         async function getUserById(id){
          try {  
          let res = await fetch(`https://https://unacademy-clone.onrender.com/getUser/${id}`);
            let data = await res.json();
               let subscription = data.user.subscription.filter((eachSub)=> {
                    return eachSub.title === params.title
                        
                  
               })
               setSubscribeUser(subscription)
              
          }catch(err){
              console.log(err);
          }
      }
  
  
    React.useEffect(() => {
        if (token) {
            const decoded_user = jwt_decode(token, SECRET);
             console.log(decoded_user)
            getUserById(decoded_user.id)
        
        } else {
           
            console.log("token not found");
        }
    }, [token])
  
  console.log(subscribeUser);
  
    return(
           <>
            <div className = "subscribeBox">
                   {
                       subscribeUser?.map((user , index)=> (
                           <div key = {index}>
                                 <h1>{user.title}</h1>
                                 <div>{user.details.title}</div>
                                 <div>{user.details.price}</div>
                                 <div>{user.details.total}</div>
                                 <div>{user.details.save}</div>
                           </div>
                       ))
                   }
            </div>
            </>
       
    )
}
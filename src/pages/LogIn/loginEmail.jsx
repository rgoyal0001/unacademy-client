import React from 'react'
import { Link } from 'react-router-dom';
import './Login.css';
import {LoginContext} from '../../Context/Login/LoginContext';
import { useNavigate } from 'react-router-dom';
import PhoneInput from 'react-phone-number-input';
import {PaymentContext} from "../../Context/payment/PaymentContext";
import {Spinner , Center ,ChakraProvider} from "@chakra-ui/react";
import 'react-phone-number-input/style.css'

function Login() {
 const [email, setEmail] = React.useState('');
 const [password, setPassword] = React.useState('');
 const [loading , setLoading] = React.useState(false);
 const [error , setError] = React.useState(false);
  // const {setUser} = React.useContext(LoginContext);

  let {proceed} = React.useContext(PaymentContext);
  const navigate = useNavigate();

  let localToken = localStorage.getItem('token');

  console.log(localToken)

  const handleLogin = async (e) => {
    e.preventDefault();
    // console.log(email, password);
    const body = {
      email,
      password
    }
    // console.log(body);
    try {
         setLoading(true)
      let data = await fetch('https://unacademy-clone.onrender.com/login',{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
      })
      let response = await data.json();
        setLoading(false)
      // console.log(token);
       console.log(response)
      if(response.error) {
        return alert(response.error)
    }
      let token = response.token;
      console.log(token)
      
      if(localToken){
          if(localToken === token){
              return alert("you are already logged in")
          }else {  
          return alert("You need to logout first !")
          }
      }

      alert('login success');
      //  window.location.reload()
     
      localStorage.setItem('token', token);
      // setUser(token);

       if(proceed){
          console.log(proceed);
      navigate("/goal/payment")
      }else {  
        navigate('/');
      }

      window.location.reload()
      

    } catch (error) {
        setError(true)
      console.log(error);
    }
  }



  if(loading){
    return(
          <ChakraProvider>
             <Center mt = "250px">
                  <Spinner thickness='5px'
                           speed='1.5s'
                        //    emptyColor='green.200'
                           color='blue.500'
                           size='xl'/>
          </Center>
          </ChakraProvider>
            
    )
}

if(error){
    return(
          <ChakraProvider>
                <h1 
              textAlign = "center" 
              marginTop = "200px"
              color = "red"
          >Something Went Wrong...</h1>
          </ChakraProvider>
         
    )
}

  return (
    <div className='login'>
      <div className='left'>
        <form  className='login-form' onSubmit={handleLogin}>
          <h1>Login</h1>
          or <Link to='/register' style={{"color":"rgb(29, 177, 29) ","fontWeight":"650"}}>create your account</Link>
          <br />
          <div id='input' >
            <input type="text" name="email" placeholder='Enter your email' value={email} onChange={(e)=>{setEmail(e.target.value)}} /> <br />
            <input type="password" name="password" placeholder='Enter password' value={password} onChange={(e)=>{setPassword(e.target.value)}} />
          </div>
          <div id='login-button' style={{"display":"flex","justifyContent":"space-between","alignItems":"center"}}>
          <input type="submit" value="Login" />
          <Link to='/login/phone'>Continue with number</Link>

          </div>
        </form>

        
        <div>
          <p>Having trouble ? Please contact help@unacademy.com for further support.</p>
        </div>
      </div>

    <div className='right'>
        <h2>IIT-JAM subscription</h2>
        <p>12 months</p>
        <div style={{"display":"flex","justifyContent":"space-between"}}>
          <p>Valid till 27 Jul, 2023</p>
          {/* <p >Change duration</p> */}
        </div>

        <div>
          <img src="https://static.uacdn.net/production/_next/static/images/gift.svg?q=75&w=32" alt="" />
          <input type="text" placeholder='Have a referral code?' id='refrelInput'/>
        </div>

        <div>
          <div style={{"display":"flex","justifyContent":"space-between"}}>
            <p>Subsription fee</p>
            <p>₹14,974</p>
          </div>
          <div style={{"display":"flex","justifyContent":"space-between"}}>
            <div style={{"display":"flex","justifyContent":"space-between"}}><h4>Total </h4><p>(Incl. of all taxes)</p></div>
            <p>₹14,974</p>
          </div>
        </div>
        
    </div>
    </div>
  )
}

export default Login
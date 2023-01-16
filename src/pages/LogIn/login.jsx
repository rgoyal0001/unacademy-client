import React from 'react'
import { Link } from 'react-router-dom';
import './Login.css';
// import {LoginContext} from '../../Context/Login/LoginContext';
import { useNavigate } from 'react-router-dom';
import PhoneInput from 'react-phone-number-input';
import {PaymentContext} from "../../Context/payment/PaymentContext"
import 'react-phone-number-input/style.css'

function Login() {
 const [mobile, setMobile] = React.useState();
 const [password, setPassword] = React.useState();
 const [loading , setLoading] = React.useState(false);
 const [error , setError] = React.useState(false);

 let {proceed} = React.useContext(PaymentContext);

   console.log(proceed)
  // const {setUser} = React.useContext(LoginContext);
  const navigate = useNavigate();

  let localToken = localStorage.getItem('token');

  const handleLogin = async (e) => {
    e.preventDefault();
    // console.log(email, password);
    const body = {
      mobile,
      password
    }
    // console.log(body);
    try {
      let data = await fetch('https://unacademy-clone.onrender.com/login',{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
      })
      let response = await data.json();
      // console.log(token);
      console.log(response);
      if(response.error) {
        return alert(response.error)
    }

    let token = response.token;

    if(localToken){
        if(localToken === token){
            return alert("you are already logged in")
        }

        return alert("You need to logout first !")
    }
      alert('login success');

      localStorage.setItem('token', token);
      // setUser(token);

      if(proceed === true){
          console.log(proceed);
          navigate("/goal/payment")
      }else {  
        window.location.reload()
        navigate('/');
      }

      window.location.reload()
      
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className='login'>
      <div className='left' >
        <form  className='login-form' onSubmit={handleLogin}>
          <h1>Login</h1>
          or <Link to='/register' style={{"color":"rgb(29, 177, 29) ","fontWeight":"650", "textDecoration":"d"}}>create your account</Link>
          <br />
          <PhoneInput 
            id='phoneInput'
            defaultCountry='IN'
            placeholder="Enter your mobile number"
            value={mobile}
            onChange={setMobile}
            /> 
            <input type="password" name="password" placeholder='Enter password' value={password} onChange={(e)=>{setPassword(e.target.value)}} />
       
          <div id='login-button' style={{"display":"flex","justifyContent":"space-between","alignItems":"center"}}>
            <input type="submit" value="Login" />
            <Link to='/login'>Continue with email</Link>

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
          {/* <Link to="">Change duration</p> */}
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
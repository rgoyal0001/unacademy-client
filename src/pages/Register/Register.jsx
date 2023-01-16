import React from 'react'
import { Link } from 'react-router-dom'
import './Register.css'
import { useNavigate } from 'react-router-dom';
import {Spinner , Center ,ChakraProvider} from "@chakra-ui/react";


async function register(body) {
  body = JSON.stringify({
    user: body
  });
  const response = await fetch(
    `https://unacademy-clone.onrender.com/register`, {
      method: 'POST',
      headers: {
        'Content-Type': "application/json"
      },
      body,
    }
  )

  const data = await response.json();

  return data;
}

function Register() {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [name, setName] = React.useState('');
  const [mobile, setMobile] = React.useState('');
  const [loading , setLoading] = React.useState(false);
  const [error , setError] = React.useState(false);
  const navigate = useNavigate();

  let token = localStorage.getItem('token');


  const handleRegister =  (e) => {
    e.preventDefault();
    setLoading(true)

    register({name,email,password,mobile})
    .then((res)=>{
      if(token){
        return alert("You need to logout first !")
      }
       if(res.error) {
           return alert(res.error)
       }
      alert("Registration successful")
      navigate('/login')
    })
    .catch(err=>{
        setError(true)
    })
    .finally(() => {
         setLoading(false)
    })
  }


  //   try {
  //     let data = await fetch('https://unacadmey-test-app.herokuapp.com/register', { mode: 'no-cors' },{
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json'
  //       },
  //       body: JSON.stringify(user)
  //     });
  //     let response = await data.json();
  //     console.log("response",response);
  //     if(response.message){
  //       alert(response.message);
  //     }
  //     else{
  //       alert("Registration Successful");
  //       navigate('/login');
  //     }

  //   } catch (error) {
  //     console.log(error);
  //   }

  // }

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
    // <ChakraProvider>
    <div className="register">
    <div className='left'>
      <form className='register-form' onSubmit={handleRegister}>
        <h1>Join Unacademy</h1>
        or <Link to='/login' style={{"color":"rgb(29, 177, 29) ","fontWeight":"650"}}>login to your account</Link>
        <br />
        <input placeholder='Enter your name'  type="text" name="name" value={name} onChange={(e)=>{setName(e.target.value)}}/> <br />
        <input placeholder='Enter your mobile number'  type="number" name="mobile" value={mobile} onChange={(e)=>{setMobile(e.target.value)}}/> <br />
        <input placeholder='Enter your email' type="text" name="username" value={email} onChange={(e)=>{setEmail(e.target.value)}}/> <br />
        <input placeholder='Create password' type="password" name="password" value={password} onChange={(e)=>{setPassword(e.target.value)}}/> <br />
        <div id='register-button' style={{"display":"flex","justifyContent":"space-between","alignItems":"center"}}>
            <input type="submit" value="Register"/>
            
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

    // </ChakraProvider>
  )
}

export default Register
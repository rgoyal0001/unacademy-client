import React from "react";
import jwt_decode from "jwt-decode";
import "../styles/Payment.css";
import { ChakraProvider } from "@chakra-ui/react";
import { PaymentContext } from "../Context/payment/PaymentContext";
import { useNavigate } from "react-router-dom";
import {
  Button,
  Spinner,
  Center,
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogContent,
  AlertDialogOverlay,
  useDisclosure
} from '@chakra-ui/react'



export function Payment() {

  const { isOpen, onOpen, onClose } = useDisclosure()
  const cancelRef = React.useRef()

  const SECRET = "yutuyghguyjksttyyy";

  const [user, setUser] = React.useState({});

  const [cardNumber, setCardNumber] = React.useState("");
  const [valid, setValid] = React.useState("");
  const [cvv, setCvv] = React.useState("");
  const [name, setName] = React.useState("");
  const [emptyError, setEmptyError] = React.useState(false);
  const [cardError, setCardError] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(false);
  let { title, details } = React.useContext(PaymentContext);

  const navigate = useNavigate();

  let token = localStorage.getItem('token');
    // async function getUserById(id){
    //     try {  
    //     let res = await fetch(`https://unacademy-clone.onrender.com/getUser/${id}`);
    //       let data = await res.json();
    //          return data
    //     }catch(err){
    //         console.log(err);
    //     }
    // }

  async function updateSubscription(id, body) {
    setLoading(true);
    await fetch(`https://unacademy-clone.onrender.com/userSubscription//${id}`, {
      method: "PATCH",
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json'
      },
    }).then((res) => res.json())
      .then((res) => {
        return res
      }).catch((err) => {
        setError(true);
      })
      .finally(() => {
        setLoading(false);
      });



  }

  React.useEffect(() => {

    if (token) {
      const decoded_user = jwt_decode(token, SECRET);
      const { id, name, email, mobile } = decoded_user
      setUser({
        id, name, email, mobile
      })


    } else {
      console.Console("token not found")
    }
  }, [token])

  function handleSubmit(e) {
    e.preventDefault();

    console.log("hii")
    if (cardNumber === "" || cvv === "" || valid === "" || name === "") {
      return setEmptyError(true)
    }

    if (cardNumber !== "" && cardNumber.toString().length !== 16) {
      return setCardError(true)
    }

    if (title !== "") {
      updateSubscription(user.id, { title, details }).then((res) => {
        console.log(res);

      })
      onOpen();
    }



  }

  const handleClose = () => {
    onClose();
    navigate("/")
  }


  if (loading) {
    return (
      <ChakraProvider>
        <Center mt="250px">
          <Spinner thickness='5px'
            speed='1.5s'
            //    emptyColor='green.200'
            color='blue.500'
            size='xl' />
        </Center>
      </ChakraProvider>

    )
  }

  if (error) {
    return (
      <ChakraProvider>
        <h1
          textAlign="center"
          marginTop="200px"
          color="red"
        >Something Went Wrong...</h1>
      </ChakraProvider>

    )
  }

  return (
    <ChakraProvider>
      <div style={{ "marginTop": "100px", "marginLeft": "10%" }}>
        <div className="profileDiv">
          <div>
            <div style={{ "fontWeight": "600", "fontSize": "30px", "marginBottom": "10px" }}>{user.name}</div>
            <div style={{ "display": "flex", }}>
              <div style={{ "marginRight": "20px" }}>{user.mobile}</div>
              <div>{user.email}</div>
            </div>
          </div>
          <div>
            <img width="60px" height="50px" src="https://static.uacdn.net/thumbnail/user/default.png?fm=webp" alt="" />
          </div>
        </div>
        <div className="formBox">
          {emptyError && <div style={{ "color": "red", "fontWeight": "600", "width": "80%", "margin": "auto", "marginBottom": "30px", "paddingTop": "20px" }}>Please fill the details properly !</div>}
          <input type="number" placeholder="Card number" onChange={(e) => setCardNumber(e.target.value)} />
          {cardError && <div style={{ "color": "red", "fontWeight": "600", "width": "80%", "margin": "auto", "marginBottom": "30px", "paddingTop": "10px" }}>CardNumber must be of 16 digits</div>}
          <div style={{ "display": "flex", "width": "80%" }}>
            <input type="text" placeholder="Valid through(MM/YY)" onChange={(e) => setValid(e.target.value)} />
            <input type="number" placeholder="CVV" onChange={(e) => setCvv(e.target.value)} />
          </div>
          <input type="text" placeholder="Name on card" onChange={(e) => setName(e.target.value)} />
          {/* <input id = "submitBtn" type = "submit"  value = "Pay" onClick = {handleSubmit}/> */}
          <Center>
            <Button type="submit" mt="50px" onClick={handleSubmit}>Pay</Button>
          </Center>

          <AlertDialog
            isOpen={isOpen}
            leastDestructiveRef={cancelRef}
            onClose={onClose}
            mt="300px"
          >
            <AlertDialogOverlay>
              <AlertDialogContent>

                <AlertDialogBody>
                  payment Succesfull
                </AlertDialogBody>

                <AlertDialogFooter>
                  <Button colorScheme='red' onClick={handleClose} ml={3}>
                    OK
                  </Button>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialogOverlay>
          </AlertDialog>
        </div>
      </div>
    </ChakraProvider>
  )
}
import React from "react";
import "../styles/RightSubscription.css";
import {IoIosCheckmark} from 'react-icons/io';
import {useParams , useNavigate}  from "react-router-dom";
import {PaymentContext} from "../Context/payment/PaymentContext"



export function RightSubscription(){
     let {title} = useParams();
     const navigate = useNavigate();

     const [viewAll , setViewAll] = React.useState(true);
     const [referralInput , setReferralInput] = React.useState("");

    const [priceBox , setPriceBox] = React.useState({
        activeObject :   {id : 2,
            title : "12 months",
            price : "₹1,248 /mo",
            total : "Total ₹14,974",
            save : "SAVE 61%",
            extra : "You get 3 months extra for free",
            logo : "https://static.uacdn.net/production/_next/static/images/discount.svg",
            expire : "Offer expires 31 Jul 2022"
        } , 
        objects : [
            {id : 1,
             title : "24 months",
             price : "₹908 /mo",
             total : "Total ₹21,780",
             save : "SAVE 72%",
             extra : "You get 6 months extra for free",
             logo : "https://static.uacdn.net/production/_next/static/images/discount.svg",
             expire : "Offer expires 31 Jul 2022"
            } , 
            {id : 2,
                title : "12 months",
                price : "₹1,248 /mo",
                total : "Total ₹14,974",
                save : "SAVE 61%",
                extra : "You get 3 months extra for free",
                logo : "https://static.uacdn.net/production/_next/static/images/discount.svg",
                expire : "Offer expires 31 Jul 2022"
            } , 
            {id : 3,
                title : "9 months",
                price : "₹1,497 /mo",
                total : "Total ₹13,475",
                save : "SAVE 54%",
                // extra : "You get 6 months extra for free",
                // logo : "https://static.uacdn.net/production/_next/static/images/discount.svg",
                // expire : "Offer expires 31 Jul 2022"
            } , 
            {id : 4,
                title : "6 months",
                price : "₹2,042 /mo",
                total : "Total ₹12,252",
                save : "SAVE 37%",
                extra : "You get 1 month extra for free",
                logo : "https://static.uacdn.net/production/_next/static/images/discount.svg",
                expire : "Offer expires 31 Jul 2022"
             } , 
            {id : 5,
                title : "3 months",
                price : "₹2,269 /mo",
                total : "Total ₹6,807",
                save : "SAVE 30%",
                // extra : "You get 6 months extra for free",
                // logo : "https://static.uacdn.net/production/_next/static/images/discount.svg",
                // expire : "Offer expires 31 Jul 2022"
            } , 
            {id : 6,
                title : "1 month",
                price : "₹3,223 /mo",
                total : "Total ₹2,901",
                save : "SAVE 10%",
                // extra : "You get 6 months extra for free",
                // logo : "https://static.uacdn.net/production/_next/static/images/discount.svg",
                // expire : "Offer expires 31 Jul 2022"
            }
        ]
    })

    let {setProceed , setTitle ,setDetails} = React.useContext(PaymentContext);

     setTitle(title)
     setDetails(priceBox.activeObject)


    let arrayMap = viewAll?priceBox.objects.slice(0 , 3):priceBox.objects

    function toggleActive(index){
         setPriceBox({
            ...priceBox , activeObject : priceBox.objects[index]
         })
    }

    function toggleClassName(index){
        if(priceBox.objects[index].id === priceBox.activeObject.id){
             
              return "box active"
        }else {
              return "box inactive"
        }

    }


    function navigateToPayment(){ 
     let token = localStorage.getItem("token")

     if(token){
          navigate("/goal/payment")
     }else {
          setProceed(true);
          navigate("/login")
     }

    }

    return(
          <div>
            <h1 style = {{"fontSize" : "30px" , "fontWeight" : "500" , "textAlign" : "center" , "margin-bottom" : "10px"}}>{`${title} subscription`}</h1>
            <p style = {{"fontSize" : "16px" , "textAlign" : "center"}}>Choose a plan and proceed</p>
            <div style = {{"display" : "flex" , "margin" : "30px 0px" , "background" : "#FFDAE1" , "height" : "40px" ,"alignItems" : "center" , "textAlign" : "center" , "padding" : "30px" ,"border-radius" : "8px"}}>
                <div>
                      <img width = "30px" src = "https://static.uacdn.net/web-cms/exclamation_2x_797b98138e.png"  alt = ""/>
                </div>
                <div style = {{"marginLeft" : "10px" ,"color" : "#C53D3D"}}>Get upto 6 months free extension and 20% discount extended till 31st July</div>
            </div>
            <div className = "monthContainer">
                   {
                      arrayMap.map((ele , index) => (
                           <div key = {index}  className = {toggleClassName(index)} onClick = {() => toggleActive(index)}>
                                   <div className = "upperChild">
                                          <div style = {{"width" : "28px" , "height" : "30px", "border" : "2px solid rgb(241, 243, 250)" , "borderRadius" : "50%" , }}>
                                             <IoIosCheckmark style = {{"fontSize" : "27px" , "color" : "white" , "marginBottom" : "5px" , }}/>
                                          </div>
                                          <div>
                                                <div style = {{"fontWeight" : "600" , "marginBottom" : "10px"}}>{ele.title}</div>
                                                <div style = {{"fontSize" : "13px" , "color" : "#FFAD3B"}}>{ele.save}</div>
                                          </div>
                                          <div>
                                              <div style = {{"fontWeight" : "600" , "marginBottom" : "10px"}}>{ele.price}</div>
                                                <div style = {{"fontSize" : "13px" }}>{ele.total}</div>
                                          </div>
                                   </div>
                                   {ele.logo?(<div className = "lowerChild">
                                        <div>
                                              <img src = {ele.logo} alt = ""/>
                                        </div>
                                        <div>{ele.extra}</div>
                                        <div>{ele.expire}</div>
                                   </div>):null}
                           </div>
                      ))
                   }
            </div>
            <div style = {{"fontSize" : "13px","textAlign" : "center" , "marginTop" : "30px" , "marginBottom" : "30px"}}>To be paid as a one-time payment</div>
            {viewAll?(<div style = {{"width" : "100px" ,"background":"white","fontSize" : "13px","textAlign" : "center" ,"cursor" : "pointer" , "padding" : "10px" , "color" : "#08BD80" , "borderRadius" : "5px" , "margin" : "auto" , "border" : "1px solid rgb(241, 243, 250)"}} onClick = {() => setViewAll(false)}>
                  view all plans
            </div>):null}

            <div style = {{"display" : "flex" ,"justifyContent":"space-between" , "height" : "60px" , "marginTop" : "30px"}}>
                 <div style = {{"display" : "flex" , "width" : "70%" , "alignItems" : "center"}}>
                        <div>
                               <img src = "https://static.uacdn.net/production/_next/static/images/gift.svg?q=75&w=32" alt = ""/>
                        </div>
                         <input placeholder = "Have a referral code?" value = {referralInput} onChange = {(e) => {setReferralInput(e.target.value)}} style = {{"paddingLeft" : "10px" , "marginLeft" : "10px" , "height" : "70%" , "border" : "1px solid rgb(241, 243, 250)" , "borderRadius" : "5px"}}/>
                 </div>
                 <div style = {{"width" : "150px" ,"background":"#08BD80","fontSize" : "13px","textAlign" : "center" ,"cursor" : "pointer" , "padding" : "10px" , "color" : "white" , "borderRadius" : "5px" , "margin" : "auto" , "border" : "1px solid rgb(241, 243, 250)"}} onClick = {navigateToPayment}>Proceed to pay</div>
            </div>

      </div>
    )
}
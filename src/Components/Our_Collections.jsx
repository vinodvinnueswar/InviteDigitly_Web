import React from 'react'
import { useParams } from "react-router-dom";
import WedInvite1 from '../images/Our_Collections/Wed_card1.png'
import WedInvite2 from '../images/Our_Collections/Wed_Card2.png'
import WedInvite3 from '../images/Our_Collections/Wed_Card3.png'
import WedInvite4 from '../images/Our_Collections/Wed_Card4.png'
import BirthdayCard1 from '../images/Our_Collections/Birthday_Card2.png'
import BirthdayCard2 from '../images/Our_Collections/Birthday_Card3.png'
import BirthdayCard3 from '../images/Our_Collections/Birthday_Card4.png'
import BirthdayCard4 from '../images/Our_Collections/Birthday_Card5.png'
import HalfSaree1 from '../images/Our_Collections/Half_Saree.png'
import HalfSaree2 from '../images/Our_Collections/Half_Saree1.png'
import HalfSaree3 from '../images/Our_Collections/Half_Saree2.png'
import HalfSaree4 from '../images/Our_Collections/Half_Saree3.png'
import { useState } from 'react';
import { useEffect } from 'react';
import { API_URL } from '../Pages/api';




const Our_Collections = () => {

    const [vendorData, setVendorData] = useState([]);
    const [products , setProducts] = useState([]);

    // const {vendorId} = useParams();
    // console.log(vendorId)

    const vendorDataHandler = async()=>{
        try {
                const response = await fetch(`${API_URL}/vendor/all-vendors`)
                const newData = await response.json()
                    setVendorData(newData);
                    console.log("this is api Data ", newData)
                
        } catch (error) {
            alert("failed to fetch data")
            console.error("failed to fetch data")
          
        }
}
        useEffect(()=>{
            vendorDataHandler()
        }, [])


        

    // const DataList = [
    //     {
    //         img:WedInvite1
    //     },
    //     {
    //         img:WedInvite2
    //     },
    //     {
    //         img:WedInvite3
    //     },
    //     {
    //         img:WedInvite4
    //     },
    //     {
    //         img:BirthdayCard1
    //     },
    //     {
    //         img:BirthdayCard2
    //     },
    //     {
    //         img:BirthdayCard3
    //     },
    //     {
    //         img:BirthdayCard4
    //     },
    //     {
    //         img:HalfSaree1
    //     },
    //     {
    //         img:HalfSaree2
    //     },
    //     {
    //         img:HalfSaree3
    //     },
    //     {
    //         img:HalfSaree4
    //     },

       
    // ]
  return (
    <div className="Our_Collections_Container">
        <div className="Our_Collections_title">
            <h2>OUR COLLECTIONS</h2>
           
            {/* <h3>This is vendorId {vendorData}</h3> */}
        </div>
        <div className="Our_Collections_List">
        {
                vendorData.vendors && vendorData.vendors.map((vendor) => {
                    return(
                       <div className="Our_Collections_List">
                        {
                            vendor.product.map((item) => {
                                return(
                                    <>
                                    <div className="Cards_List">
                                       <img src={`${API_URL}/uploads/${item.image}`}  />
                                       <div className="Cards_List_items">
                                       <div>{item.productName}</div>
                                        <div>₹{item.price}</div>
                                        <div>{item.description}</div>
                                       </div>
                                    </div>
                                    
                                    </>
                                )
                            })
                        }
                       </div>
                    )
                })
            }
        </div>
        <div className="button">
             <button>Browse Collections</button>
        </div>
    </div>
  )
}

export default Our_Collections




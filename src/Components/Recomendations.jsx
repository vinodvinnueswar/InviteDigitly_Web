import React, { useEffect } from 'react'

import wedCards from "../images/cards/wed_Cards.jpg"
import wedCards1 from "../images/cards/wed_Cards1.jpg"
import wedCards2 from "../images/cards/wed_Cards2.jpg"
import wed from "../images/cards/wed.jpg"
import { API_URL } from '../Pages/api'
import { useState } from 'react';

const Recomendations = () => {

    const [vendorData, setVendorData] = useState([]);

    const vendorDataHandler = async(req ,res) => {
        try {
            const response = await fetch(`${API_URL}/vendor/all-vendors`);
            const newWorksData = await response.json()
            setVendorData(newWorksData)
            console.log('this is new api data' , newWorksData)
            
        } catch (error) {
            alert("failed to fetch works data")
            console.error("failed to fetch works data")
            
        }
    }

    useEffect(() => {
    vendorDataHandler();
    },[])
    
    

//    const data = [
//        {
//         img:wedCards
//        },
//        {
//         img:wedCards1
//        },
//        {
//         img:wedCards2
//        },
//        {
//         img:wed
//        },
//        {
//         img:wedCards
//        },
//    ]
   

  return (
    <div className="Recomendations_Container">
        <div className="Recomendations_title">
           <h3>OUR WORKS</h3>
           <p>Some of our latest works</p>
        </div>
        <div className="Recomded_Products">
             {
                            vendorData.vendors && vendorData.vendors.map((vendor) => {
                                return(
                                   <div className="Our_Collections_List">
                                    {
                                        vendor.ourWork.map((item) => {
                                            return(
                                                <>
                                                <div className="card_pics">
                                                   <img src={`${API_URL}/uploads/${item.image}`}  />
                                                   {/* <div className="Cards_List_items">
                                                   <div>{item.productName}</div>
                                                    <div>₹{item.price}</div>
                                                    <div>{item.description}</div>
                                                   </div> */}
                                                </div>
                                                </>
                                            )
                                        })
                                    }
                                   </div>
                                )
                            })
                        }
           
            {/* {
                data.map((items) => {
                    return(
                        <div className="card_pics">
                            <img src={items.img} alt=""/>
                        </div>
                    )
                })
            } */}
        </div>
    </div>
  )
}

export default Recomendations
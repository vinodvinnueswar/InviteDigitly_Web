import React, { useEffect, useState } from 'react'
import giftCard from '../images/cards/gift_Card.png'
import BirthdayCard from '../images/cards/Birthday_card.png'
import Function from '../images/cards/Function.png'
import { API_URL } from '../Pages/api';
import { Link } from "react-router-dom";



const Categories = () => {

      const [vendorData, setVendorData] = useState([]);
      const [activeCategory, setActiveCategory]= useState('all');


       const vendorDataHandler = async()=>{
              try {
                      const response = await fetch(`${API_URL}/vendor/all-vendors`)
                      const newData = await response.json()
                          setVendorData(newData);
                          console.log("this is category api Data ", newData)
                      
              } catch (error) {
                  alert("failed to fetch data")
                  console.error("failed to fetch data")
                
              }
      }
              useEffect(()=>{
                  vendorDataHandler()
              }, []);

              const filterHandler = (category) => {
                setActiveCategory(category)
              };       



  
  
return (
    <div className="Our_Collections_Container">
        <div className="Our_Collections_title">
            <h2>POPLUAR CATEGORIES</h2>
           
            {/* <h3>This is vendorId {vendorData}</h3> */}
        
        <div className="categories_Products">
       <div className="Wed_Invitation" onClick={() => filterHandler('Wedding' , 'wedding')} >
            <img src={giftCard} />
           <p>Wedding Invitation</p>
           </div>
           <div className="Birthday_Parties" onClick={() => filterHandler('Birthday' , 'birthday')}>
            <img src={BirthdayCard} />
            <p>Birthday Parties</p>
           </div>
           <div className="Mature_Function" onClick={() => filterHandler('HalfSaree' , 'halfsaree')}>
            <img src={Function}  />
            <p>Half Saree Function</p>
           </div>
    </div>
        <div className="Our_Collections_List">

            {
                vendorData.vendors && vendorData.vendors.map((vendor) => {
                    return vendor.product.map((item , index) => {
                        if(activeCategory === 'All' || 
                            item.category.includes(activeCategory.toLocaleLowerCase())
                        ) {
                            return(
                                <>
                                <Link className="Cards_List" to={item?.webUrl} key={index}>
                                {/* <div className="Cards_List" key={index}> */}
                                   <img src={`${API_URL}/uploads/${item.image}`}  />
                                   <div className="Cards_List_items">
                                   <div>{item.productName}</div>
                                    <div>Price : ₹{item.price}/-</div>
                                    {/* <div>{item.description}</div> */}
                                   </div>
                                {/* </div> */}
                                </Link>
                                </>
                            )
                        }
                    })
                })
            }
            </div>
            </div>
         
        {/* {
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
            } */}
               </div>
       
)}
   
  
    {/* <div className="categories_Container">
        <h3>POPULAR CATEGORIES</h3>
        <div className="categories_Products" >
        <div className="Wed_Invitation" >
            <img src={giftCard} />
           <p>Wedding Invitation</p>
           </div>
           <div className="Birthday_Parties">
            <img src={BirthdayCard} />
            <p>Birthday Parties</p>
           </div>
           <div className="Mature_Function">
            <img src={Function}  />
            <p>Half Saree Function</p>
           </div>
           
        </div>
        
       </div>  */}

  
 
export default Categories
import React from 'react'
import { Link, useNavigate, useParams } from "react-router-dom";
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
     const [activeCategory, setActiveCategory]= useState('all');
     const navigate = useNavigate();
     const [visibleCount, setVisibleCount] = useState(8);
     const [allProducts, setAllProducts] = useState([]);

    // const {vendorId} = useParams();
    // console.log(vendorId)

    const vendorDataHandler = async()=>{
        try {
                const response = await fetch(`${API_URL}/vendor/all-vendors`)
                const newData = await response.json()
                    // setVendorData(newData);

                    console.log("this is api Data ", newData)

                    if (newData && newData.vendors) {
                        // Flatten the array of products from all vendors
                        const allProductsArray = newData.vendors.reduce((acc, vendor) => {
                            if (vendor.product && Array.isArray(vendor.product)) {
                                return [...acc, ...vendor.product];
                            }
                            return acc;
                        }, []);
        
                        setAllProducts(allProductsArray);
                    } else {
                        setAllProducts([]);
                    }
                
        } catch (error) {
            alert("failed to fetch data")
            console.error("failed to fetch data", error)
          
        }
}
        useEffect(()=>{
            vendorDataHandler()
        }, [])

        const filterHandler = (category) => {
            setActiveCategory(category)
          };       

          const handleViewMore = () => {
            setVisibleCount(prevCount => prevCount + 12);
        };

        const displayedProducts = allProducts.slice(0, visibleCount);



  return (
    <div className="Our_Collections_Container">
        <div className="Our_Collections_title">
            <h2>OUR COLLECTIONS</h2>
           
            {/* <h3>This is vendorId {vendorData}</h3> */}
        
        {/* <div className="categories_Products">
      <button onClick={() => filterHandler('All' , 'all')}>All</button>
      <button onClick={() => filterHandler('Wedding' , 'wedding')}>Wedding</button>
      <button onClick={() => filterHandler('Birthday' , 'birthday')}>Birthday</button>
      <button onClick={() => filterHandler('HalfSaree' , 'halfsaree')} >Halfsaree</button>
    </div>
        <div className="Our_Collections_List">

            {
                vendorData.vendors && vendorData.vendors.map((vendor) => {
                    return vendor.product.map((item) => {
                        if(activeCategory === 'All' || 
                            item.category.includes(activeCategory.toLocaleLowerCase())
                        ) {
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
                        }
                    })
                })
            } */}
        {
                // vendorData.vendors && vendorData.vendors.map((vendor) => {
                //     return(
                       <div className="Our_Collections_List">
                        {
                            displayedProducts.map((item, index) => {
                                return(
                                    <>
                                    <Link className="Cards_List" to={item?.webUrl} key={index}>
                                       <img src={`${API_URL}/uploads/${item.image}`}  />
                                       <div className="Cards_List_items">
                                       <div>{item.productName}</div>
                                        <div>Price : ₹{item.price}/-</div>
                                        {/* <div>{item.description}</div> */}
                                       </div>
                                    </Link>
                                    </>
                                )
                            })
                        }
                       </div>
                    // )
                // })
            }
        </div>
        {allProducts.length > visibleCount && (
                <div className="button">
                <button onClick={handleViewMore}>Browse Collections</button>
           </div>
            )}

        
    </div>
  )
}

export default Our_Collections




import React from 'react'
import Desgin_Page from '../Components/Desgin_Page'
import Nav_Bar from '../Components/Nav_Bar'
import Recomendations from '../Components/Recomendations'
import Categories from '../Components/Categories'
import Poster from '../Components/Poster'
import Share_Products from '../Components/Share_Products'
import Our_Collections from '../Components/Our_Collections'
import Contacts from '../Components/Contacts'
import Contact_details from '../Components/Contact_details'

const Home_Page = () => {
  return (
    <div className="Main_Container">
         <Nav_Bar/>
         <Desgin_Page/>
         {/* <Recomendations/> */}
         <Categories/>
         <Poster/>
         <Share_Products/>
         <Our_Collections/>
         <Contact_details/>
         <Contacts/>
    </div>
  )
}

export default Home_Page
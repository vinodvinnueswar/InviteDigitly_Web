import React from 'react'
import facebook from '../images/logos/Facebook.png'
import instagram from '../images/logos/Instagram.png'
import youtube from '../images/logos/Social.png'

const Contacts = () => {
  return (
    <div className="Contacts-Container">
      <div className="logo">
        <img src="" alt="" />
      </div> 
      <div className="detail_page">
        
      </div>
        <div className="Contacts">
        <div className="Contact-details">
          <h4>Contact</h4>
            <p>Phone : +91 9346999046</p>
            <p>Email : invitedigitallyoffical@gmail.com</p>
        </div>
        <div className="Social-Media">
             <h4>Follow us</h4>
          <a href="https://www.facebook.com/profile.php?id=61576721319356">
          <img src={facebook} alt="" />
          </a>
           
           <a href="https://www.instagram.com/invite.digitally_official">
           <img src={instagram} alt="" />
           </a>
            <img src={youtube} alt="" />
        </div>
        </div>
    </div>
  )
}

export default Contacts
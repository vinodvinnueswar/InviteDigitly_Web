import React from 'react'
import facebook from '../images/logos/Facebook.png'
import instagram from '../images/logos/Instagram.png'
import youtube from '../images/logos/youtube.png'

const Contacts = () => {
  return (
    <div className="Contacts-Container">
      <div className="logo">
            <h4>Logo</h4>
      </div> 
        <div className="Contacts">
        <div className="Contact-details">
          <h4>Contact</h4>
            <p>Phone : +91 9346999046</p>
            <p>Email : vinodguttula@gmail.com</p>
        </div>
        <div className="Social-Media">
           <h4>Follow us</h4>
            <img src={facebook} alt="" />
            <img src={instagram} alt="" />
            <img src={youtube} alt="" />
        </div>
        </div>
    </div>
  )
}

export default Contacts
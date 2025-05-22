import React from 'react'
import banner from '../images/banner/Invitation_Banner.png'
import QRCode from '../images/QR_code/QR_Code.jpg'

const Poster = () => {
  return (
    <div className="Poster_Container">
        <div className="Poster_Content">
            <h2>Digital Invitation Card</h2>
            <p>Invite Your Favourite Persons through online</p> <br /><br />
            <p>Scan QR Code </p>
            <img src={QRCode} alt="" />
        </div>
        <div className="Poster_Images">
            <img src={banner} alt="" />
        </div>
    </div>
  )
}

export default Poster
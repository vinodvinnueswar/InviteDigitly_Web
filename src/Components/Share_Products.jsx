import React from 'react'
import share from '../images/share/Share.png'

const Share_Products = () => {
  return (
    <div className="Shared_Container">
       <div className="shared_title">
        <h2>Share your Digital <br />Invitation through Whatsapp</h2>
        <p>Invite your distanced guests through Onilne. <br /> National and International guests will be invited <br /> without concern and delays </p>
       </div>
       <div className="whatsapp_image">
        <img src={share} alt="" />
       </div>
    </div>
  )
}

export default Share_Products
import React from 'react'
import Whatsapp from '../images/social_share/Whatsapp.png'

const Nav_Bar = () => {
  return (
    <div className="Nav_Bar_Container">
        <div className="Nav_Bar_title">
            <h2>InviteDigitly</h2>
            <p>Online Invitation Website </p>
        </div>
        <div className="list">
           <a href="https://web.telegram.org/a/#1251275106">
           <p>Whatsapp</p>
           <img src={Whatsapp} alt="" />
           </a>

        </div>
    </div>
  )
}

export default Nav_Bar
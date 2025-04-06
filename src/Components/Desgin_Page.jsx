import React from 'react'
import videoBg from '../videos/video4.mp4'
import lpMB from '../images/LPMB.png'

const Desgin_Page = () => {
  return (
    <div className="desgin_Container">
        {/* <div className="overlay"></div> */}
        <video src={videoBg} autoPlay loop muted/>
      <div className="Content">
        <div className="desgin_img">
          <img src={lpMB} alt="" />
        </div>
        <div className="desgin_title">
            <h2>InviteDigitly to your Relative , Friends ,<br /> Family for your Favourite occasion </h2>
        </div>
        
      </div>
    </div>
  )
}

export default Desgin_Page
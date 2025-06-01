import React from 'react'
import visuals from '../images/Contacts_logos/visuaization.png'
import Multimedia from '../images/Contacts_logos/folder.png'
import Gallery from '../images/Contacts_logos/picture.png'
import Location from '../images/Contacts_logos/location.png'
import Music from '../images/Contacts_logos/music.png'
import QRScanner from '../images/Contacts_logos/qr-code.png'

const Contact_details = () => {
  return (
    <div className="contact_details_Container">
        <h2>INTEGARTIONS</h2>
        <div className="contact_details_page">
            <div className="visuals">
                <img src={visuals} alt="" /><br />
                <h2>Visuals</h2><br />
               <p>Every moment captured, a memory treasured .Moments frozen in time, memories that live forever,
                 vibrate images and stunnibg animations engage your content.
               </p>
            </div>
            <div className="Multimedia">
                <img src={Multimedia} alt="" /><br />
                <h2>Multimedia</h2><br />
                <p>From shy smiles to happy tears — here’s how it all happened!
                    with implementing of Photos,Videos,... and warm wishes from 
                    Family memebers.
                </p>
            </div>
            <div className="Gallery">
                <img src={Gallery} alt="" /><br />
                <h2>Gallery</h2><br />
                <p>Each picture tells a chapter of our beautiful love story.
                    Share your joyful moments to every one whom, visit your website.
                </p>
            </div>
            <div className="location">
                <img src={Location} alt="" /><br />
                <h2>Location</h2><br />
                <p>Find your way to the big day!
                    using your website to find the event spots easily to your Guests.
                    without concern it helpful to distance Guests to find the Route,of your
                    function place.
                </p>
            </div>
            <div className="music">
                <img src={Music} alt="" /><br />
                <h2>Music</h2><br />
                <p>Implementing Music to your website and feel the moment to enjoy while scrolling,
                    it will pleasent and peaceful .
                </p>
            </div>
            <div className="QR_Scaner">
                <img src={QRScanner} alt="" /><br />
                <h2>QR Scanner</h2><br />
                <p>Future inviation will be simple and easy to invite your International & National guests through sending 
                    Links or Scanners like QR's .
                    Easy Scan and see the warm welcome Cards to your Guests.

                </p>

            </div>
        </div>
    </div>
  )
}

export default Contact_details
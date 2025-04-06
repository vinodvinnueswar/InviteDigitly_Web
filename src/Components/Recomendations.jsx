import React from 'react'

import wedCards from "../images/cards/wed_Cards.jpg"
import wedCards1 from "../images/cards/wed_Cards1.jpg"
import wedCards2 from "../images/cards/wed_Cards2.jpg"
import wed from "../images/cards/wed.jpg"

const Recomendations = () => {

   const data = [
       {
        img:wedCards
       },
       {
        img:wedCards1
       },
       {
        img:wedCards2
       },
       {
        img:wed
       },
       {
        img:wedCards
       },
   ]
   

  return (
    <div className="Recomendations_Container">
        <div className="Recomendations_title">
           <h3>OUR WORKS</h3>
           <p>Some of our latest works</p>
        </div>
        <div className="Recomded_Products">
            {
                data.map((items) => {
                    return(
                        <div className="card_pics">
                            <img src={items.img} alt="" />
                        </div>
                    )
                })
            }
        </div>
    </div>
  )
}

export default Recomendations
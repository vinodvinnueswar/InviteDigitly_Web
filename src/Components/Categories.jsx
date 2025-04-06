import React from 'react'
import giftCard from '../images/cards/gift_Card.png'
import BirthdayCard from '../images/cards/Birthday_card.png'
import Function from '../images/cards/Function.png'

const Categories = () => {
  return (
    <div className="categories_Container">
        <h3>POPULAR CATEGORIES</h3>
        <div className="categories_Products">
           <div className="Wed_Invitation">
            <img src={giftCard} alt="" />
           <p>Wedding Invitation</p>
           </div>
           <div className="Birthday_Parties">
            <img src={BirthdayCard} alt="" />
            <p>Birthday Parties</p>
           </div>
           <div className="Mature_Function">
            <img src={Function} alt="" />
            <p>Half Saree Function</p>
           </div>
        </div>
    </div>
  )
}

export default Categories
import React from 'react'
import WedInvite1 from '../images/Our_Collections/Wed_card1.png'
import WedInvite2 from '../images/Our_Collections/Wed_Card2.png'
import WedInvite3 from '../images/Our_Collections/Wed_Card3.png'
import WedInvite4 from '../images/Our_Collections/Wed_Card4.png'
import BirthdayCard1 from '../images/Our_Collections/Birthday_Card2.png'
import BirthdayCard2 from '../images/Our_Collections/Birthday_Card3.png'
import BirthdayCard3 from '../images/Our_Collections/Birthday_Card4.png'
import BirthdayCard4 from '../images/Our_Collections/Birthday_Card5.png'
import HalfSaree1 from '../images/Our_Collections/Half_Saree.png'
import HalfSaree2 from '../images/Our_Collections/Half_Saree1.png'
import HalfSaree3 from '../images/Our_Collections/Half_Saree2.png'
import HalfSaree4 from '../images/Our_Collections/Half_Saree3.png'




const Our_Collections = () => {
    const DataList = [
        {
            img:WedInvite1
        },
        {
            img:WedInvite2
        },
        {
            img:WedInvite3
        },
        {
            img:WedInvite4
        },
        {
            img:BirthdayCard1
        },
        {
            img:BirthdayCard2
        },
        {
            img:BirthdayCard3
        },
        {
            img:BirthdayCard4
        },
        {
            img:HalfSaree1
        },
        {
            img:HalfSaree2
        },
        {
            img:HalfSaree3
        },
        {
            img:HalfSaree4
        },

       
    ]
  return (
    <div className="Our_Collections_Container">
        <div className="Our_Collections_title">
            <h2>OUR COLLECTIONS</h2>
        </div>
        <div className="Our_Collections_List">
           {
            DataList.map((items) => {
                 return(
                    <div className="Cards_List">
                        <img src={items.img} alt="" />
                    </div>
                 )
            })
           }
        </div>
        <div className="button">
             <button>Browse Collections</button>
        </div>
    </div>
  )
}

export default Our_Collections
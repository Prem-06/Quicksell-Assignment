import React from 'react'
import './ticket_bar.css'
import addbutton from '../../assets/pictures/icons/add.svg'
import dotbutton from '../../assets/pictures/icons/3dotmenu.svg'
const Ticket_bar = (props) => {
  const {ticketCategory,count}=props
  return (
    <div className='ticket_bar'>
        <div className="ticket_bar_head">
        <img src={ticketCategory.categoryImg}alt="img" />
         <div className="ticket-title-container">
            <p>{ticketCategory.categoryValue}</p>
            <span>{count}</span>
         </div>
        </div>
        <div className="ticket_bar_tail">
            <img src={addbutton} alt="add" />
            <img src={dotbutton} alt="options" />
        </div>
        </div>
  )
}

export default Ticket_bar
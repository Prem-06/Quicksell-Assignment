import React from 'react'
import './category.css'
import Card from '../card/card'
import Ticket_bar from '../ticket_bar/ticket_bar'
const Category = (props) => {
  const {ticketCategory,tickets}=props
  return (
    <div className="category-column">
        <Ticket_bar ticketCategory={ticketCategory} count={tickets.length}/>
        {
          tickets.map((ticket,key)=>{
            return <Card ticket={ticket} key={key}/>
          })
        }
        </div>
  )
}

export default Category
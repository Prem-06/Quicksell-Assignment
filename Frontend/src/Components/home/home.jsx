import React,{useContext} from 'react'
import './home.css'
import {Context} from '../../context'
import Navbar from '../navbar/navbar'
import Category from '../Category_column/category'
const Home = () => {
  const {groupedData,setgroupedData}=useContext(Context)
  
  return (
    <div className='home'>
       <Navbar/>
       <div className="tickets-category-container">
       {
        groupedData.map((columns,key)=>{
         return <Category ticketCategory={columns.ticketCategory} tickets={columns.tickets} key={key}/>
        })
       }
       </div>
       
    </div>
  )
}

export default Home
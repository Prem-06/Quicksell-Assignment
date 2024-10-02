import { useState,useEffect,useContext} from 'react'
import './App.css'
import Home from './Components/home/home'
import {group_data,modifyDatavalue} from './utils/dataTransfromation'
import orderTicket from './utils/orderingTicket'
import { Context } from './context'
function App() {
  const api_url = import.meta.env.VITE_API_URL;
  const [ticketData,setticketData]=useState([])
  const [userData,setuserData]=useState([])
  const {Grouping,Ordering,setmodifiedApiData,setgroupedData}=useContext(Context)
  useEffect(()=>{
    async function request_api() {
      try{
         let data=await fetch(api_url)
         let json_data=await data.json()
         setticketData(json_data.tickets)
         setuserData(json_data.users)
         let modifiedData=modifyDatavalue(json_data.tickets,json_data.users)
         setmodifiedApiData(modifiedData)
         let groupedData=group_data(modifiedData,Grouping)
         let orderedData=orderTicket(groupedData,Ordering)
         setgroupedData(orderedData)
      }
      catch(error){
         console.log(error)
      }
    }

    request_api()
  },[])
  return (
   
    <div className='app'>
     <Home/>
    </div>
   
  )
}

export default App

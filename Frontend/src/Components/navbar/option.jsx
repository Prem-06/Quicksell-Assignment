import React,{useContext,useEffect} from 'react';
import './option.css';
import { Context } from '../../context';
import {group_data} from '../../utils/dataTransfromation'
import orderTicket from '../../utils/orderingTicket';
const DisplayOption = (props) => {
  const {Ordering, setOrdering,Grouping, setGrouping ,modifiedApiData,groupedData,setgroupedData}=useContext(Context)
  const {setshowOption,showOption}=props
  useEffect(()=>{
     
      let updatedData=group_data(modifiedApiData,Grouping)
      let orderData=orderTicket(updatedData,Ordering)
      setgroupedData(orderData)
      sessionStorage.setItem('groupby',Grouping)
      sessionStorage.setItem('orderby',Ordering)
  },[Grouping])
  useEffect(()=>{
      let orderData=orderTicket(groupedData,Ordering)
      setgroupedData(orderData)
      sessionStorage.setItem('groupby',Grouping)
      sessionStorage.setItem('orderby',Ordering)
  },[Ordering])
  return (
    <div className='option'>
        <div className="option-container">
       
        <span>Grouping</span>
      <select className='select' value={Grouping} onChange={(e)=>{setGrouping(e.target.value)
       }}>
        <option value='Status'>Status</option>
        <option value='Priority'>Priority</option>
        <option value='User'>User</option>
      </select>
        </div>
        <div className="option-container">
        <span>Ordering</span>
      <select className='select' value={Ordering} onChange={(e)=>{setOrdering(e.target.value)
      }}>
        <option value='Priority'>Priority</option>
        <option value='Title'>Title</option>
      </select>
    </div>
        </div>
     
      
  );
};

export default DisplayOption;

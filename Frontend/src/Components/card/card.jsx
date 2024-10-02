import React,{useState,useContext, useEffect} from "react";
import "./card.css";
import profile from '../../assets/pictures/profile.jpg';
import to_do from '../../assets/pictures/icons/To_do.svg';
import inprogress from '../../assets/pictures/icons/in_progress.svg';
import {Context} from '../../context'
import { getimage } from "../../utils/dataTransfromation";
const Card = (props) => {
  const {ticket}=props
  const [tags,settags]=useState(ticket.tag)
  const [showProfile,setshowProfile]=useState(true)
  const {Grouping}=useContext(Context)
   useEffect(()=>{
       if(Grouping==='User'){
        setshowProfile(false)
       }
       else{
        setshowProfile(true)
       }
   },[Grouping])
  return (
    <div className="card">
      <div className="card-header">
      <div className="card-id">{ticket.id}</div>
        <div className="profile-container">
          {
            showProfile&&(<img className="profile-picture" src={profile} alt="profile" />)
          }
          {
            showProfile&&(<img className="active-indicator" src={inprogress} alt="active" />)
          }

        </div>
       
      </div>
      
      <div className="card-title">
        <img src={getimage(ticket.status,"Status")} alt="title" />
        <strong className="title">{ticket.title}</strong>
      </div>
      <div className="card-tags">
        <div className="tag_signal">
          <img src={getimage(ticket.priority,"Priority")} alt="feature" />
        </div>
        
       {
        tags.map((tag,key)=>{
          return (<div className="tags" key={key}>
            <img src={to_do} alt="tag" />
            <span>{tag}</span>
          </div>)
        })
       }
        
      </div>
    </div>
  );
};

export default Card;

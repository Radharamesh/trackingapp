import React from "react";

export default function Parcelpage({information}) {
    const { 
      id, 
      status, 
      eta, 
      parcel_id, 
      user_name, 
      user_phone,
      sender, 
      location_name,
      notes } = information;
  

     console.log("parcelpage");

return (
      <div className="parcellist">
        <ul>
          <h3>Parcel-id</h3>
        {information.map(item => (<li key={item.id}>{item.parcel_id}</li>))}
        <h3>ETA</h3>
        {information.map(item => (<li key={item.id}>{item.eta}</li>))}
        <h3>Status</h3>
        {information.map(item => (<li key={item.id}>{item.status}</li>))}
        <h3>Pickup-Location</h3>
        {information.map(item => (<li key={item.id}>{item.location_name}</li>))}
        </ul>
      </div> 
      );

  }
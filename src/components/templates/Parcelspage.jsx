import React from "react";
import Parcelpage from "./Parcelpage";

export default function Parcelspage({information}) {
    
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
    /* function packagelist() {
      const pkglist = items.map(item =>(
        <h1 key = {item.id}>{item.parcel_id} </h1>
        ));
    } */
   
    const Parcellist = information.map((item) => {
          return <Parcelpage key={item.id} data={item}/>;
      });
    
    return (

         /* {status === 1 ? <Parcelpage data={information[0]} /> : null}   */
         /* {information.map(item=>(
                <AllParcel id={item.id} 
                parcel_id={item.parcel_id} 
                status={item.status}/>))} */
    
     /*            <div>
                  <h1>Your Parcels</h1>
                  <div>{Parcellist}</div>
                </div> */
        
       <div className="grid">
       <article className="parcels">
       <h3 className="heading">Parcel ID</h3>
       <div>
       {information.map(item => (<p key={item.id}>{item.parcel_id}</p>))}
       </div>

       </article> 

        <article className="parcels">
        <h3 className="heading">Status</h3>
        <div>
        {information.map(item => (<p key={item.id}>{item.status}</p>))}
        </div>
        </article>

        <article className="parcels">
        <h3 className="heading">ETA</h3>
        <div>
        {information.map(item => (<p key={item.id}>{item.eta}</p>))}
        </div>
        </article>

        <article className="parcels">
        <h3 className="heading">Pickup Location</h3>
        <div>
        {information.map(item => (<p key={item.id}>{item.location_name}</p>))}
        </div>
        </article>
        </div>
       );
      
    
}

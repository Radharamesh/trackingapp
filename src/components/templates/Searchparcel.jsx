import React from "react";

export default function Searchparcel({match, information}) {
    console.log("search page");
    console.log("Match",match.params.id);
    console.log(information);

    const parcelid = match.params.id;

     const parcel = information.filter((Object) => Object.id===parcelid);
    console.log(parcel);
   /*  const { 
        status, 
        eta, 
        parcel_id, 
        user_name, 
        user_phone,
        sender, 
        location_name,
        notes } = information[parcelid]; */

        return (
         <article>
  {/*        <h3>
                <span>#{parcelid} </span>
                {user_name}
                </h3>
              <p>Parcel id: {parcel_id}</p>
              <p>Parcel Status: {status}</p>
              <p>Estimated Time of Arrival: {eta}</p>
              <p>Pickup Location: {location_name}</p>  */}

{/*                 <h3>
                <span>#{id} </span>
                {user_name}
                </h3>
                <p>Status :{status}</p>
 */}
{/*                       {information.map(item=>(
                                      <AllParcel id={item.id} 
                                      parcel_id={item.parcel_id} 
                                      status={item.status}/>))}
                      
                      orders.map(item => <li key={item.id}>{item}</li>
 */}      <p>searchpage</p>
            </article>
          );
}
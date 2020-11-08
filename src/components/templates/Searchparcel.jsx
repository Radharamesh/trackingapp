import React from "react";

export default function Searchparcel({match, information}) {

  
    console.log("search page");
    console.log("Match",match.params.query);
    console.log(information);

    const query = new RegExp(match.params.query, "i");

     const results = information.filter((item) => item.parcel_id.match(query));
  console.log("Query",query);
    console.log("results",results);
   const { 
        status, 
        eta, 
        parcel_id, 
        user_name, 
        user_phone,
        sender, 
        location_name,
        notes } = results;

        return (
         <article className="Parceldetaillist">
           <div>
             <h3>Your Parcel Details</h3>
            {results.map(item => (<p key={item.id}>User Name: {item.user_name}</p>))}
            {results.map(item => (<p key={item.id}>User Phoneno: {item.user_phone}</p>))}
            {results.map(item => (<p key={item.id}>Parcel id: {item.parcel_id}</p>))}
            {results.map(item => (<p key={item.id}>Estimated Time of Arrival: {item.eta}</p>))}
            {results.map(item => (<p key={item.id}>Parcel Status: {item.status}</p>))}
            {results.map(item => (<p key={item.id}>Location_name: {item.location_name}</p>))}
            {results.map(item => (<p key={item.id}>Sender: {item.sender}</p>))}
            {results.map(item => (<p key={item.id}>Parcel Notes: {item.notes}</p>))}
            
           </div>
             

            </article>
          );
}
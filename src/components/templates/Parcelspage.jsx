import React from "react";
import Parcelpage from "./Parcelpage";

export default function Parcelspage({information}) {
    

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

     <div>
       <h1>{Parcellist}</h1>
     </div>
        
      
    )
}

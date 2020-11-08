import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Homepage() {
  
    return (
        <div>
        <h3>Welcome to ABC Tracking App</h3>
        <p>To display your parcels go to Parcels page</p>
        

        {/* <div>
            <input placeholder="Enter Parcel-id" value={id} onChange={(event) => setId(event.target.value)}/>
            <Link to={"/search-page/"+id} >Parcel Details</Link>
        </div> */}
        </div>
    );
}
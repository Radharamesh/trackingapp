import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Homepage({ information }) {
  const [query, setQuery] = useState("");
  console.log("Parcel info", information);
  return (
    <div className="Homepage">
      {/* <h3>Welcome {information[0].user_name}</h3>  */}
      <h3>Welcome to ABC Package Tracking App</h3>
      <p>To display all of your parcels go to Parcels page</p>
      <p>
        To display details about particular Parcel Ener Parcel-id below and
        Click Parcel Details
      </p>

      <div>
        <input
          placeholder="Enter Parcel-id"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
        />
        <Link to={"/search-page/" + query}>Parcel Details</Link>
      </div>

      <div className="HomeParcellist">
        <h3>Your Parcels</h3>
        {information.map((item) => (
          <p key={item.id}>Parcel id: {item.parcel_id}</p>
        ))}
      </div>
    </div>
  );
}

import React from "react";

export default function Parcelspage({ information }) {
  return (
    <div className="grid">
      <article className="parcels">
        <h3 className="heading">Parcel ID</h3>
        <div>
          {information.map((item) => (
            <p key={item.id}>{item.parcel_id}</p>
          ))}
        </div>
      </article>

      <article className="parcels">
        <h3 className="heading">Status</h3>
        <div>
          {information.map((item) => (
            <p key={item.id}>{item.status}</p>
          ))}
        </div>
      </article>

      <article className="parcels">
        <h3 className="heading">ETA</h3>
        <div>
          {information.map((item) => (
            <p key={item.id}>{item.eta}</p>
          ))}
        </div>
      </article>

      <article className="parcels">
        <h3 className="heading">Pickup Location</h3>
        <div>
          {information.map((item) => (
            <p key={item.id}>{item.location_name}</p>
          ))}
        </div>
      </article>
    </div>
  );
}

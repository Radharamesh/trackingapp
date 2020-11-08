import React from "react";

export default function Parceltable({ information }) {
  console.log("parcelpage");
  function rendertableheader() {
    return (
      <thead className="tblheader">
        <tr>
          <th>Parcel_ID</th>
          <th>Status</th>
          <th>ETA</th>
          <th>Location</th>
        </tr>
      </thead>
    );
  }
  function rendertablerows() {
    return information.map((item) => {
      return (
        <tbody className="tblbody">
          <tr key={item.id}>
            <td>{item.parcel_id}</td>
            <td>{item.status}</td>
            <td>{item.eta}</td>
            <td>{item.location_name}</td>
          </tr>
        </tbody>
      );
    });
  }

  /*    function rendertablerowsid() {
        return information.map(item => {
               return <tr key={item.id}>

                   <td>{item.parcel_id}</td>
                   
               </tr>
        })
    }

    function rendertablerowsstatus() {
        return information.map(item => {
               return <tr key={item.id}>

                
                   <td>{item.status}</td>
                
               </tr>
        })
    }
    function rendertablerowseta() {
        return information.map(item => {
               return <tr key={item.id}>

                
                   <td>{item.eta}</td>
                
               </tr>
        })
    }
    function rendertablerowslocation() {
        return information.map(item => {
               return <tr key={item.id}>

                
                   <td>{item.location_name}</td>
                
               </tr>
        })
    }
 */
  return (
    /*     <div className="parcellist">
          <article>
          <h3>Parcel-ID</h3>
          {rendertablerowsid()}
          </article>
          <article>
          <h3>Parcel-Status</h3>
          {rendertablerowsstatus()}
          </article>
          <article>
          <h3>ETA</h3>
          {rendertablerowseta()}
          </article>
          <article>
          <h3>Pickuplocation</h3>
          {rendertablerowslocation()}
          </article>
        </div> 
      );
 */
    <div className="parcellist">
      {rendertableheader()}

      {rendertablerows()}
    </div>
  );
}

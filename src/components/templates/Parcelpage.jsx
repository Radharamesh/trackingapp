import React from "react";

export default function Parcelpage({ data }) {
    const { id, user_name, user_phone } = data;
  
    return (
      <article>
        <h1>
          <span>#{id} </span>
          {user_name}
        </h1>
        <p>Phone: {user_phone}</p>
      </article>
    );
  }
import React from "react";
import "./card.css";
export default function Card(props) {
    let {data} = props
    data = data.data
  return (
    <div>
      <div className="userCard">
        <h2 className="header">User details</h2>
        <div className="content">
          <h2>
            <b>Name:</b> {data.name}
          </h2>
          <p>
            <b>Age:</b> {data.age}
          </p>
          <p>
            <b>Profession:</b> {data.profession}
          </p>
          <p>
            <b>location:</b> {data.location}
          </p>
          <p>
            <b>No. of guests:</b> {data.guests}
          </p>
          <p>
            <b>Date:</b> {data.date}
          </p>
          <p>
            <b>Address:</b> {data.address}
          </p>
        </div>
      </div>
    </div>
  );
}

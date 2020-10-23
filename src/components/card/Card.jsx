import React from "react";
import styles from './Card.module.css'
export default function Card(props) {
    let {data} = props
    data = data.data
    let date = data.date
    date = date.slice(0,10)
  return (
    <div>
      <div className={styles.userCard}>
        <h2 className={styles.header}>User details</h2>
        <div className={styles.content}>
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
            <b>Date of Birth:</b> {date}
          </p>
          <p>
            <b>Address:</b> {data.address}
          </p>
        </div>
      </div>
    </div>
  );
}

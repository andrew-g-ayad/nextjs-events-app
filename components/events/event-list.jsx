import React from "react";
import EvenItem from "./event-item.jsx";
import classes from "./event-list.module.css";

export default function EventList(props) {
  const { items } = props;
  return (
    <ul className={classes.list}>
      {items.map((event) => (
        <EvenItem
          id={event.id}
          title={event.title}
          location={event.location}
          date={event.date}
          image={event.image}
        />
      ))}
    </ul>
  );
}

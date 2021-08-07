import React from "react";
import { Link } from "react-router-dom";
import classes from "./Card.module.css";

const Card = props => {
  return (
    <div className={classes.card} id={props.id}>
      <Link to={`/product/${props.id}`}>
        <div className={classes.img}>
          <img src={props.preview} alt="" />
        </div>
        <div className={classes.details}>
          <h3>{props.title}</h3>
          <h4>{props.brand}</h4>
          <h5>{props.price}</h5>
        </div>
      </Link>
    </div>
  );
};

export default Card;

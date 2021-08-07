import React from "react";
import classes from "./ProductDetails.module.css";

function ProductDetails(props) {
  console.log(props);
  return (
    <div className={classes.Product}>
      <div className={classes.leftColumn}>
        <img src={props.previewImg} alt="" />
      </div>
      <div className={classes.rightColumn}>
        <div className={classes.productDescription}>
          <h1>{props.name}</h1>
          <h4>{props.brand}</h4>
          <h3>
            Price: Rs <span>{props.price}</span>
          </h3>
          <div className={classes.description}>
            <h3>Description</h3>
            <p>{props.description}</p>
          </div>
          <div className={classes.productPreview}>
            <h3>Product Preview</h3>
            <div className={classes.previewImg}>
              {props.photos.map((item, pos) => {
                return (
                  <img
                    key={pos}
                    className={[
                      classes.Image,
                      pos === props.currentImage ? classes.Active : null
                    ].join(" ")}
                    src={item}
                    alt=""
                    onClick={() => props.imgOnClick(pos)}
                  />
                );
              })}
            </div>
          </div>
          <div className={classes.btn} onClick={() => props.addToCart(props)}>
            <button>Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ProductDetails;
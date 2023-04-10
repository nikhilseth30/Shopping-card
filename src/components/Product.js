import React from "react";

export default function Product(props) {
  return (
    <div className="row mt-3">
      <div className="col-5">
        <div class = "productTitle" style={{float:"left"}}>
          <h2>
            <span> {props.productISAProp.name} -</span>
          </h2>
        </div>
        <div class = "productPrice" style={{float:"right"}}>
          <span className="badge bg-secondary"> ₹{props.productISAProp.price}</span>
        </div>
      </div>
      <div className="col-3">
        <div
          className="btn-group"
          role="group"
          aria-label="Basic mixed styles example"
        >
          <button 
            type="button" 
            className="btn btn-danger">
            -
          </button>
          
          <button type="button" className="btn btn-warning">
            {props.productISAProp.quantity}
          </button>

          <button
            type="button"
            className="btn btn-success"
            onClick={() => {
              props.incrementQuantity(props.index);
            }}
          >
            +
          </button>
        </div>
      </div>
        <div className="col-2">
      {props.productISAProp.quantity * props.productISAProp.price}
       </div>
       <button 
       className="col-2 btn btn-danger" 
       onClick={() => {
       props.removeItem(props.index);
       }}
       >
        Remove
      </button>
    </div>
  );
}

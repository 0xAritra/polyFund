import React from "react";

const Card = ({ name, description, email, amount, wallet_address }) => {
  console.log(wallet_address);
  return (
    <div className="card">
      <div className="card-head">
        <h2 className="card-h">{name}</h2>
        <div>
          <input
            className="input-card"
            type="number"
            placeholder="Enter the amount"
          />
        </div>
        <button className="bttn3">DONATE</button>
      </div>
      <div className="descrip">
        {description}
        <div className="min-amt">
          Minimum Amount: <strong className="am">{amount}</strong> MATIC
        </div>
      </div>
    </div>
  );
};

export default Card;

import React from "react";
import "./Coins.css";

const CoinItem = (props) => {
  return (
    <div className="coin-row">
      <p>{props.coin.market_cap_rank}</p>
      <div className="img-symbol">
        <img src={props.coin.image} alt={props.coin.name} />
        <p>{props.coin.symbol}</p>
      </div>
      <p>${props.coin.current_price.toLocaleString()}</p>
      <p>{props.coin.price_change_percentage_24h.toFixed(2)}%</p>
      <p className="hide-mobile">${props.coin.total_volume.toLocaleString()}</p>
      <p className="hide-mobile">${props.coin.market_cap.toLocaleString()}</p>
    </div>
  );
};

export default CoinItem;

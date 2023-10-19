import React from "react";
import PropTypes from "prop-types";

function Coin({ name, icon, price, symbol, rank, twitterUrl }) {
  return (
    <div className="coin">
      <h1 className="coin-rank">{`#${rank}`}</h1>
      <div className="coin-header">
        <img src={icon} alt={`${name} logo`} className="coin-image" />
        <h2 className="coin-name">
          {name} {`(${symbol})`}
        </h2>{" "}
      </div>
      <div className="coin-details">
        <h3 className="mb-2">{`Price: $${parseFloat(price).toFixed(3)}`}</h3>
      </div>
      <br />
      <a
        href={twitterUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="coin-twitter-url"
      >
        Twitter
      </a>
    </div>
  );
}

Coin.propTypes = {
  name: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  symbol: PropTypes.string.isRequired,
  rank: PropTypes.number.isRequired,
  twitterUrl: PropTypes.string.isRequired,
};

export default Coin;

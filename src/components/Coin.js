//compoment that reps the ui for each coin

import React from 'react'


function Coin({name, icon, price, symbol, rank, twitterUrl}) {//props in here. we pass them in app.js <Coin /> {
  //{name} getting this from the props. down below

    return(
      <div className="coin">
          <h1>{rank}: {name}</h1>
          <img src={icon}/>
          <h3>Price: {price} </h3>
          <h3>Symbol: {symbol} </h3>
          <a href={twitterUrl} target="_blank">{twitterUrl} </a>

      </div>
    );
}

export default Coin

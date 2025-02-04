import "./App.css";
import { useEffect, useState } from "react";
import Axios from "axios";
import Coin from "./components/Coin";

function App() {
  const [listOfCoins, setlistOfCoins] = useState([]);
  const [searchWord, setSearchWord] = useState("");

  useEffect(() => {
    Axios.get("https://api.coingecko.com/api/v3/coins/markets", {
      params: {
        vs_currency: "usd",
        order: "market_cap_desc",
        per_page: 100,
        page: 1,
        sparkline: false
      }
    })
      .then((response) => {
        setlistOfCoins(response.data);
      })
      .catch((error) => {
        console.error("Error fetching coin data:", error);
      });
  }, []);

  const filteredCoins = listOfCoins.filter((coin) =>
    coin.name.toLowerCase().includes(searchWord.toLowerCase())
  );

  return (
    <div className="App">
      <div className="cryptoHeader">
        <input
          type="text"
          placeholder="Search Coin..."
          onChange={(event) => {
            setSearchWord(event.target.value);
          }}
        />
      </div>
      <div className="cryptoDisplay">
        {filteredCoins.map((coin) => {
          return (
            <Coin
              key={coin.id}
              name={coin.name}
              icon={coin.image}
              price={coin.current_price}
              rank={coin.market_cap_rank}
              symbol={coin.symbol}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;

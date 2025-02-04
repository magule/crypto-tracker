import "./App.css";
import { useEffect, useState } from "react";
import Axios from "axios";
import Coin from "./components/Coin";

function App() {
  const [listOfCoins, setlistOfCoins] = useState([]);
  const [searchWord, setSearchWord] = useState("");

  useEffect(() => {
    Axios.get("https://api.coinstats.app/v1/coins?skip=0", {
      headers: {
        "x-access-token": process.env.REACT_APP_COINSTATS_API_KEY
      }
    })
      .then((response) => {
        setlistOfCoins(response.data.coins);
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
              twitterUrl={coin.twitterUrl}
              icon={coin.icon}
              price={coin.price}
              rank={coin.rank}
              symbol={coin.symbol}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;

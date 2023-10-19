import "./App.css";
import { useEffect, useState } from "react";
import Axios from "axios";
import Coin from "./components/Coin";

function App() {
  //when the value of a variable changes it will trigger a re-render and show. usestate does this
  //setlistofcoins ffuncition, will change the value of the state
  const [listOfCoins, setlistOfCoins] = useState([]);
  //----

  const [searchWord, setSearchWord] = useState("");

  //-----
  //immidiatly runs when the page rerenders
  //so api req will get the newest data everytime u refresh the website
  useEffect(() => {
    Axios.get("https://api.coinstats.app/public/v1/coins?skip=0").then(
      (response) => {
        setlistOfCoins(response.data.coins); //api daki dataya gore listofcoins i set.
      }
    );
  }, []);

  const filteredCoins = listOfCoins.filter((coin) => {
    return coin.name.toLowerCase().includes(searchWord.toLowerCase());
  });

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
          //it was listOfCoins.map-------we got the listofcoins state and we want
          // to loop through all of the each coin and grab each coin and for each coing generate a h1 tag
          //that will display the name of the coin
          //return <h1> {coin.name} </h1>
          //usstteki map coin deki infoyu hemen altta pass ettik
          return (
            <Coin
              name={coin.name}
              twitterUrl={coin.twitterUrl}
              icon={coin.icon}
              price={coin.price}
              rank={coin.rank}
              symbol={coin.symbol}
            />
          ); //to have access to the data of each coin we need go pass them as props to Coin component. so pass those props in here.
        })}
      </div>
    </div>
  );
}

export default App;

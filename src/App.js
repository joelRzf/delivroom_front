import "./App.css";
import axios from "axios";
import { useState, useEffect } from "react";
import Topheader from "./Components/Topheader/Topheader";
import Header from "./Components/Header/Header";
import MainContent from "./Components/MainContent/MainContent";
import LoaderSpinner from "./Components/Loader/LoaderSpinner";

function App() {
  const [resto, setResto] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [Cart, setCart] = useState([]);
  const fetchData = async () => {
    try {
      const response = await axios.get(
        process.env.REACT_APP_API_ENDPOINT_CYCLIC
      );
      setResto(response.data);
      setIsLoading(false);
    } catch (e) {
      console.error("Failed to get datas");
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return isLoading ? (
    <LoaderSpinner/>
  ) : (
    <div className="App">
      <Topheader />
      <Header
        restoName={resto.restaurant.name}
        description={resto.restaurant.description}
        picture={resto.restaurant.picture}
      />
      <MainContent restoData={resto} cartData={Cart} setCart={setCart} />
    </div>
  );
}

export default App;

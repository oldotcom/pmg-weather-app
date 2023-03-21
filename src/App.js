import { useEffect } from "react";

import "./styles.css";

export default function App() {

  const getResource = async (url) => {
    let res = await fetch(url);

    const errorMessage = () => {
      alert("Enter correct location name, please ;)");
    };

    if (!res.ok) {
      errorMessage();
    }

    return await res.json();
  }

  const getData = async () => {
    const _apiKey = "API_KEY";
    const url = `https://api.weatherapi.com/v1/current.json?key=${_apiKey}&q=london`;
    const res = await getResource(url);

    console.log(res);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="App">
      <h1>PMG weather app</h1>
      <div className="container">
        <div className="left-panel">
          <input id="search"></input>
          <button>search</button>
        </div>

        <div className="right-panel">
          <h1>City Name</h1>
          <h2>Temperature in °C</h2>
        </div>
      </div>
    </div>
  );
}
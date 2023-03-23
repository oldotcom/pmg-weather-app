import { useState } from "react";

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

  const [location, setlocation] = useState();
  const [temp, setTemp] = useState();
  const [value, setValue] = useState("");

  const getData = async () => {
    const _apiKey = "API_KEY";
    const url = `https://api.weatherapi.com/v1/current.json?key=${_apiKey}&q=${value}`;
    const res = await getResource(url);

    setlocation(res.location.name);
    setTemp(res.current.temp_c);
  };

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleButtonClick = () => {
    getData();
    setValue((value) => "");
  };

  const defaultValue = "Enter location, please";
  const degree = " °C";

  return (
    <div className="App">
      <h1>PMG weather app</h1>
      <div className="container">
        <div className="left-panel">
          <input
              id="search"
              type="text"
              value={value}
              onChange={handleChange}
              placeholder="Enter location, please"
              onKeyPress={(e) => {
                if (e.key === "Enter") {
                  handleButtonClick();
                }
              }}
            />
          <button onClick={handleButtonClick}>search</button>
        </div>

        <div className="right-panel">
          <h1>{!location ? defaultValue : location}</h1>
          <h2>
            {!temp ? "" : temp}
            {!temp ? "" : degree}
          </h2>
        </div>
      </div>
    </div>
  );
}
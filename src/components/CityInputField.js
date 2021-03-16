import { useState } from "react";
import "./CityInputField.css";
const CityInputField = (props) => {
  const [city, setCity] = useState("");

  return (
    <div className="inputWrapper">
      <input
        className="inputField"
        onChange={(event) => setCity(event.target.value)}
        placeholder="Enter city "
      ></input>
      <button
        value={city}
        type="submit"
        className="submitButton"
        onClick={() => props.onSearch(city)}
      >
        SUBMIT
      </button>
    </div>
  );
};

export default CityInputField;

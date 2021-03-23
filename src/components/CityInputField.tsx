import React, { useState } from "react";
import "./CityInputField.css";

interface Props {
  onSearch: (city: string) => void;
}
const CityInputField: React.FC<Props> = (props: Props) => {
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

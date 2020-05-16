import React, { useState } from "react";
import { Card, Button } from "../../Components/";

const CurrentMoney = (props) => {
  const [inputValue, setInputValue] = useState("");

  const _handleOnChange = (e) => {
    setInputValue(e.target.value);
  };
  const _handleOnClick = () => {
    console.log("up to current block");
  };

  return (
    <Card
      typeCard="currentBlock"
      monetaryUnit="USD"
      countryName="United States"
      exchangeValue={`${inputValue}`}
    >
      <input
        type="number"
        onChange={_handleOnChange}
        className="Card__input"
        value={inputValue}
      />
    </Card>
  );
};

export default CurrentMoney;

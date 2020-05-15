import React, { useState } from "react";
import { Card } from "../../Components/";

const CurrentMoney = (props) => {
  const [inputValue, setInputValue] = useState("");

  const _handleOnChange = (e) => {
    setInputValue(e.target.value);
  };
  return (
    <Card
      currentBlock="currentBlock"
      monetaryUnit="USD"
      countryName="USA"
      handleOnChange={_handleOnChange}
      inputValue={inputValue}
    />
  );
};

export default CurrentMoney;

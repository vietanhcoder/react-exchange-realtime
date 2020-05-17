import React, { useState } from "react";
import { Card } from "../../Components/";

const CurrentMoney = (props) => {
  const [inputValue, setInputValue] = useState("");

  const _handleOnChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <Card
      typeCard="currentBlock"
      monetaryUnit="USD"
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

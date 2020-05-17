import React from "react";
import { Card, Button } from "../../Components/";

const TargetMoney = () => {
  const _handleOnClick = () => {
    console.log("OUTPUT: _handleOnClick -> _handleOnClick");
  };
  const _handleExchange = () => {
    return 3 * 3;
  };
  return (
    <Card
      typeCard="targetBlock"
      monetaryUnit="AED"
      countryName="United Arab Emirates Dirham"
      exchangeValue={_handleExchange()}
      has_button={
        <Button
          btnType="switch_to_currentBlock"
          handleOnClick={_handleOnClick}
        />
      }
    />
  );
};

export default TargetMoney;

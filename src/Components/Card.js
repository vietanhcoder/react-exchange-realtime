import React from "react";
import ReactCountryFlag from "react-country-flag";
import { Button } from "./Button";
export const Card = (props) => {
  const _handleOnClick = () => {
    console.log("up to current block");
  };

  return (
    <div
      className={`block_wrapper ${props.currentBlock || ""} ${
        props.targetBlock || ""
      }`}
    >
      <div className="Card__title">
        {props.targetBlock ? (
          <Button
            btnType="switch_to_currentBlock"
            handleOnClick={_handleOnClick}
          />
        ) : null}
        <ReactCountryFlag
          className="emojiFlag"
          countryCode="US"
          style={{
            fontSize: "2em",
            lineHeight: "2em",
          }}
          aria-label="United States"
        />
        {props.monetaryUnit} {props.countryName}
      </div>
      {props.currentBlock && (
        <input
          type="number"
          onChange={props.handleOnChange}
          className="Card__input"
          value={props.inputValue}
        />
      )}
      <div className="Card__show_value">
        {props.monetaryUnit} {props.currentBlock ? `${props.inputValue}` : ""}
        {props.targetBlock ? `${props.targetMoney}` : ""}
      </div>
    </div>
  );
};
// monetaryUnit

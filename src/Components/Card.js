import React from "react";
import ReactCountryFlag from "react-country-flag";
import "./styles.scss";
export const Card = (props) => {
  return (
    <div className={`block_wrapper ${props.typeCard}`}>
      <div className="Card__title">
        {props.has_button}
        <ReactCountryFlag
          className="emojiFlag"
          countryCode="US"
          style={{
            fontSize: "2em",
            lineHeight: "1em",
          }}
          aria-label="United States"
        />
        {props.monetaryUnit} {props.countryName}
      </div>
      {props.children}
      <div className="Card__show_value">
        {`${props.monetaryUnit} ${props.exchangeValue}`}
      </div>
    </div>
  );
};

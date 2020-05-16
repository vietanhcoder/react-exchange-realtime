import React from "react";
import ReactCountryFlag from "react-country-flag";

const CurrencyodalItem = (props) => {
  return (
    <div>
      <li className={`currencyModal__item ${props.selected_item || ""}`}>
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
        {props.selected_item ? <span className="selected_item">★</span> : null}
      </li>
    </div>
  );
};

export default CurrencyodalItem;

import React from "react";
import FlagMonetaryCountryUnit from "./FlagMonetaryCountryUnit";
import "./styles.scss";
export const Card = (props) => {
  return (
    <div className={`block_wrapper ${props.typeCard}`}>
      <div className="Card__title">
        {props.has_button}
        <FlagMonetaryCountryUnit />
      </div>
      {props.children}
      <div className="Card__show_value">{`monetary unit + ${props.exchangeValue}`}</div>
    </div>
  );
};

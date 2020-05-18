import React, { useState } from "react";
// import { Card } from "../../Components/";
import FlagMonetaryCountryUnit from "../../Components/FlagMonetaryCountryUnit";
import { connect } from "react-redux";

const CurrentMoney = ({ countryNames }) => {
  const [inputValue, setInputValue] = useState("");

  const [currentCountry, setCurrentCountry] = useState("");

  const _handleOnChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div className={`block_wrapper currentBlock`}>
      {countryNames.length > 0 ? (
        <>
          <div className="Card__title">
            <FlagMonetaryCountryUnit
              titleMonetary={`${countryNames[0]}`}
              countryCode={`${countryNames[0]}`.substring(0, 3)}
            />
          </div>
          <input
            type="number"
            onChange={_handleOnChange}
            className="Card__input"
            value={inputValue}
          />
          <div className="Card__show_value">
            {`${countryNames[0]}`.substring(0, 3)} {`${inputValue}`}
          </div>
        </>
      ) : null}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    countryNames: state.appReducers.countryNames,
  };
};
export default connect(mapStateToProps, null)(CurrentMoney);

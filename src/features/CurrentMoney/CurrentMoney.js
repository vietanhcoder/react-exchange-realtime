import React, { useState } from "react";
// import { Card } from "../../Components/";
import FlagMonetaryCountryUnit from "../../Components/FlagMonetaryCountryUnit";
import { connect } from "react-redux";
import { setInputValue } from "../../redux/actions";

const CurrentMoney = ({ countryNames, setInputValue }) => {
  // const [inputValue, setInputValue] = useState("");
  const [showInput, setShowInput] = useState("");
  // const [currentCountry, setCurrentCountry] = useState("");

  const _handleOnChange = (e) => {
    const { value } = e.target;
    console.log("OUTPUT: _handleOnChange -> e.target.value", value);
    setInputValue(value);
    setShowInput(value);
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
            value={showInput}
          />
          <div className="Card__show_value">
            {`${countryNames[0]}`.substring(0, 3)} {`${showInput}`}
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
const mapDispatchToProps = {
  setInputValue,
};
export default connect(mapStateToProps, mapDispatchToProps)(CurrentMoney);

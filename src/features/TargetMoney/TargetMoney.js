import React from "react";
import { Button } from "../../Components/";
import { connect } from "react-redux";
import FlagMonetaryCountryUnit from "../../Components/FlagMonetaryCountryUnit";

const TargetMoney = ({ countryNames, dataRates, inputOriginalValue }) => {
  const _handleOnClick = () => {
    console.log("OUTPUT: _handleOnClick -> _handleOnClick");
  };
  const _handleExchange = (countryCodeTarget) => {
    if (!dataRates[countryCodeTarget]) {
      return null;
    } else {
      return inputOriginalValue * dataRates[countryCodeTarget];
    }
  };

  // Get country code
  const countryCodeTarget =
    countryNames.length > 0 ? countryNames[1].substring(0, 3) : "";

  return (
    <>
      <div className={`block_wrapper targetBlock`}>
        {countryNames.length > 0 ? (
          <>
            <div className="Card__title">
              <Button
                btnType="switch_to_currentBlock"
                handleOnClick={_handleOnClick}
              />
              <FlagMonetaryCountryUnit
                titleMonetary={countryNames[1]}
                countryCode={countryCodeTarget}
              />
            </div>
            <div className="Card__show_value">
              {countryCodeTarget} {_handleExchange(countryCodeTarget)}
            </div>
          </>
        ) : null}
      </div>
    </>
  );
};
const mapStateToProps = (state) => {
  return {
    countryNames: state.appReducers.countryNames,
    dataRates: state.appReducers.dataRates,
    inputOriginalValue: state.appReducers.inputOriginalValue,
  };
};

export default connect(mapStateToProps, null)(TargetMoney);

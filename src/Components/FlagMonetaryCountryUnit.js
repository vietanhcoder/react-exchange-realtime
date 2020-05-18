import React, { useEffect } from "react";
import CurrencyFlag from "react-currency-flags";
import { connect } from "react-redux";

// import { fetchRates, fetchMonetary } from "../redux/actions";
const FlagMonetaryCountryUnit = ({ countryCode, titleMonentarh }) => {
  // useEffect(() => {
  //   fetchRates();
  //   fetchMonetary();
  // }, []);
  return (
    <div className="exchange_component_title">
      <CurrencyFlag currency={countryCode} size="sm" />
      <div className="monetary_code exchange_component_item">
        {titleMonentarh}
      </div>
    </div>
  );
};

// const mapStateToProps = (state) => {
//   // console.log("OUTPUT: mapStateToProps -> state", state);
//   return {
//     dataMonetary: state.appReducers.dataMonetary,
//   };
// };

// const mapDispatchToProps = {
//   fetchRates,
//   fetchMonetary,
// };

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(FlagMonetaryCountryUnit);
export default FlagMonetaryCountryUnit;

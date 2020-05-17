import React, { useEffect } from "react";
import ReactCountryFlag from "react-country-flag";
import { connect } from "react-redux";

// import { fetchRates, fetchMonetary } from "../redux/actions";
const FlagMonetaryCountryUnit = (props) => {
  // useEffect(() => {
  //   fetchRates();
  //   fetchMonetary();
  // }, []);

  return (
    <div className="exchange_component_title">
      <ReactCountryFlag
        className="emojiFlag exchange_component_item"
        countryCode={props.countryCode}
        style={{
          fontSize: "2em",
          lineHeight: "1em",
        }}
        aria-label="United States"
      />
      <div className="monetary_code exchange_component_item">
        {props.titleMonentarh}
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

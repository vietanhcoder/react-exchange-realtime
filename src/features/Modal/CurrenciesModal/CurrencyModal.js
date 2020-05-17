import React, { useEffect } from "react";
import { Modal } from "../../../Components/";
import FlagMonetaryCountryUnit from "../../../Components/FlagMonetaryCountryUnit";
import { connect } from "react-redux";
import { fetchRates, fetchMonetary } from "../../../redux/actions";
import { v4 as uuidv4 } from "uuid";

const CurrencyModal = ({
  fetchRates,
  fetchMonetary,
  dataMonetary,
  setSeletedCurrentModal,
}) => {
  // const [searchValue, setSearchValue] = useState("");
  const _handleOnChangeModalSearch = (e) => {
    const { value } = e.target;
    console.log("OUTPUT: _handleOnChangeModalSearch -> value", value);
    // setSearchValue(value);
  };
  const _handleCurrencyModal = () => {
    console.log("_handleCurrencyModal");
  };

  useEffect(() => {
    fetchRates();
    fetchMonetary();
  }, []);
  console.log(dataMonetary);
  return (
    <>
      <Modal titleModal="Currency Modal" classModal="currencyModal">
        <>
          <input
            type="text"
            className="currencyModal__search"
            placeholder="Search currencies"
            onChange={_handleOnChangeModalSearch}
          />
          <ul className="currencyModal__list">
            <li
              className={`currencyModal__item 
                  `}
              key={uuidv4()}
              onClick={_handleCurrencyModal}
            >
              <FlagMonetaryCountryUnit
                titleMonentarh="AED United Arab Emirates Dirham"
                countryCode="US"
              />
              {setSeletedCurrentModal && (
                <span className="selected_item">★</span>
              )}
              {setSeletedCurrentModal && (
                <span className="selected_item">★</span>
              )}
            </li>
            {/* {dataMonetary.length > 0 &&
              dataMonetary.map((item) => {
                return (
                  <li
                    className={`currencyModal__item 
                  `}
                    key={uuidv4()}
                    onClick={_handleCurrencyModal}
                  >
                    <FlagMonetaryCountryUnit 
                      titleMonentarh={item}
                    />
                    {setSeletedCurrentModal && (
                      <span className="selected_item">★</span>
                    )}
                  </li>
                );
              })} */}
          </ul>
        </>
      </Modal>
    </>
  );
};

const mapStateToProps = (state) => {
  console.log("OUTPUT: mapStateToProps -> state", state);
  return {
    // dataMonetary: state.appReducers.dataMonetary,
    setSeletedCurrentModal: state.appReducers.setSeletedCurrentModal,
    dataExchange: state.appReducers.dataExchange,
  };
};
const mapDispatchToProps = {
  fetchRates,
  fetchMonetary,
};

export default connect(mapStateToProps, mapDispatchToProps)(CurrencyModal);

import React, { useEffect } from "react";
import { Modal } from "../../../Components/";
import FlagMonetaryCountryUnit from "../../../Components/FlagMonetaryCountryUnit";
import { connect } from "react-redux";
import {
  fetchRates,
  fetchMonetary,
  setTitleBlock,
} from "../../../redux/actions";
import { v4 as uuidv4 } from "uuid";

const CurrencyModal = ({
  fetchRates,
  fetchMonetary,
  dataMonetary,
  setSeletedCurrentModal,
  setTitleBlock,
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
  const countryCodeArr = Object.keys(dataMonetary);
  const countryNameArr = [];
  countryCodeArr.map((code) =>
    countryNameArr.push(code + " " + dataMonetary[code])
  );
  setTitleBlock(countryNameArr);
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
            {countryNameArr.length > 0 ? (
              countryNameArr.map((country) => {
                return (
                  <li
                    className={`currencyModal__item 
                        `}
                    key={uuidv4()}
                    onClick={_handleCurrencyModal}
                  >
                    <FlagMonetaryCountryUnit
                      titleMonentarh={country}
                      countryCode={country.split(" ")[0]}
                    />
                    {setSeletedCurrentModal && (
                      <span className="selected_item">★</span>
                    )}
                  </li>
                );
              })
            ) : (
              <p>nothing to show</p>
            )}
          </ul>
        </>
      </Modal>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    dataMonetary: state.appReducers.dataMonetary,
    setSeletedCurrentModal: state.appReducers.setSeletedCurrentModal,
    dataExchange: state.appReducers.dataExchange,
  };
};
const mapDispatchToProps = {
  fetchRates,
  fetchMonetary,
  setTitleBlock,
};

export default connect(mapStateToProps, mapDispatchToProps)(CurrencyModal);

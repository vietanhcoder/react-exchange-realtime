import React, { useState } from "react";
import { Modal } from "../../../Components/";
import CurrencyodalItem from "../../../Components/CurrencyodalItem";

const CurrencyModal = () => {
  const [searchValue, setSearchValue] = useState("");
  const _handleOnChangeModalSearch = (e) => {
    const { value } = e.target;
    setSearchValue(value);
  };

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
            <CurrencyodalItem
              selected_item="selected_item"
              monetaryUnit="USD"
              countryName="USA"
            />
            <CurrencyodalItem monetaryUnit="USD" countryName="USA" />
          </ul>
        </>
      </Modal>
    </>
  );
};
export default CurrencyModal;

import React, { useState } from "react";
import { Modal } from "../../../Components/";

const CurrencyModal = () => {
  const [searchValue, setSearchValue] = useState("");
  const _handleOnChangeModalSearch = (e) => {
    const { value } = e.target;
    setSearchValue(value);
  };

  console.log("OUTPUT: CurrenciesModal -> searchValue", searchValue);
  return (
    <div>
      <Modal
        currencyModal="currencyModal"
        handleOnChangeModalSearch={_handleOnChangeModalSearch}
      />
    </div>
  );
};
export default CurrencyModal;

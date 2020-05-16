import React from "react";
import CurrencyodalItem from "./CurrencyodalItem";
import { Link, Router } from "react-router-dom";
import { Button } from "./Button";
import "./styles.scss";
export const Modal = (props) => {
  const _handleCancel = () => {
    console.log("_handleCancel");
  };
  const _handleSave = () => {
    console.log("_handleSave");
  };
  const _handleCloseModal = () => {
    console.log("_handleCloseModal");
  };
  return (
    <div className="modal-overlay">
      <div className="modal-wrapper">
        <div
          className={`${props.currencyModal || ""} ${props.settingModal || ""}`}
        >
          {props.currencyModal ? <h1>Select Currencies</h1> : <h1>Setting</h1>}
          <span className="isClose" onClick={_handleCloseModal}>
            x
          </span>
          {props.currencyModal ? (
            <>
              <input
                type="text"
                className="currencyModal__search"
                placeholder="Search currencies"
                onChange={props.handleOnChangeModalSearch}
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
          ) : null}

          {props.settingModal ? (
            <>
              <label htmlFor="settingModal__source_api">Source</label>
              <select id="settingModal__source_api" name="source_api">
                <option value="exchangeRateApi">
                  ExchangeRate-API (free - no key)
                </option>
                <option value="fromECB">
                  Rates from European Central Bank (free - no key)
                </option>
                <option value="openExchangeRates">
                  Open Exchange Rates (free - key required)
                </option>
              </select>
              <a
                href="https://www.exchangerate-api.com/docs/free-exchange-rate-api"
                className="settingModal__link"
              >
                Learn more about this source.
              </a>
              <br />
              <br />
              <br />
              <div className="settingModal__btn__wrapper">
                <Button
                  btnType="btn settingModal__btn"
                  handleOnClick={_handleCancel}
                  btnName="Cancel"
                />{" "}
                |
                <Button
                  btnType="btn settingModal__btn"
                  handleOnClick={_handleSave}
                  btnName="Save"
                />
              </div>
            </>
          ) : null}
        </div>
      </div>
    </div>
  );
};

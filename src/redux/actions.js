// import { v4 as uuidv4 } from "uuid";
import { API_URL } from "../server/";
import axios from "axios";
import {
  FECTH_RATES_START,
  FETCH_RATES_SUCCESS,
  FETCH_RATES_FAILURE,
  FECTH_MONETARY_START,
  FETCH_MONETARY_SUCCESS,
  SET_TITLE_BLOCK,
  FETCH_MONETARY_FAILURE,
} from "./types";

export const fetchRates = () => async (dispatch) => {
  dispatch({
    type: FECTH_RATES_START,
  });

  try {
    const res = await axios.get(API_URL.EXCHANGE_RATES);
    const rates = res.data.rates;
    dispatch({
      type: FETCH_RATES_SUCCESS,
      payload: { rates },
    });
  } catch (err) {
    dispatch({
      type: FETCH_RATES_FAILURE,
    });
  }
};

export const fetchMonetary = () => async (dispatch) => {
  dispatch({ type: FECTH_MONETARY_START });
  try {
    const res = await axios.get(API_URL.COUNTRY_MONETARY);
    const data = res.data;
    dispatch({
      type: FETCH_MONETARY_SUCCESS,
      payload: { data },
    });
  } catch (err) {
    dispatch({
      type: FETCH_MONETARY_FAILURE,
    });
  }
};

export const setTitleBlock = (payload) => ({
  type: SET_TITLE_BLOCK,
  payload,
});

import {
  FECTH_RATES_START,
  FETCH_RATES_SUCCESS,
  // FETCH_RATES_FAILURE,
  FECTH_MONETARY_START,
  FETCH_MONETARY_SUCCESS,
  // FETCH_MONETARY_FAILURE,
  SET_ORIGINAL_VALUE,
  TOGGLE_FAVOURITE_MONETARY,
} from "./types";
const initialState = {
  loading: false,
  error: false,
  countryNames: [],
  setFavouriteMonetary: [],
  dataMonetary: [],
  dataRates: {},
  countryCodeArr: [],
  inputOriginalValue: "",

const reducers = (state = initialState, action) => {
  switch (action.type) {
    case FECTH_RATES_START: {
      return {
        ...state,
        loading: true,
      };
    }

    case FETCH_RATES_SUCCESS: {
      const { rates } = action.payload;
      const countryCodeArr = Object.keys(rates);

      return {
        ...state,
        loading: false,
        countryCodeArr: countryCodeArr,
        dataRates: rates,
      };
    }
    case FECTH_MONETARY_START: {
      return {
        ...state,
        loading: true,
      };
    }

    case FETCH_MONETARY_SUCCESS: {
      const data = action.payload.data;

      const countryNameArr = [];

      state.countryCodeArr.map((code) =>
        countryNameArr.push(code + " " + data[code])
      );

      return {
        ...state,
        dataMonetary: data,
        countryNames: countryNameArr,
        loading: false,
      };
    }
    case SET_ORIGINAL_VALUE: {
      return {
        ...state,
        inputOriginalValue: action.payload,
      };
    }
    case TOGGLE_FAVOURITE_MONETARY: {
      const newArr = [...state.setFavouriteMonetary];
      const checkCountryCode = state.setFavouriteMonetary.indexOf(
        action.payload
      );
      if (checkCountryCode !== -1) {
        newArr.splice(checkCountryCode, 1);
      } else {
        newArr.push(action.payload);
      }
      console.log("OUTPUT: reducers -> newArr", newArr);

      return {
        ...state,
        setFavouriteMonetary: [...newArr],
      };
    }

    default:
      return state;
  }
};
export default reducers;

//indexOf + filter

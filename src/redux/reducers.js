import {
  FECTH_RATES_START,
  FETCH_RATES_SUCCESS,
  // FETCH_RATES_FAILURE,
  FECTH_MONETARY_START,
  FETCH_MONETARY_SUCCESS,
  // FETCH_MONETARY_FAILURE,
} from "./types";
const initialState = {
  loading: false,
  error: false,
  dataExchange: [
    {
      countryName: "",
      rates: "",
      monetaryUnit: "",
      countryCode: "",
    },
  ],
  countryName: "",
  dataRate: {},
  dataMonetary: [],
  setSeletedCurrentModal: false,
};

const reducers = (state = initialState, action) => {
  switch (action.type) {
    case FECTH_RATES_START: {
      return {
        ...state,
        loading: true,
      };
    }

    case FETCH_RATES_SUCCESS: {
      return {
        ...state,
        loading: false,
        dataRate: action.payload.rates,
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
      console.log("OUTPUT: reducers -> data", data);

      return {
        ...state,
        // dataMonetary: newObj,
        loading: false,
      };
    }

    default:
      return state;
  }
};
export default reducers;

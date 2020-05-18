import {
  FECTH_RATES_START,
  FETCH_RATES_SUCCESS,
  // FETCH_RATES_FAILURE,
  FECTH_MONETARY_START,
  FETCH_MONETARY_SUCCESS,
  SET_TITLE_BLOCK,
  // FETCH_MONETARY_FAILURE,
} from "./types";
const initialState = {
  loading: false,
  error: false,
  countryNames: [],
  setSeletedCurrentModal: false,
  dataMonetary: [],
  dataRate: {},

  // dataExchange: [
  //   {
  //     countryName: "",
  //     rates: "",
  //     monetaryUnit: "",
  //     countryCode: "",
  //   },
  // ],
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

      return {
        ...state,
        dataMonetary: data,
        loading: false,
      };
    }
    case SET_TITLE_BLOCK: {
      return {
        ...state,
        countryNames: [...action.payload, action.payload],
      };
    }
    default:
      return state;
  }
};
export default reducers;

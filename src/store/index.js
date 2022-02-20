import { createStore } from 'redux';
import { LOAD_CITY, REMOVE_CITY, UPDATE_INFO } from './actions';

import {
  saveToLocalStorage,
  loadFromLocalStorage,
} from './localStorageFunctions';

const changeInfo = (cities, newCity) => (
  cities.map((city) => {
    if (city.name === newCity.name) {
      return newCity;
    }

    return city;
  })
);

const initialState = {
  cities: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_CITY:
      return {
        ...state,
        cities: [...state.cities, action.payload],
      };
    case REMOVE_CITY:
      return {
        ...state,
        cities: state.cities.filter(city => city.name !== action.payload),
      };

    case UPDATE_INFO:
      return {
        ...state,
        cities: changeInfo(state.cities, action.payload),
      };

    default:
      return state;
  }
};

export const store = createStore(reducer, loadFromLocalStorage());

store.subscribe(() => saveToLocalStorage(store.getState()));

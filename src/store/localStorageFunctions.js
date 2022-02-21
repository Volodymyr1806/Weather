import { getWeatherOfCity } from '../api/api';

export function saveToLocalStorage(state) {
  try {
    const serialisedState = JSON.stringify(state);

    localStorage.setItem('persistantState', serialisedState);
  } catch (e) {
    throw new Error('упс');
  }
}

export function loadFromLocalStorage() {
  try {
    const serialisedState = localStorage.getItem('persistantState');

    if (serialisedState === null) {
      return {
        cities: [],
      };
    }

    const savedState = JSON.parse(serialisedState);

    savedState.cities.map(async(city) => {
      const cityItem = await getWeatherOfCity(city.name);

      return cityItem;
    });

    return savedState;
  } catch (e) {
    return {
      cities: [],
    };
  }
}

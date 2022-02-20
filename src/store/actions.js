export const LOAD_CITY = 'LOAD_CITY';
export const REMOVE_CITY = 'REMOVE_CITY';
export const UPDATE_INFO = 'UPDATE_INFO';

export const addCityAction = payload => ({
  type: LOAD_CITY,
  payload,
});

export const removeCityAction = payload => ({
  type: REMOVE_CITY,
  payload,
});

export const updateInfoAction = payload => ({
  type: UPDATE_INFO,
  payload,
});

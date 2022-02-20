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

    return JSON.parse(serialisedState);
  } catch (e) {
    return {
      cities: [],
    };
  }
}

import React, { useState } from 'react';
import classNames from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import { getCitiesSelector } from '../../store/selectors';
import { addCityAction } from '../../store/actions';

import { getWeatherOfCity } from '../../api/api';
import './FormOfSearch.scss';

export const FormOfSearch = () => {
  const [query, setQuery] = useState('');
  const [cityFound, setCityFound] = useState(true);
  const [cityAdded, setCityAdded] = useState(false);

  const dispatch = useDispatch();
  const citiesWithWeather = useSelector(getCitiesSelector);

  const handleInput = (event) => {
    const { value } = event.target;

    setQuery(value);
  };

  const handleSubmit = async(event) => {
    event.preventDefault();

    const weatherOfCity = await getWeatherOfCity(query);

    const isCityAbsent = citiesWithWeather
      .every(city => city.name !== weatherOfCity.name);

    if (weatherOfCity.cod === 200) {
      if (isCityAbsent) {
        dispatch(addCityAction(weatherOfCity));
        setCityFound(true);
        setCityAdded(false);

        return setQuery('');
      }

      setCityFound(true);

      return setCityAdded(true);
    }

    setCityFound(false);

    return setCityAdded(false);
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        type="text"
        className="input is-success form__input"
        value={query}
        onChange={handleInput}
        placeholder="Enter the city"
        required
      />
      <button
        type="submit"
        className="button is-success form__button"
      >
        Search
      </button>

      <div className={classNames({
        form__error_hidden: cityFound || !cityAdded,
        form__error_visible: !cityFound || cityAdded,
      })}
      >
        {cityAdded
          ? 'City was already added'
          : 'City is not found'}
      </div>
    </form>
  );
};

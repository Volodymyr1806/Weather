import React from 'react';
import { useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { getCitiesSelector } from '../../store/selectors';
import { ShortInfoOfCityWeatherCard } from '../ShortInfoOfCityWeatherCard';
import './ListOfCities.scss';
import '../../App.scss';

export const ListOfCities = () => {
  const citiesWithWeather = useSelector(getCitiesSelector);

  return (
    <ul className="cities App__cities">
      {citiesWithWeather.map(city => (
        <li key={uuidv4()} className="container__card">
          <ShortInfoOfCityWeatherCard city={city} />
        </li>
      ))}
    </ul>
  );
};

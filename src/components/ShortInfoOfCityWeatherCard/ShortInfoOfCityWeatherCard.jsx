import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import sun from '../../images/sun.png';
import cload from '../../images/cload.png';
import './ShortInfoOfCityWeatherCard.scss';
import { removeCityAction, updateInfoAction } from '../../store/actions';
import { getWeatherOfCity } from '../../api/api';

export const ShortInfoOfCityWeatherCard = ({ city }) => {
  const { name, main, weather } = city;
  const dispatch = useDispatch();

  const removeCard = () => {
    dispatch(removeCityAction(name));
  };

  const updateCard = async() => {
    const cityForUpdate = await getWeatherOfCity(name);

    dispatch(updateInfoAction(cityForUpdate));
  };

  const temperature = Math.round(main.temp - 273.3);

  const img = weather[0].main === 'Clear'
    ? sun
    : cload;

  return (
    <section className="card">
      <div className="card__buttons">
        <button
          type="button"
          className="button is-rounded is-small"
          onClick={updateCard}
        >
          ↺
        </button>

        <button
          type="button"
          className="delete"
          onClick={removeCard}
        >
          X
        </button>
      </div>
      <Link to={`/${name}`} className="Link">
        <div className="card__info">
          <h2 className="title">{name}</h2>

          <div className="card__containerOfImage">
            <img
              src={img}
              alt="Sun/cload"
              className="card__image"
            />
          </div>

          <div className="description">
            {weather[0].description}
          </div>

          <div>{`${temperature}℃`}</div>
        </div>
      </Link>

    </section>
  );
};

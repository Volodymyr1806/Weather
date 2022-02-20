import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { getCitiesSelector } from '../../store/selectors';

import './DetailesOfCityWeather.scss';

import sun from '../../images/sun.png';
import cload from '../../images/cload.png';

export const DetailesOfCityWeather = ({ match }) => {
  const citiesWithWeather = useSelector(getCitiesSelector);
  const { city } = match.params;

  // eslint-disable-next-line no-console
  console.log(match);
  const cityWithDetailesOfWeather = citiesWithWeather
    .find(cityItem => cityItem.name === city);

  const { name, main, wind, weather } = cityWithDetailesOfWeather;
  const currentTime = new Date().toLocaleDateString();

  const img = weather[0].main === 'Clear'
    ? sun
    : cload;

  const convertTemp = temp => Math.round(temp - 273);

  return (
    <section className="detailes">
      {cityWithDetailesOfWeather && (
        <>
          <h1 className="detailes__title title">{name}</h1>
          <div className="detailes__time">{currentTime}</div>

          <article className="detailes__properties">
            <div className="detailes__properties_info">
              <div className="detailes__properties_property">
                <span className="detailes__properties_property_characteristic">
                  Temperature
                </span>
                <span>{`${convertTemp(main.temp)}℃`}</span>
              </div>

              <div className="detailes__properties_property">
                <span className="detailes__properties_property_characteristic">
                  Max temperature
                </span>
                <span>{`${convertTemp(main.temp_max)}℃`}</span>
              </div>

              <div className="detailes__properties_property">
                <span className="detailes__properties_property_characteristic">
                  Min temperature
                </span>
                <span>{`${convertTemp(main.temp_min)}℃`}</span>
              </div>

              <div className="detailes__properties_property">
                <span className="detailes__properties_property_characteristic">
                  Humidity
                </span>
                <span>{`${main.humidity}%`}</span>
              </div>

              <div className="detailes__properties_property">
                <span className="detailes__properties_property_characteristic">
                  Wind
                </span>
                <span>{`${wind.speed}m/s`}</span>
              </div>

              <div className="detailes__properties_property">
                <span className="detailes__properties_property_characteristic">
                  Pressure
                </span>
                <span>{`${main.pressure} mm Hg`}</span>
              </div>
            </div>

            <div className="detailes__properties_image">
              <img src={img} alt="sun/cload" />
            </div>
          </article>
        </>
      )}
    </section>
  );
};

// eslint-disable-next-line react/no-typos
DetailesOfCityWeather.PropTypes = {
  match: PropTypes.object,
};

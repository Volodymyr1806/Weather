const BASE_URL = 'https://api.openweathermap.org';

const API_KEY = '3d63f62adbcdf2c9f03970dbcbc8bb37';

export const getWeatherOfCity = async(name) => {
  try {
    const response = await fetch(
      `${BASE_URL}/data/2.5/weather?q=${name}&appid=${API_KEY}`,
    );

    return response.json();
  } catch (e) {
    return e;
  }
};

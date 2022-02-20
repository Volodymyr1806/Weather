import React from 'react';
import './App.scss';
import { Route, Switch } from 'react-router-dom';
import { FormOfSearch } from './components/FormOfSearch';
import { ListOfCities } from './components/ListOfCities';
import { DetailesOfCityWeather } from './components/DetailesOfCityWeather';

export const App = () => (
  <div className="App">
    <Switch>
      <Route path="/" exact>
        <section className="App__home">
          <h1 className="App__home_title title">
            Check the weather in your city
          </h1>
          <FormOfSearch />
          <div className="App__home_cities">
            <ListOfCities />
          </div>
        </section>

      </Route>
      <Route path="/:city" component={DetailesOfCityWeather} />

      <p>Not found page</p>
    </Switch>
  </div>
);

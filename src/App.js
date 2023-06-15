import React, { createContext } from "react";
import { CardWeather } from "./components/CardWeather";
import { Routes, Route, Link } from "react-router-dom";
import "./WeatherApp.scss";
import Input from "./components/Input/Input";
import { useCities } from "./hooks/useCities";
import SingleCity from "./components/SingleCity/SingleCity";

export const GlobalContext = createContext();

const WeatherApp = () => {
  const [state, dispatch] = useCities();
  const { cities } = state;

  return (
    <GlobalContext.Provider value={{ state, dispatch }}>
      <div className="weatherBody">
        <Link to="/">Main</Link>
        <h1>Weather App</h1>
        <Input />
        <Routes>
          <Route
            path="/"
            element={
              <div className="cardList">
                {cities.map((city) => (
                  <CardWeather key={city} city={city} />
                ))}
              </div>
            }
          />
          <Route path="/city" element={SingleCity} ></Route>
        </Routes>
      </div>
    </GlobalContext.Provider>
  );
};

export default WeatherApp;

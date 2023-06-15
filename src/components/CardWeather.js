import React, { useContext } from "react";
import { useCardWeather } from "../hooks/useCardWeather";
import { Link } from "react-router-dom";
import Icon from "./Icon"
import { GlobalContext } from "../App";
import "../WeatherApp.scss";


export const CardWeather = ({ city }) => {
  const weatherData = useCardWeather(city)
  const {dispatch} = useContext(GlobalContext)
const handleOnDelete = () => {
  dispatch({
    type: 'DELETE_CITY',
    payload: city,
  })
}
const handleOnEdit = () => {
  dispatch({
    type: 'EDIT_CITY',
    payload: city,
  })
}

  if(!weatherData){
    return <div>Loading...</div>
  }

  const {weather, main, name} = weatherData;
  const {description} = weather[0];
  const {temp, feels_like, humidity, pressure} = main;

  return (
    <Link to={`/city/${city}`} className="weather-card">
    <div className="button">
    <button className="buttonDelete" onClick={handleOnEdit}>Edit</button>
      <button className="buttonDelete" onClick={handleOnDelete}>X</button>
    </div>
      <div className="card-header">
        <div className="weather-info">
        
        <Icon className="icon"/>
          <p className="weather-city">{name}</p>
          <p className="weather-description">{description}</p>
        </div>
      </div>
      <div className="card-body">
        <h2 className="weather-temp">{temp.toFixed()}</h2>
      </div>
      <div className="weather-details">
        <div className="parameters">
          <span className="param-label">Details</span>
        </div>
        <div className="parameters">
          <span className="param-label">Feels Like:</span>
          <span className="param-val">{feels_like.toFixed(1)}</span>
        </div>
        <div className="parameters">
          <span className="param-label">Humidity: </span>
          <span className="param-val"> {humidity}%</span>
        </div>
        <div className="parameters">
          <span className="param-label">Pressure: </span>
          <span className="param-val">{pressure} hPs</span>
        </div>
      </div>
    </Link>
  );
};

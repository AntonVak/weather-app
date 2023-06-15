import { useEffect, useState } from "react";
import { fetchWeather } from "../api/api";

export const useCardWeather = (city) => {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    const fetchWeatherData  = async () => {
      const data = await fetchWeather(city);
      
      setWeatherData(data);
    }
    fetchWeatherData()
  }, [city]);
  return weatherData
};

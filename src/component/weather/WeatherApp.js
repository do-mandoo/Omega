import axios from 'axios';
import React, { useState } from 'react';
import { useEffect } from 'react';

const WeatherApp = () => {
  const weatherApiKey = '026ab543b433f9fb5be49ecf54e39b91';
  const [weatherData, setWeatherData] = useState(null);
  // const [cityName, setCityName] = useState('Seoul');
  const cityName = 'Korea';

  useEffect(() => {
    const getWeather = async e => {
      try {
        const res = await axios.get(
          `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${weatherApiKey}`,
        );
        setWeatherData(res.data);
        console.log(res.data, 'res날씨');
      } catch (error) {
        console.log(error, '날씨데이터 가져오기 에러');
      }
    };
    getWeather();
  }, []);

  const imgSrc = `http://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;

  if (!weatherData) {
    return null;
  }
  return (
    <div>
      {weatherData.name}의 날씨
      <div>
        <img src={imgSrc} alt="Weather icon" />
      </div>
    </div>
  );
};

export default WeatherApp;

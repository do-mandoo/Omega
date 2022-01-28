import axios from 'axios';
import React, { useState } from 'react';
import { useEffect } from 'react';
import styled from 'styled-components';

const WeatherWrap = styled.div`
  margin-left: 10px;
  background-color: #ccc;
  p,
  img {
    margin: 0;
    padding: 0;
  }
`;

const WeatherApp = () => {
  const weatherApiKey = '026ab543b433f9fb5be49ecf54e39b91';
  const [weatherData, setWeatherData] = useState('');
  const [loading, setLoading] = useState(false);
  // const [cityName, setCityName] = useState('Seoul');
  const cityName = 'seoul';

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
      setLoading(false);
    };
    getWeather();
  }, []);

  // const imgSrc = `http://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;

  if (loading) {
    return <div>대기 중...</div>;
  }
  if (!weatherData) {
    return null;
  }
  return (
    <>
      {weatherData && (
        <WeatherWrap>
          <div>{weatherData.name}날씨</div>
          <p>
            <img
              src={`http://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`}
              alt="Weather icon"
            />
          </p>
          <div>{weatherData.weather[0].main}</div>
        </WeatherWrap>
      )}
    </>
  );
};

export default WeatherApp;

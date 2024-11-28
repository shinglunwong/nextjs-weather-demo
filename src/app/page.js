"use client";

import { useState } from "react";
import SearchInput from "../components/SearchInput";
import WeatherCard from "../components/WeatherCard";
import { fetchWeather } from "../utils/fetchWeather";

export default function Home() {
  const [city, setCity] = useState("hong kong");
  const [weatherData, setWeatherData] = useState(null);

  const handleSearch = async () => {
    const data = await fetchWeather(city);
    setWeatherData(data);
  };

  return (
    <>
      <h1>What’s the Weather Like?</h1>
      <p>Enter/Select a city to get the current weather information.</p>
      <div>
        <SearchInput
          city={city}
          setCity={setCity}
          onSearch={handleSearch}
        />
        <WeatherCard title="Feels Like" value={weatherData?.main?.feels_like} unit="°C" />
      </div>
    </>
  );
}
"use client";

import { useState } from "react";
import SearchInput from "@/components/SearchInput";
import WeatherCard from "@/components/WeatherCard";
import { fetchWeather } from "@/utils/fetchWeather";
import { formatTime } from "@/utils/formatTime";
import styles from "@/styles/page.module.css";

export default function Home() {
  const [city, setCity] = useState("hong kong");
  const [weatherData, setWeatherData] = useState(null);

  const handleSearch = async () => {
    const data = await fetchWeather(city);
    setWeatherData(data);
  };

  const iconCode = weatherData?.weather[0]?.icon;
  const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;

  return (
    <>
      <h1 className={styles.title}>What’s the Weather Like?</h1>
      <p className={styles.subtitle}>Enter/Select a city to get the current weather information.</p>
      <div>
        <SearchInput
          city={city}
          setCity={setCity}
          onSearch={handleSearch}
        />
        <div className={styles.displayContainer}>
          <h3 className={styles.city}>{weatherData?.name}</h3>
          <img src={iconUrl} alt={weatherData?.weather[0]?.description} className={styles.icon} />
          <h1 className={styles.temperature}>{weatherData?.main?.temp}°C</h1>
          <p className={styles.description}>
            {weatherData?.weather?.[0]?.main} - {weatherData?.weather?.[0]?.description}
          </p>
          <p className={styles.highLow}>
            H: {weatherData?.main?.temp_max}°C L: {weatherData?.main?.temp_min}°C
          </p>
        </div>
        <div className={styles.cardsContainer}>
          <WeatherCard title="Feels Like" value={weatherData?.main?.feels_like} unit="°C" />
          <WeatherCard title="humidity" value={weatherData?.main?.humidity} unit="%" />
          <WeatherCard title="Wind Speed" value={weatherData?.wind?.speed} unit="m/s" />
          <WeatherCard title="Wind Degree" value={weatherData?.wind?.deg} unit="°" />
          <WeatherCard title="Sunrise" value={formatTime(weatherData?.sys?.sunrise)} />
          <WeatherCard title="Sunset" value={formatTime(weatherData?.sys?.sunset)} />
        </div>
      </div>
    </>
  );
}
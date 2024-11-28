"use client";

import { useState } from "react";
import SearchInput from "@/components/SearchInput";
import WeatherCard from "@/components/WeatherCard";
import Skeleton from "@/components/Skeleton";
import { fetchWeather } from "@/utils/fetchWeather";
import { formatTime } from "@/utils/formatTime";
import styles from "@/styles/page.module.css";

export default function Home() {
  // States
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Event Handlers
  const handleSearch = async () => {
    setLoading(true);
    setError("");
    setWeatherData(null);

    try {
      const data = await fetchWeather(city);
      setWeatherData(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <h2 className={styles.title}>What’s the Weather Like?</h2>
      <p className={styles.subtitle}>Enter a city to get the current weather information.</p>
      <div>
        <SearchInput
          city={city}
          setCity={setCity}
          onSearch={handleSearch}
        />

        {/* Loading State */}
        {loading && <Skeleton aria-hidden="true" />}

        {/* Error Message */}
        {error && <p className={styles.error} role="alert">{error}</p>}

        {/* Weather Report */}
        {!loading && !error && weatherData && (
          <>
            <section className={styles.displayContainer} aria-label="Weather Report">
              <h3 className={styles.city}>{weatherData.cityName}</h3>
              <img
                src={weatherData.iconUrl}
                alt={weatherData.weatherDescription || "Weather icon"}
                className={styles.icon}
              />
              <h1 className={styles.temperature}>{weatherData.temp}°C</h1>
              <p className={styles.description}>
                {weatherData.weatherMain} - {weatherData.weatherDescription}
              </p>
              <p className={styles.highLow}>
                H: {weatherData.tempMax}°C L: {weatherData.tempMin}°C
              </p>
            </section>
            <div className={styles.cardsContainer}>
              <WeatherCard title="Feels Like" value={weatherData.feelsLike} unit="°C" />
              <WeatherCard title="Humidity" value={weatherData.humidity} unit="%" />
              <WeatherCard title="Wind Speed" value={weatherData.windSpeed} unit="m/s" />
              <WeatherCard title="Wind Degree" value={weatherData.windDegree} unit="°" />
              <WeatherCard title="Sunrise" value={formatTime(weatherData.sunrise)} />
              <WeatherCard title="Sunset" value={formatTime(weatherData.sunset)} />
            </div>
          </>
        )}
      </div>
    </>
  );
}
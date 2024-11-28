import axios from "axios";

export async function fetchWeather(city) {
    if (!city.trim()) {
        throw new Error("Please enter a city name.");
    }

    try {
        const API_KEY = process.env.NEXT_PUBLIC_OPEN_WEATHER_API_KEY;
        const response = await axios.get(
            `https://api.openweathermap.org/data/2.5/weather`,
            {
                params: {
                    q: city,
                    appid: API_KEY,
                    units: "metric",
                },
            }
        );

        if (!response || !response.data) {
            throw new Error("Invalid data received from API.");
        }

        return normalizeWeatherData(response.data);
    } catch (err) {
        throw new Error(err.response?.data?.message || "Something went wrong.");
    }
}
export function normalizeWeatherData(data) {
    const iconCode = data.weather?.[0]?.icon;

    return {
        cityName: data.name,
        temp: data.main?.temp,
        feelsLike: data.main?.feels_like,
        tempMax: data.main?.temp_max,
        tempMin: data.main?.temp_min,
        humidity: data.main?.humidity,
        weatherMain: data.weather?.[0]?.main,
        weatherDescription: data.weather?.[0]?.description,
        windSpeed: data.wind?.speed,
        windDegree: data.wind?.deg,
        sunrise: data.sys?.sunrise,
        sunset: data.sys?.sunset,
        iconUrl: `https://openweathermap.org/img/wn/${iconCode || ""}@2x.png`,
    }
}
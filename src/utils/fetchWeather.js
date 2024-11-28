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

        return response.data;
    } catch (err) {
        throw new Error(err.response?.data?.message || "Something went wrong.");
    }
}
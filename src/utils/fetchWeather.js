import axios from "axios";

export async function fetchWeather(city) {
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

        return response.data;
    } catch (err) {
        console.log(err);
    }
}

// tbd: trim, error handling, loading 
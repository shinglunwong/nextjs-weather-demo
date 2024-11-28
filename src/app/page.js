import SearchInput from '../components/SearchInput';
import WeatherCard from '../components/WeatherCard';

export default function Home() {
  return (
    <>
      <h1>Next.js Weather App 🌦️</h1>
      <p>Enter/Select a city to get the current weather information.</p>
      <div>
        <SearchInput />
        <WeatherCard />
      </div>
    </>
  );
}
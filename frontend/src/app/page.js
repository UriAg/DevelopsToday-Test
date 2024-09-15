import axios from "axios";
import CountriesList from "./components/CountriesList";

export default async function Home() {
  const countries = await axios.get(
    process.env.NEXT_PUBLIC_AVAILABLE_COUNTRIES_URL
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-400 to-purple-600 flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-lg w-full min-h-screen my-5 overflow-hidden">
        <CountriesList countries={countries.data.countries} />
      </div>
    </div>
  );
}

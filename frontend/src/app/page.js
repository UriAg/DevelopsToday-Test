"use client";
import axios from "axios";
import { useMemo, useState } from "react";
import ListControllers from "./components/ListControllers";
import CountriesList from "./components/CountriesList";
import Loading from "./components/Loading";

export default function Home() {
  const [countries, setCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [maxPage, setMaxPage] = useState(1);

  useMemo(() => {
    axios.get(process.env.NEXT_PUBLIC_AVAILABLE_COUNTRIES_URL).then((res) => {
      setCountries(res.data.countries);

      const pagesNumber = Math.ceil(res.data.countries.length / 10);

      setPage(1);
      setMaxPage(pagesNumber);
      setIsLoading(false);
    });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-400 to-purple-600 flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-lg w-full min-h-screen my-5 overflow-hidden">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Country list
        </h1>
        {isLoading ? (
          <Loading />
        ) : (
          <CountriesList countries={countries} page={page} />
        )}
        {!isLoading && (
          <ListControllers page={page} setPage={setPage} maxPage={maxPage} />
        )}
      </div>
    </div>
  );
}

"use client";
import axios from "axios";
import Link from "next/link";
import { useMemo, useState } from "react";

export default function Home() {
  const [countries, setCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [maxPage, setMaxPage] = useState(1);

  useMemo(() => {
    axios
      .get(process.env.NEXT_PUBLIC_AVAILABLE_COUNTRIES_URL)
      .then((res) => {
        setCountries(res.data.countries)
      
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
          <div className="w-full text-center">
            <span className="w-full">Loading...</span>
          </div>
        ) : (
          <ul className="space-y-4">
            {countries
              .slice(page * 10 - 10, page * 10)
              .map((country, index) => (
                <li
                  key={index}
                  className="bg-gradient-to-r from-pink-500 to-yellow-500 rounded-lg shadow-md text-white text-center font-semibold transform transition duration-300 hover:scale-105"
                >
                  <Link href={`/country/info/${country.countryCode}`} className="inline-block w-full p-4">
                    {country.name}
                  </Link>
                </li>
              ))}
          </ul>
        )}
        {
          !isLoading &&
          <div className="w-full flex justify-between items-center pt-6">
          {page > 1 ? (
            <button
              type="button"
              onClick={() => setPage(page - 1)}
              className="w-1/3 text-xl flex justify-start items-center"
            >
              <span
                className="icon-[grommet-icons--previous] min-w-4 min-h-4"
                role="img"
                aria-hidden="true"
              />
              Página anterior
            </button>
          ) : (
            <div className="w-1/3"></div>
          )}
          <span className="text-xl w-1/3 text-center">{page}</span>
          {page < maxPage ? (
            <button
              type="button"
              onClick={() => setPage(page + 1)}
              className="w-1/3 text-xl flex justify-end items-center"
            >
              Página siguiente
              <span
                className="icon-[grommet-icons--next] min-w-4 min-h-4"
                role="img"
                aria-hidden="true"
              />
            </button>
          ) : (
            <div className="w-1/3"></div>
          )}
        </div>
        }
      </div>
    </div>
  );
}

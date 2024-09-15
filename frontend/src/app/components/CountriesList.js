"use client";
import Link from "next/link";
import ListControllers from "./ListControllers";
import { useState } from "react";

//Renders a list of countries with a limit of ten countries per page
const CountriesList = ({ countries }) => {
  const [page, setPage] = useState(1);
  const maxPage = Math.ceil(countries.length / 10);
  console.log(countries)
  return (
    <>
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
        Country list
      </h1>
      <ul className="space-y-4">
        {countries.slice(page * 10 - 10, page * 10).map((country, index) => (
          <li
            key={index}
            className="bg-gradient-to-r from-pink-500 to-yellow-500 rounded-lg shadow-md text-white text-center font-semibold transform transition duration-300 hover:scale-105"
          >
            <Link
              href={`/country/info/${country.countryCode}`}
              className="inline-block w-full p-4"
            >
              {country.name}
            </Link>
          </li>
        ))}
      </ul>
      <ListControllers page={page} setPage={setPage} maxPage={maxPage} />
    </>
  );
};

export default CountriesList;

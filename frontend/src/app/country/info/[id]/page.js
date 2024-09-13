"use client";
import CountryPopulationChart from "@/app/components/CountryPopulationChart";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";


export default function DetallesPais({ params }) {
  const { id } = params;
  const getCountryInfoUrl = process.env.NEXT_PUBLIC_COUNTRY_INFO_URL+id;
  const [countryInfo, setCountryInfo] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useMemo(() => {
    axios
      .get(getCountryInfoUrl)
      .then((res) => {
        setCountryInfo(res.data.info);
        setIsLoading(false);
      })
      .catch((error) => {
        setIsLoading(false);
        setCountryInfo({});
      });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-400 to-blue-600 flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-lg my-6 p-8 max-w-lg w-full">
        {isLoading ? (
          <div className="w-full text-center">
            <span className="inline-block w-full">Loading...</span>
          </div>
        ) : (
          Object.values(countryInfo).length <= 0 ? (
            <div className="text-center">País no encontrado</div>
          ) : (
            <>
            <div className="flex flex-col md:flex-row justify-center items-center mb-6 gap-6">
              <h1 className="text-4xl font-bold text-center text-gray-800 mb-4">
                {countryInfo.name}
              </h1>
              <Image src={countryInfo.flagUrl} priority width="150" height="150" alt="Country flag image"/>
            </div>

            <h2 className="text-2xl font-semibold text-gray-700 mb-3">
              Países limítrofes:
            </h2>
            <ul className="list-disc list-inside space-y-2 mb-4">
              {countryInfo.borders.map((borderCountry, index) => (
                <li key={index} className="text-gray-600">
                  <Link href={`/country/info/${borderCountry.countryCode}`} className="text-blue-600">{borderCountry.commonName}</Link>
                </li>
              ))}
            </ul>

            <div className="mb-6">
              <h3 className="text-xl font-semibold text-gray-700 mb-2">
                Population
              </h3>
              <div className="w-full flex justify-center items-center">
              <CountryPopulationChart populationData={countryInfo.populationCounts}/>
              </div>
            </div>
          </>
          )
        )}

        <Link
          href="/"
          className="mt-6 bg-blue-500 inline-block text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300"
        >
          Volver
        </Link>
      </div>
    </div>
  );
}

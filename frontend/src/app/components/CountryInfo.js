"use client";
import Link from "next/link";
import CountryPopulationChart from "./CountryPopulationChart";
import Image from "next/image";

const CountryInfo = ({ countryInfo = {}, errorMessage = "" }) => {
  return (
    <>
      {errorMessage ? (
        <div className="w-full text-center">
          <span className="inline-block">Country info was not found</span>
        </div>
      ) : (
        <>
          <div className="flex flex-col md:flex-row justify-center items-center mb-6 gap-6">
            <h1 className="text-4xl font-bold text-center text-gray-800 mb-4">
              {countryInfo.name}
            </h1>
            <Image
              src={countryInfo.flagUrl}
              priority
              className="max-w-[150px] max-h-[100px] h-auto"
              width="150"
              height="100"
              alt="Country flag image"
            />
          </div>

          <h2 className="text-2xl font-semibold text-gray-700 mb-3">
            Border countries:
          </h2>
          <ul className="list-disc list-inside space-y-2 mb-4">
            {countryInfo.borders.map((borderCountry, index) => (
              <li key={index} className="text-gray-600">
                <Link
                  href={`/country/info/${borderCountry.countryCode}`}
                  className="text-blue-600"
                >
                  {borderCountry.commonName}
                </Link>
              </li>
            ))}
          </ul>

          <div className="mb-6">
            <h3 className="text-xl font-semibold text-gray-700 mb-2">
              Population
            </h3>
            <div className="w-full flex justify-center items-center">
              <CountryPopulationChart
                populationData={countryInfo.populationCounts}
              />
            </div>
          </div>
        </>
      )}

      <Link
        href="/"
        className="mt-6 bg-blue-500 inline-block text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300"
      >
        Go back
      </Link>
    </>
  );
};

export default CountryInfo;

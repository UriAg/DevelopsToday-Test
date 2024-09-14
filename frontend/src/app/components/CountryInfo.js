import Link from "next/link";
import CountryPopulationChart from "./CountryPopulationChart";
import Image from "next/image";

const CountryInfo = ({ countryInfo }) => {
  return (
    <>
      <div className="flex flex-col md:flex-row justify-center items-center mb-6 gap-6">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-4">
          {countryInfo.name}
        </h1>
        <Image
          src={countryInfo.flagUrl}
          priority
          width="150"
          height="150"
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
        <h3 className="text-xl font-semibold text-gray-700 mb-2">Population</h3>
        <div className="w-full flex justify-center items-center">
          <CountryPopulationChart
            populationData={countryInfo.populationCounts}
          />
        </div>
      </div>
    </>
  );
};

export default CountryInfo;

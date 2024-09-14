import Link from "next/link";

//Renders a list of countries with a limit of ten countries per page
const CountriesList = ({ countries, page }) => {
  return (
    <>
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
    </>
  );
};

export default CountriesList;

"use client";
import CountryInfo from "@/app/components/CountryInfo";
import Loading from "@/app/components/Loading";
import axios from "axios";
import Link from "next/link";
import { useMemo, useState } from "react";

export default function DetallesPais({ params }) {
  const { id } = params;
  const getCountryInfoUrl = process.env.NEXT_PUBLIC_COUNTRY_INFO_URL + id;
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
          <Loading />
        ) : Object.values(countryInfo).length <= 0 ? (
          <div className="text-center">Country code "{id}" not found</div>
        ) : (
          <CountryInfo countryInfo={countryInfo} />
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

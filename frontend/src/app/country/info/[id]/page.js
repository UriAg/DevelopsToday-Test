import CountryInfo from "@/app/components/CountryInfo";
import axios from "axios";

export default async function CountryInfoContainer({ params }) {
  const { id } = params;
  let countryInfo;
  let errorMessage;
  try {
    countryInfo = await axios.get(
      process.env.NEXT_PUBLIC_COUNTRY_INFO_URL + id
    );
  } catch (error) {
    errorMessage = error.response.data.error;
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-400 to-blue-600 flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-lg my-6 p-8 max-w-lg w-full">
        <CountryInfo
          countryInfo={countryInfo?.data.info}
          errorMessage={errorMessage}
        />
      </div>
    </div>
  );
}

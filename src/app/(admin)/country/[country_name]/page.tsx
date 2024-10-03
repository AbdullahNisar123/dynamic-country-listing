import Link from "next/link";
// import { Icountry } from "../../countries/interface";
import  countries  from "../../countries/data";

function CountryName({ params }: { params: { country_name: string } }) {
  const country = countries.find(
    (c) => c.name.toLowerCase() === params.country_name.toLowerCase()
  );

  const capitalizeFirstLetter = (string: string) => {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
  };

  return (
    <div>
      {country ? (
        <>
          <h1 className="text-3xl p-5">{capitalizeFirstLetter(country.name)}</h1>
          <p className="text-2xl p-5">Capital: {country.capital}</p>
          <p className="text-2xl p-5">Population: {country.population}</p>
        </>
      ) : (
        <h1 className="flex flex-col items-center p-5 text-xl">Country not found!</h1>
      )}
      <div className="flex justify-center items-center">

      <Link href="/country">
            <button className="bg-slate-900 text-white py-2 px-4 rounded mt-24 hover:text-gray-200 active:bg-slate-800 transition-all duration-300 ease-in-out">Back to Countries</button>
          </Link>
      </div>
    </div>
  );
}

export default CountryName;

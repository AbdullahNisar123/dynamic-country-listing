import Link from "next/link";
import  countries  from "../countries/data";

export default function Country() {
  return (
    <div className="flex flex-col items-center">
      <h2 className="text-3xl p-8 ">List of Countries</h2>
      <ul className="space-y-4 ">
        {countries.map((country, index) => (
          <li key={index}>
            <Link href={`/country/${country.name.toLowerCase()}`}>
            <span className="text-xl w-48 h-10 bg-slate-900 rounded flex items-center justify-center hover:text-gray-200 active:bg-slate-800 transition-all duration-300 ease-in-out">{country.name}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

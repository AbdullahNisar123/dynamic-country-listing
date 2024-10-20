import Link from "next/link";
import "../../../Style/globals.css"
import NavBar from "@/components/NavBar";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
export default function countryname ({params}:{params:Params}){
    const countries : {
        name: string
        population: number
        capital: string
    }[]=[
        {name: "korea", population:51717590, capital:"Seoul"},
        {name: "japan", population:123998000, capital:"Tokyo"},
        {name: "India", population: 1380004385, capital: "New Delhi"},
        {name: "Pakistan", population: 225799153, capital: "Islamabad"},
        {name: "Turkey", population: 84339067, capital: "Ankara"},
    ];
    function findcountry (country_url:string){
        return countries.find(country => country.name.toLowerCase() == country_url.toLowerCase())
    };
   const result = findcountry(params.country_name)
    return(
        <div>
            {
                result? (
                    <>
                    <NavBar />
                    <h1 className="c-name">Country:{result.name}</h1>
                    <p className="c-text">Population:{result.population}</p>
                    <p className="c-text">Capital:{result.capital}</p>
                    <div className="btn-div">
                        <Link href="/country">Back to Countries</Link>
                    </div>
                    </>
                ):(
                    <h1>{params.country_name} Not Found</h1>
                )
            }
        </div>
        )
}
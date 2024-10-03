import Link from "next/link"

export default function Home(){
    return(
        <div>
            <p className="text-xl flex justify-center items-center p-7">Explore Some Countries with their capital and population.</p>
            <div className="flex justify-center items-center">
            <Link href="/country">
            <button className="bg-slate-900 text-white py-2 px-4 rounded mt-60 hover:text-gray-200 active:bg-slate-800 transition-all duration-300 ease-in-out">Explore countries</button>
            </Link>   
            </div>
        </div>
    )
}

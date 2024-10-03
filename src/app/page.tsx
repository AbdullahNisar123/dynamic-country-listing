import Link from "next/link"

export default function Home(){
    return(
        <div>
            <p className="text-xl flex justify-center items-center p-7">Check Out Some Countries and Their Capitals Along with Population Data.</p>
            <div className="flex justify-center items-center">
            <Link href="/country">
            <button className="bg-[#4b0093] text-white py-2 px-4 rounded mt-10 hover:text-gray-200 active:bg-slate-800 transition-all duration-300 ease-in-out">Explore countries</button>
            </Link>   
            </div>
        </div>
    )
}

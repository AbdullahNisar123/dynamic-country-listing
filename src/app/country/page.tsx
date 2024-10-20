import Link from "next/link";
import "../../Style/globals.css"
import NavBar from "@/components/NavBar";

export default function CountryList(){
    return(
        <>
        <NavBar />
        <div className="main-div">
            <h2>List of Countries</h2>
            <ul>
                <li>
                    <Link href="/country/pakistan"><span>Pakistan</span></Link>
                </li>
                <li>
                    <Link href="/country/japan"><span>Japan</span></Link>
                </li>
                <li>
                    <Link href="/country/india"><span>India</span></Link>
                </li>
                <li>
                    <Link href="/country/korea"><span>Korea</span></Link>
                </li>
                <li>
                    <Link href="/country/turkey"><span>Turkey</span></Link>
                </li>
            </ul>
        </div>
        </>
    )
}
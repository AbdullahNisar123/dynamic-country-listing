import Link from "next/link";
import "../Style/globals.css"
export default function NavBar(){
    return(
        <nav>
            <div className="container">
                <Link href="/">Home</Link>
                <Link href="/aboutus">About</Link>
                <Link href="/contactus">Contact</Link>
                <Link href="/country">Countries</Link>
            </div>
        </nav>
    )
}
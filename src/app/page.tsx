import NavBar from "@/components/NavBar";
import Link from "next/link";
import "../Style/globals.css"
export default function Home() {
  return (
    <div>
      <NavBar />
      <div>
      <p className="home-text">Explore Some Countries with their capital and population.</p>
      <div className="btn">
        <Link href="/country">Explore Countries</Link>
      </div>
      </div>
    </div>
  )
}
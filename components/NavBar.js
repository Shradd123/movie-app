"use client";

import { useMovieContext } from "@/context/MovieContext";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function NavBar() {
  const { user, logoutUser } = useMovieContext();
  const router = useRouter();

  return (
    <nav className="p-4 bg-gray-800 text-white flex justify-between">
      <div>
        <Link href="/" className="mr-4">Home</Link>
        <Link href="/favorites" className="mr-4">Favorites</Link>
      </div>
      {user ? (
        <button className="bg-red-500 p-2 rounded" onClick={() => { logoutUser(); router.push("/login"); }}>
          Logout
        </button>
      ) : (
        <Link href="/login">Login</Link>
      )}
    </nav>
  );
}

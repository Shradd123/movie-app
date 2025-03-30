"use client";
import { useMovieContext } from "@/context/MovieContext";
import NavBar from "@/components/NavBar";

export default function FavoritesPage() {
  const { favorites, removeFromFavorites } = useMovieContext();

  return (
    <div>
      <NavBar />
      <div className="p-4">
        <h1 className="text-2xl font-bold">Your Favorites</h1>

        {favorites.length === 0 ? (
          <p>No favorite movies added.</p>
        ) : (
          <div className="grid grid-cols-3 gap-4">
            {favorites.map((movie) => (
              <div key={movie.id} className="border p-4 rounded-lg shadow">
                <h3 className="text-xl font-bold">{movie.title}</h3>
                <button
                  className="mt-2 p-2 bg-red-500 text-white rounded"
                  onClick={() => removeFromFavorites(movie.id)}
                >
                  Remove from Favorites
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

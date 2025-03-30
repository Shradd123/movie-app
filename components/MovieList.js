"use client";
import { useMovieContext } from "@/context/MovieContext";
import Image from "next/image";

export default function MovieList({ movies }) {
  const { favorites, addToFavorites } = useMovieContext();

  if (!movies || movies.length === 0) {
    return <p className="text-center text-gray-400 mt-6">No movies found.</p>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
      {movies.map((movie) => {
        const isFavorite = favorites.some((fav) => fav.id === movie.id);

        return (
          <div
            key={movie.id}
            className="bg-gray-800 p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
          >
            <Image
              src={movie.image}
              alt={movie.title}
              width={200}
              height={300}
              className="w-full h-64 object-cover rounded-md"
            />
            <h3 className="text-xl font-semibold mt-2">{movie.title}</h3>
            <p className="text-gray-400">{movie.year}</p>

            <button
              className={`mt-3 w-full p-2 rounded text-white ${
                isFavorite
                  ? "bg-gray-600 cursor-not-allowed"
                  : "bg-blue-500 hover:bg-blue-600"
              }`}
              onClick={() => addToFavorites(movie)}
              disabled={isFavorite}
            >
              {isFavorite ? "Added to Favorites" : "Add to Favorites"}
            </button>
          </div>
        );
      })}
    </div>
  );
}

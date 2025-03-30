"use client";

import { useMovieContext } from "./MovieContext";

export default function MovieCard({ movie }) {
  const { favorites, addToFavorites, removeFromFavorites } = useMovieContext();

  const isFavorite = favorites.some(fav => fav.id === movie.id);

  return (
    <div className="border p-4 rounded-lg shadow">
      <h3 className="text-xl font-bold">{movie.title}</h3>
      <p className="text-gray-500">{movie.year}</p>

      <button
        className={`mt-2 p-2 text-white rounded ${isFavorite ? "bg-red-500" : "bg-blue-500"}`}
        onClick={() => isFavorite ? removeFromFavorites(movie.id) : addToFavorites(movie)}
      >
        {isFavorite ? "Remove from Favorites" : "Add to Favorites"}
      </button>
    </div>
  );
}

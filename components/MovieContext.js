"use client";
import { createContext, useState, useContext, useEffect } from "react";

const MovieContext = createContext();

export function MovieProvider({ children }) {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const savedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(savedFavorites);
  }, []);

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const addToFavorites = (movie) => {
    if (!favorites.some((fav) => fav.id === movie.id)) {
      setFavorites([...favorites, movie]);
    }
  };

  const removeFromFavorites = (id) => {
    setFavorites(favorites.filter((movie) => movie.id !== id));
  };

  return (
    <MovieContext.Provider value={{ favorites, addToFavorites, removeFromFavorites }}>
      {children}
    </MovieContext.Provider>
  );
}

export function useMovieContext() {
  return useContext(MovieContext);
}

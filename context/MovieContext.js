"use client";
import { createContext, useState, useContext, useEffect } from "react";
import { useRouter } from "next/navigation";

const MovieContext = createContext();

export function MovieProvider({ children }) {
  const [favorites, setFavorites] = useState([]);
  const [user, setUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const savedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(savedFavorites);
    setUser(localStorage.getItem("user") || null);
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

  const loginUser = (username) => {
    localStorage.setItem("user", username);
    setUser(username);
    router.push("/"); // Redirect to main page after login
  };

  const logoutUser = () => {
    localStorage.removeItem("user");
    setUser(null);
    router.push("/login"); // Redirect to login after logout
  };

  return (
    <MovieContext.Provider
      value={{ favorites, addToFavorites, removeFromFavorites, user, loginUser, logoutUser }}
    >
      {children}
    </MovieContext.Provider>
  );
}

export function useMovieContext() {
  return useContext(MovieContext);
}

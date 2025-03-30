"use client";
import { useState } from "react";

export default function SearchBar({ onSearch }) {
  const [query, setQuery] = useState("");

  return (
    <div className="flex justify-center mb-6">
      <input
        type="text"
        placeholder="Search movies..."
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
          onSearch(e.target.value);
        }}
        className="w-full sm:w-2/3 md:w-1/2 lg:w-1/3 p-3 border border-gray-600 rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
}

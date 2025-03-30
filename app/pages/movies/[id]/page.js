"use client";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";

export default function MovieDetails() {
    const { id } = useParams();
    const [movie, setMovie] = useState(null);

    useEffect(() => {
        fetch("/data/movies.json")
            .then((res) => res.json())
            .then((data) => {
                const foundMovie = data.find((m) => m.id === parseInt(id));
                setMovie(foundMovie);
            });
    }, [id]);

    if (!movie) return <p>Loading...</p>;

    return (
        <div className="p-8">
            <img src={movie.image} alt={movie.title} className="w-64 rounded shadow" />
            <h1 className="text-2xl font-bold mt-4">{movie.title}</h1>
            <p>{movie.description}</p>
            <p className="text-gray-500">{movie.genre} | {movie.year}</p>
        </div>
    );
}

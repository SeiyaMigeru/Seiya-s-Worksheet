"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";

interface User {
  id: number;
  avatar: string;
  first_name: string;
  last_name: string;
  description: string;
}

interface Pokemon {
  id: number;
  name: string;
  sprites: {
    front_default: string;
  };
  species: {
    url: string;
  };
  description: string;
}

interface ImageData {
    id: string;
    author: string;
    width: number;
    height: number;
    url: string;
    download_url: string;
  }

const CombinedCardList: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [pokemonList, setPokemonList] = useState<Pokemon[]>([]);
  const [images, setImages] = useState<ImageData[]>([]);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(
          "https://random-data-api.com/api/users/random_user?size=5"
        );
        const userData: User[] = response.data.map((user: any) => ({
          id: user.id,
          avatar: user.avatar,
          first_name: user.first_name,
          last_name: user.last_name,
          description: "No description available",
        }));
        setUsers(userData);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    const fetchPokemonData = async () => {
      try {
        const response = await axios.get(
          "https://pokeapi.co/api/v2/pokemon?limit=5"
        );
        const pokemonData: Pokemon[] = await Promise.all(
          response.data.results.map(async (result: any) => {
            const pokemonResponse = await axios.get(result.url);
            const speciesResponse = await axios.get(
              pokemonResponse.data.species.url
            );
            const description = speciesResponse.data.flavor_text_entries.find(
              (entry: any) => entry.language.name === "en"
            ).flavor_text;
            return { ...pokemonResponse.data, description };
          })
        );
        setPokemonList(pokemonData);
      } catch (error) {
        console.error("Error fetching pokemon data:", error);
      }
    };

    const fetchImageData = async () => {
        try {
          const response = await axios.get("https://picsum.photos/v2/list?page=1&limit=5");
          setImages(response.data);
        } catch (error) {
          console.error("Error fetching image data:", error);
        }
      };
  

    fetchUserData();
    fetchPokemonData();
    fetchImageData();
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-bold text-center my-8">Random Users</h1>
      <div className="flex flex-wrap justify-center">
        {users.map((user) => (
          <div
            key={user.id}
            className="max-w-sm mx-4 my-4 bg-white rounded-lg p-4 shadow-md"
          >
            <img
              className="w-16 h-16 rounded-full mx-auto mb-4"
              src={user.avatar}
              alt={`${user.first_name}'s avatar`}
            />
            <div className="text-center">
              <h2 className="text-lg font-semibold">
                {user.first_name} {user.last_name}
              </h2>
              <p className="text-gray-500">{user.description}</p>
            </div>
          </div>
        ))}
      </div>
      <h1 className="text-2xl font-bold text-center my-8">Pokémon</h1>
      <div className="flex flex-wrap justify-center">
        {pokemonList.map((pokemon) => (
          <div
            key={pokemon.id}
            className="max-w-sm mx-4 my-4 bg-white rounded-lg p-4 shadow-md"
          >
            <img
              className="w-16 h-16 rounded-full mx-auto mb-4"
              src={pokemon.sprites.front_default}
              alt={`${pokemon.name}'s sprite`}
            />
            <div className="text-center">
              <h2 className="text-lg font-semibold capitalize">
                {pokemon.name}
              </h2>
              <p className="text-gray-500">{pokemon.description}</p>
            </div>
          </div>
        ))}
      </div>
      <h1 className="text-2xl font-bold text-center my-8">Random Laptop Images</h1>
      <div className="flex flex-wrap justify-center">
        {images.map((image) => (
          <div
            key={image.id}
            className="max-w-sm mx-4 my-4 bg-white rounded-lg p-4 shadow-md"
          >
            <img
              className="w-full h-auto rounded-md mx-auto mb-4"
              src={image.download_url}
              alt={`${image.author}'s image`}
            />
            <div className="text-center">
              <h2 className="text-lg font-semibold">{image.author}</h2>
              <p className="text-gray-500">{`Dimensions: ${image.width}x${image.height}`}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CombinedCardList;



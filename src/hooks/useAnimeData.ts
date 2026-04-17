"use client";

import { useQuery } from "@tanstack/react-query";

export interface Anime {
  mal_id: number;
  title: string;
  images: {
    webp: {
      large_image_url: string;
    };
  };
  trailer: {
    images: {
      maximum_image_url: string;
    };
  };
  score: number;
  genres: { name: string }[];
  synopsis: string;
  episodes: number;
  status: string;
}

const POPULAR_IDS = [16498, 38480, 40748, 1535, 21, 2001, 31964, 223, 9253, 1575, 813, 269];

const fetchAnimeById = async (id: number): Promise<Anime> => {
  const response = await fetch(`https://api.jikan.moe/v4/anime/${id}`);
  if (!response.ok) throw new Error("Failed to fetch anime");
  const json = await response.json();
  return json.data;
};

export const useAnimeData = () => {
  return useQuery({
    queryKey: ["popular-anime"],
    queryFn: async () => {
      // We fetch them sequentially or with a small delay to avoid rate limits from Jikan
      const results = [];
      for (const id of POPULAR_IDS) {
        try {
          const data = await fetchAnimeById(id);
          results.push(data);
          // Small delay to respect Jikan's rate limit (3 requests per second)
          await new Promise(resolve => setTimeout(resolve, 400));
        } catch (e) {
          console.error(`Failed to fetch anime ${id}`, e);
        }
      }
      return results;
    },
    staleTime: 1000 * 60 * 60, // 1 hour
  });
};
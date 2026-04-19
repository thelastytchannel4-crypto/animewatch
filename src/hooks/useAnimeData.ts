"use client";

import { useQuery } from "@tanstack/react-query";

export interface Anime {
  mal_id: number;
  title: string;
  images: {
    webp: {
      large_image_url: string;
    };
    jpg: {
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
  aired: {
    from: string;
    string: string;
  };
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
      const results = [];
      for (const id of POPULAR_IDS) {
        try {
          const data = await fetchAnimeById(id);
          results.push(data);
          await new Promise(resolve => setTimeout(resolve, 400));
        } catch (e) {
          console.error(`Failed to fetch anime ${id}`, e);
        }
      }
      return results;
    },
    staleTime: 1000 * 60 * 60,
  });
};

export const useNewReleases = () => {
  return useQuery({
    queryKey: ["new-releases"],
    queryFn: async () => {
      const response = await fetch('https://api.jikan.moe/v4/seasons/now?limit=12');
      if (!response.ok) throw new Error("Failed to fetch new releases");
      const json = await response.json();
      return json.data as Anime[];
    },
    staleTime: 1000 * 60 * 60 * 24, // 24 hours
  });
};
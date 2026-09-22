import { useEffect, useState } from "react";

type Poster = {
  id: number;
  name: string;
  description: string | null;
  image: string;
  genres: {
    genreId: number;
    posterId: number;
  }[];
};

export function useRandomPosters(url: string, count: number) {
  
  const [data, setData] = useState<Poster[]>([]);

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState("");

  useEffect(() => {

    fetch(url)

      .then((response) => {

        if (!response.ok) {

          throw new Error("Something went wrong");
        }

        return response.json();
      })
      .then((posters: Poster[]) => {

        const randomPosters = [...posters]

          .sort(() => Math.random() - 0.5)

          .slice(0, count);

        setData(randomPosters);


        setLoading(false);
      })
      .catch((error) => {



        setError(error.message);

        setLoading (false);
      });


  }, [url, count]);

  return {

    data,

    loading,
    
    error,
  };
}
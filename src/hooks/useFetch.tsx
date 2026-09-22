import { useEffect, useState } from "react";

export function useFetch<T>(url: string) {
  const [data, setData] = useState<T | null>(null);

  const [loading, setLoading] = useState(true);
  
  const [error, setError] = useState("");


  useEffect(() => {
    fetch(url)
      .then((response) => {
        //jeg laver denne del senere
        if (!response.ok) {

          throw new Error("Something went wrong");
        }

        return response.json();
      })
      .then((result) => {


        setData(result);

        setLoading(false);
      })
      .catch((error) => {

        setError(error.message);


        setLoading(false);
      });
  }, [url]);

  return {
    data,
    loading,
    error,
  };
}
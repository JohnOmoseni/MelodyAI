import { useEffect, useState } from "react";

const apiURL = import.meta.env.VITE_API_URL;

const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");
myHeaders.append("Authorization", import.meta.env.VITE_AUTH_TOKEN);

function useFetch({ route, method = "POST", body }) {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const options = {
    method,
    body,
    headers: myHeaders,
  };

  useEffect(() => {
    let mounted = true;
    const getData = async () => {
      setIsLoading(true);
      try {
        const res = await fetch(`${apiURL}/${route}`, options);

        if (!res.ok) {
          console.log(res.text());
          setError(true);
          throw new Error("Error fetching data");
        }

        const data = await res.json();
        console.log(data);
        setData(data);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        console.error(error.message);
      }
    };

    getData();
    return () => (mounted = false);
  }, []);

  return [data, isLoading, error];
}
export default useFetch;

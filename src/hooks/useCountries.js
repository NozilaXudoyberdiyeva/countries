import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
const useCountries = () => {
  const [countries, setCountries] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    setLoading(true);
    const controller = new AbortController();

    apiClient
      .get("/all", { signal: controller.signal })
      .then((res) => {
        setCountries(res.data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.massage);
        setLoading(false);
      });

    return () => controller.abort();
  }, []);

  return { countries, isLoading, error };
};

export default useCountries;

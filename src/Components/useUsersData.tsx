import { useEffect, useState } from "react";

const useUsersData = () => {
  const [isLoading, isSetLoading] = useState(false);
  const [error, setError] = useState(false);
  const [data, setData] = useState([]);
  const controller = new AbortController();

  const url = `https://jsonplaceholder.typicode.com/users`;

  const getUser = async () => {
    isSetLoading(true);
    try {
      const res = await fetch(url, { signal: controller.signal });
      const data = await res.json();
      isSetLoading(false);
      setData(data);
    } catch (error) {
      setError(true);
    }
  };

  useEffect(() => {
    getUser();
   //  Cleanup
    return () => {
      controller.abort();
    };
  }, []);
  return {isLoading,data,error};
};

export default useUsersData;

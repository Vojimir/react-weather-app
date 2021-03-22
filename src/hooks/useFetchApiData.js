import axios from "../axiosDefault";
import { useState, useEffect } from "react";

const useFetchApiData = (initialUrl) => {
  const [errors, setErrors] = useState(null);
  const [data, setData] = useState(null);
  const [url, setUrl] = useState(initialUrl);

  useEffect(async () => {
    if (!url) return;
    try {
      const responce = await axios.get(url);
      const responceData = await setData(responce.data);
    } catch (error) {
      setErrors("Something went wrong!");
    }
  }, [url]);
  return { data, errors, setUrl };
};
export default useFetchApiData;

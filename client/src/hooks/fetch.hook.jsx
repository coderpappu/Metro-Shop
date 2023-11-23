import React, { useState, useEffect } from "react";
import { getUsername } from "../halper/halper";
import axios from "../halper/api";

const useFetch = (query) => {
  const [getData, setData] = useState({ apiData: undefined, status: null });

  useEffect(() => {
    const fetchData = async () => {
      try {
        let { username } = !query ? await getUsername() : "";

        const { data, status } = !query
          ? await axios.get(`/user/${username}`)
          : await axios.get(`/user/${query}`);

        if (status == 200) {
          setData((prev) => ({ ...prev, apiData: data, status: status }));
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [query]);

  //   console.log(getData);

  return getData;
};

export default useFetch;

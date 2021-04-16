// @flow

import { useState, useEffect, useRef } from "react";

function useCustomFetch(url) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const urlRef = useRef(url);

  async function customFetch(api) {
    try {
      const response = await fetch(api);
      const responseData = await response.json();

      setData(responseData);
    } catch (err) {
      setError(err);
    }
  }

  useEffect(() => {
    if (urlRef.current !== url) {
      urlRef.current = url;
    }

    if (url) {
      customFetch(url);
    }
  }, [url]);

  return [data, error];
}

export default useCustomFetch;

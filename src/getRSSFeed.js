import { useEffect } from "react";
import { useState } from "react";

const RSS_FEED_URL = process.env.REACT_APP_RSS_FEED_URL;

export default function useGetRSSFeed() {
  const [feed, setFeed] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    getFeed();
  }, []);

  const getFeed = async () => {
    setIsLoading(true);

    await fetch(RSS_FEED_URL)
      .then(async (x) => {
        const res = await x.json();
        setFeed(res);
        setIsError(false);
        setError(null);
      })
      .catch((e) => {
        console.log("ERROR GETTING FEED: ", e);
        setFeed(null);
        setIsError(true);
        setError("ERROR GETTING FEED");
      });

    setIsLoading(false);
  };

  return {
    feed,
    isLoading,
    isError,
    error,
  };
}

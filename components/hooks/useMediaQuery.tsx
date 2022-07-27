import { useEffect, useState } from "react";

export default function useMediaQuery(query:string):boolean {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    // check if value passed in via 'query' matches the current window query
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    // keep media variable in sync with window changing sizes
    const listener = () => {
      setMatches(media.matches);
    };
    media.addEventListener("resize", listener);
    media.addEventListener("change", listener);
    // cleanup to prevent memory leak
    return () => {
      media.removeEventListener("resize", listener)
      media.removeEventListener("change", listener)};
  }, [matches, query]);

  return matches;
}

export const useSm = () => useMediaQuery("(min-width: 640px)");
export const useMd = () => useMediaQuery("(min-width: 768px)");
export const useMid = () => useMediaQuery("(min-width:960px");
export const useLg = () => useMediaQuery("(min-width: 1024px)");
export const useXl = () => useMediaQuery("(min-width: 1280px)");

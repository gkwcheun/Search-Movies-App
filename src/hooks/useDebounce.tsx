import { useState, useEffect } from "react";

function useDebounce(value: any, delay: number) {
  const [debouncedValue, setDebouncedValue] = useState(value);
  useEffect(() => {
    const func = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);
    return () => clearTimeout(func);
  }, [value, delay]);
  return debouncedValue;
}

export default useDebounce;

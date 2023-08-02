import { useState } from "react";

export const useWeatherData = () => {
  const [data, setData] = useState({
    name: "",
    temperature: null,
    humidity: null,
    speed: null,
    image: null,
  });

  return { data, setData };
};

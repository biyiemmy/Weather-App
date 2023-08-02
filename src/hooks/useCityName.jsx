import { useState } from "react";

export const useCityName = () => {
  const [name, setName] = useState("");
  return { name, setName };
};

import {} from "react";

export const Temperature = ({ temperature }) => {
  return (
    <>
      <h1 className="mt-8 font-medium text-2xl">Temperature: {temperature} °C</h1>
    </>
  );
};

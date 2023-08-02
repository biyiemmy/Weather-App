import {} from "react";
import { BsWind } from "react-icons/bs";

export const WindSpeed = ({ windspeed }) => {
  return (
    <>
      <div className="flex items-center justify-between font-normal text-xl text-left">
        <BsWind size={25} className="mr-2" />
        <div className="windspeed">
          <p>{windspeed} km/hr</p>
          <p>Wind Speed</p>
        </div>
      </div>
    </>
  );
};

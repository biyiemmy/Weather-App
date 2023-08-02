import {} from "react";
import { WiHumidity } from "react-icons/wi";

export const Humidity = ({ humidity }) => {
  return (
    <>
      <div className="flex items-center justify-between font-normal text-xl text-left">
        <WiHumidity size={30} className="mr-2" />
        <div className="humidity">
          <p>{humidity} %</p>
          <p>Humidity</p>
        </div>
      </div>
    </>
  );
};

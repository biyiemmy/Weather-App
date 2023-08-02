import {} from "react";
import { NavLink } from "react-router-dom";

export const Footer = () => {
  return (
    <>
      <div className="absolute text-2xl font-bold bottom-0 mb-10">
        <NavLink
          to="https://openweathermap.org/"
          className="text-xs text-blue-500"
        >
          Powered by Open Weather
        </NavLink>

        <div className="text-xs text-white">Created by biyiemmy</div>
      </div>
    </>
  );
};

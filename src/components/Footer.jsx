import {} from "react";
import { NavLink } from "react-router-dom";

/**
 * Renders the footer section of a web page.
 *
 * @returns {JSX.Element} The JSX element representing the footer section.
 */
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

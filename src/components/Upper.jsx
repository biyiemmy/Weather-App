import {} from "react";
import { FiSearch } from "react-icons/fi";

export const Upper = ({ handleClick, setName }) => {
  return (
    <>
      <div className="flex justify-between items-center">
        <input
          type="text"
          placeholder="Enter ..."
          onChange={(e) => setName(e.target.value)}
          className="w-80 py-3 px-6 rounded-lg border border-gray-400 focus:outline-none focus:border-blue-500"
        />
        <button
          onClick={handleClick}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          <FiSearch size={30} />
        </button>
      </div>
    </>
  );
};

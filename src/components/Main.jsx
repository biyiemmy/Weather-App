import { useName } from "../hooks/";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export const Main = () => {
  const navigate = useNavigate();
  const { name, setName } = useName();

  const handleWeatherButtonClick = () => {
    if (!name) {
      toast.error("Please enter your name.", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: true,
      });
    } else {
      toast.success(`Hello, ${name}!`, {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: true,
      });
      navigate("/weather");
    }
  };
  return (
    <>
      <div className="my-2 flex flex-col items-center sm:flex-row sm:justify-center">
        <input
          type="text"
          className="border w-full sm:w-64 p-2 outline-none rounded-lg"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />

        <button
          className="mt-3 px-4 py-2 bg-blue-500 text-center text-white rounded-lg sm:mt-0 sm:ml-2"
          onClick={handleWeatherButtonClick}
        >
          Show
        </button>
      </div>
    </>
  );
};

import { useWeatherData, useCityName, useError } from "../hooks/";
import {
  City,
  Humidity,
  Image,
  Temperature,
  Upper,
  WindSpeed,
} from "../components";
import { fetchWeatherData } from "../api/weatherApi";
import { toast } from "react-toastify";

export const Weather = () => {
  const { data, setData } = useWeatherData();
  const { name, setName } = useCityName();
  const { error, setError } = useError();

  const handleClick = () => {
    if (!name) {
      setError("A city name is required.");
      toast.error("A city name is required.", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: true,
      });
    } else {
      setError("");
      fetchWeatherData(name, setData, setError);
    }
  };

  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-blue-400">
        <div className="w-full sm:w-2/3 md:w-1/2 lg:w-1/3 p-8 rounded-lg m-5 mx-auto text-center text-black bg-white">
          <Upper handleClick={handleClick} setName={setName} />
          {error && <div style={{ color: "red" }}>{error}</div>}

          <div className="">
            <Image image={data.image} />
            <Temperature temperature={data.temperature} />
            <City name={data.name} />

            <div className="flex items-center justify-between mt-10 font-normal text-xl">
              <Humidity humidity={data.humidity} />
              <WindSpeed windspeed={data.speed} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

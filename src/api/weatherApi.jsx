import axios from "axios";
import { toast } from "react-toastify";
import { getImageIcon } from "../utils/weatherIcons";

export const fetchWeatherData = async (name, setData, setError) => {
  try {
    const API_KEY = import.meta.env.VITE_API_KEY;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=${API_KEY}&units=metric`;
    const response = await axios.get(url);

    const imageIcon = getImageIcon(response.data.weather[0].main);

    setData({
      name: response.data.name,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      speed: response.data.wind.speed,
      image: imageIcon,
    });
    console.log(response.data);

    setError("");

    toast.success(`${name} weather data fetched successfully!`, {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: true,
    });
  } catch (error) {
    setError("Error fetching weather data. Please try again later.");
    toast.error("Error fetching weather data. Please try again later.", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: true,
    });
  }
};

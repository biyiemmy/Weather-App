import axios from "axios";
import { toast } from "react-toastify";
import { getImageIcon } from "../utils/weatherIcons";

/**
 * Fetches weather data from the OpenWeatherMap API based on a given city name.
 * Updates the state of the component with the fetched weather data using the 'setData' function.
 * Handles errors and displays appropriate toast messages.
 * 
 * @param {string} name - The name of the city for which weather data is to be fetched.
 * @param {function} setData - The function that updates the state of the component with the fetched weather data.
 * @param {function} setError - The function that updates the state of the component with an error message if there is an error while fetching weather data.
 * @returns {void}
 */

export const fetchWeatherData = async (name, setData, setError) => {
  try {
    // Get the API key from environment variables
    const API_KEY = import.meta.env.VITE_API_KEY;

    // Construct the API URL
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=${API_KEY}&units=metric`;

    // Make an API call to fetch weather data
    const response = await axios.get(url);

    // Get the weather icon based on the weather condition
    const imageIcon = getImageIcon(response.data.weather[0].main);

    // Update the state of the component with the fetched weather data
    setData({
      name: response.data.name,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      speed: response.data.wind.speed,
      image: imageIcon,
    });

    // Clear any previous error messages
    setError("");

    // Display a success toast message
    toast.success(`${name} weather data fetched successfully!`, {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: true,
    });
  } catch (error) {
    // Update the state of the component with an error message
    const errorMessage = "Error fetching weather data. Please try again later.";
    setError(errorMessage);

    // Display an error toast message
    toast.error(errorMessage, {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: true,
    });
  }
};

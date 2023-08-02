import Sun from "/sun.png";
import Clouds from "/clouds.png";
import Drizzle from "/drizzle.png";
import Mist from "/mist.png";
import Rain from "/rain.png";
import Clear from "/stars.png";

export const getImageIcon = (weatherMain) => {
  switch (weatherMain) {
    case "Clouds":
      return Clouds;
    case "Clear":
      return Clear;
    case "Rain":
      return Rain;
    case "Drizzle":
      return Drizzle;
    case "Sun":
      return Sun;
    case "Mist":
      return Mist;
    default:
      return null;
  }
};

import { useState, useEffect } from "react";

/**
 * Displays a welcome message with a typewriter effect on a web page.
 * The welcome message is "Welcome to Real Time Weather Update" and the 
 * typewriter effect is achieved by gradually displaying the message one character at a time.
 */
export const Header = () => {
  const [welcomeText, setWelcomeText] = useState("");

  useEffect(() => {
    const updateWelcomeText = () => {
      const fullText = "Real Time";
      const interval = setInterval(() => {
        setWelcomeText((prevText) => fullText.slice(0, prevText.length + 1));
      }, 100);
      setTimeout(() => {
        clearInterval(interval);
      }, 3500);
    };

    updateWelcomeText();
  }, []);

  return (
    <>
      <div className="text-3xl font-bold my-10">
        <h1>Welcome to </h1>
        {welcomeText}
        <h1>Weather Update</h1>
      </div>
    </>
  );
};

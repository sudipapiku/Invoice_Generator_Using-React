import React, { useEffect, useState } from "react";

const Footer = () => {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  useEffect(() => {
    // Update the current year every minute to handle the case where the year changes while the user is on the page
    const intervalId = setInterval(() => {
      setCurrentYear(new Date().getFullYear());
    }, 60000);

    // Clear the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []);

  return (
    <footer className="bg-gray-800 text- py-4 text-center">
      <div className="container mx-auto">
        <p> Copyright &copy; {currentYear}. All rights reserved | Sudipa Biswas.</p>
      </div>
    </footer>
  );
};

export default Footer;
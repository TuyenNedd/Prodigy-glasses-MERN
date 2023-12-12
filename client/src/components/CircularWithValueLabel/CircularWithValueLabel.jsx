import { useState, useEffect } from "react";
import CircularProgressWithLabel from "../CircularProgressWithLabel/CircularProgressWithLabel.jsx";

function CircularWithValueLabel() {
  const [progress, setProgress] = useState(10);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) =>
        prevProgress >= 100 ? 0 : prevProgress + 10
      );
    }, 400);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return <CircularProgressWithLabel value={progress} />;
}

export default CircularWithValueLabel;

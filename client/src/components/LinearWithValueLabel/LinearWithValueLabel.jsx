import { useEffect, useState } from "react";
import LinearProgressWithLabel from "../LinearProgressWithLabel/LinearProgressWithLabel.jsx";
import { Box } from "@mui/material";

export default function LinearWithValueLabel() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) =>
        prevProgress >= 100 ? 100 : prevProgress + 10
      );
    }, 200);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className="w-full bg-[url(/images/background_texture_mobile.png)] h-screen flex items-center">
      <Box sx={{ width: "200px", margin: "0 auto" }}>
        <LinearProgressWithLabel value={progress} />
      </Box>
    </div>
  );
}

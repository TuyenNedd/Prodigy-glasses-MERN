import React, { useState, useEffect } from "react";
import "./style.scss";
import { Skeleton } from "@mui/material";

const TypeProductHeader = () => {
  // Tạo mảng các mục để hiển thị Skeleton
  const [loading, setLoading] = useState(true);
  const menuItems = ["All Frames", "Best Sellers", "New Arrivals"];
  useEffect(() => {
    const loadingTimeout = setTimeout(() => {
      setLoading(false);
    }, 4000); // 4 seconds in milliseconds

    return () => {
      // Clear the timeout to prevent memory leaks
      clearTimeout(loadingTimeout);
    };
  }, []);
  return (
    <>
      <header
        id="shopify-section-template--16133600149692__tools"
        className="shopify-section collection-tools"
      >
        <div className="bg-tertiary bg-[#f5f2ec]">
          <div className="container flex flex-wrap align-center w-full p-5 lg:px-8 lg:py-6 overflow-x-auto no-scrollbar">
            <form className="exposed-filters ITCGara text-lg lg:text-2xl">
              <ul className="reset flex">
                {menuItems.map((item, index) => (
                  <li key={index} className="flex-shrink-0">
                    {loading ? (
                      <Skeleton
                        sx={{ bgcolor: "grey.400" }}
                        animation="wave"
                        width={100}
                        height={32}
                        className="mr-5"
                        variant="rounded"
                      ></Skeleton>
                    ) : (
                      <div className="field">
                        <label>
                          <input
                            name="feature"
                            type="radio"
                            className="hidden"
                          />
                          <span>{item}</span>
                        </label>
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            </form>
          </div>
        </div>
      </header>
    </>
  );
};

export default TypeProductHeader;

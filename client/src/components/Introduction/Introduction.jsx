import React from "react";

const Introduction = () => {
  return (
    <div className=" relative pb-5 m-auto">
      <img className="h-[500px] w-full" src="../../../public/images/banner/background_texture_2x_9393fcec-09a6-4a2b-b6c3-dea71d975dac.webp" alt="" />
      <div className=" py-12  lg:py-24 text-center absolute top-0 mx-auto w-full ">
        <div className="title-intro lg:px-8 px-4 mb-[30px] ">
          <h5 className="TradeGodthic-BoldCn text-[#443828] text-sm text-center lg:text-xl">
            Get older. Own it. See stuff.
          </h5>
        </div>
        <div className="tittle-intro-h2 px-8 text-center ITCGara mb-2 lg:mb-0 ">
          <h2 className=" text-[3.5rem] lg:text-8xl lg:transition-all transition-all    ">
          We’re a mission 
          <br/>
          disguised as readers. 
          </h2>
        </div>
        <div className=" lg:px-8 px-4 mt-5">
        <p className=" w p-intro mt-0 mb-0 lg:mb-4 lg:max-w-2xl  mx-auto lg:px-8">We’re here to call out the whole fountain of youth illusion, industries that profit from the fear of getting older and the concept of “aging gracefully.”</p>
        </div>
      </div>
    </div>
  );
};
export default Introduction;

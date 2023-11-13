import { useState } from "react";

const PaymentPage = () => {

  const [show, setShow] = useState(false);

  return (
    <div className="w-[100vw] min-h-[100vh] flex overflow-auto  ">
      <div className="w-3/5 h-full lg:w-full mx-10 px-40">
        <div className="flex flex-col">
          <img
            className="max-w-[400px] "
            src="/images/logo/pdglogo.png"
            alt=""
          />
          <div className="max-w-[70%] lg:max-w-full mt-[-100px] mx-auto flex flex-col">
            <div className="hidden lg:flex flex-col">
             
            <div className="flex items-center">
          <img src="/images/icons/cart-shopping-solid.svg" alt="" className="w-5 h-10" />
          <div className="border-t border-b p-4 ITCGara" onClick={() => setShow(!show)}>
            {show ? "Hide" : "Show"} order summary
             </div>
           </div>
             
              {show && 
              <div className="w-full h-[70vh] bg-[#f48029] text-white flex flex-col ">
                <div className="w-3/4 mx-auto mt-[120px]">
                  <div className="flex items-center justify-between border-b border-[rgba(248,172,116,0.34)] pb-2">
                    <img src="images/payment/pay2.png" alt="" />
                    <div className="">
                      <div className="ITCGara">D28 Compact | Reading Glasses</div>
                      <div className="text-gray-300 TradeGodthicCn">Camo / frq Blue-Light Filtering / 3.00</div>
                    </div>
                    <div className="TradeGodthicCn">1 $130.00</div>
                  </div>
                  <div className="mt-6 gap-2 flex border-b border-[rgba(248,172,116,0.34)] pb-8">
                    <input
                      type="text"
                      className="!bg-white outline-none rounded border-0 h-[50px] TradeGodthicCn"
                      placeholder="Discount code or gift card"
                    />
                    <button className="bg-[#f7a05f] h-[50px] w-[80px] TradeGodthicCn">
                      {" "}
                      Apply
                    </button>
                  </div>
                  <div className="mt-6 border-[rgba(248,172,116,0.34)] border-b pb-8">
                    <div className="flex justify-between">
                      <div className="text-sm text-gray-300 TradeGodthicCn">Subtotal</div>
                      <div className="text-lg TradeGodthicCn">$130.00</div>
                    </div>
                    <div className="flex justify-between">
                      <div className="text-sm text-gray-300 TradeGodthicCn">Shipping</div>
                      <div className="text-sm text-gray-300 TradeGodthicCn">Calculated at next step</div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mt-6">
                      <div className="text-gray-50 ITCGara">Total</div>
                      <div className="flex ">
              <div className="text-sm mt-1 mx-3 text-gray-300 TradeGodthicCn">USD </div>
              <div className="text-lg TradeGodthicCn">$130.000</div>
              </div>
                    </div>
                  </div>
                </div>
              </div>
              }

            </div>

            <div className="text-sm TradeGodthic-BoldCn">
              Cart {">"} Information {">"} Shipping {">"} Payment
            </div>
            <div className="mx-auto text-xs font-semibold mt-6 TradeGodthic-BoldCn">
              Express checkout
            </div>
            <div className="border-b">
              <img src="images/payment/pay.png" alt="" />
            </div>
            <div className="mx-auto text-sm mt-4 border-b w-full text-center ITCGara ">
              OR
            </div>
            <div className="flex justify-between mt-[50px]">
              <div className="TradeGodthicCn">Contact</div>
              <div className=" text-sm TradeGodthicCn"> Have an account? Log in</div>
            </div>
            <input
              placeholder="Email "
              className="border h-[46px] rounded p-1 px-3 mt-4 TradeGodthicCn"
            />
             <div className="flex items-center gap-2 mt-4">
             <input type="checkbox" className="w-4 h-4 text-black bg-gray-100 border-gray-300 rounded focus:ring-black dark:focus:ring-black dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
              <div className="text-gray-500 border-none  text-sm TradeGodthicCn"> 	Email me with news and offers</div>
            </div>
            <div className="mt-6 text-base ITCGara">Shipping address</div>
            <input
              placeholder="Country"
              className="border h-[46px] rounded p-1 px-3 mt-4  text-sm TradeGodthicCn"
            />
            <div className="flex gap-2">
              <input
                placeholder="First name(optional)"
                className="border w-1/2 h-[46px] rounded p-1 px-3 mt-4 text-sm TradeGodthicCn"
              />
              <input
                placeholder="Last name"
                className="border w-1/2  h-[46px] rounded p-1 px-3 mt-4 text-sm TradeGodthicCn"
              />
            </div>
            <input
              placeholder="Address"
              className="border h-[46px] rounded p-1 px-3 mt-4  text-sm TradeGodthicCn"
            />
            <input
              placeholder="Apartment, suite, etc. (optional)"
              className="border h-[46px] rounded p-1 px-3 mt-4  text-sm TradeGodthicCn"
            />
            <div className="flex gap-2">
              <input
                placeholder="City"
                className="border w-1/2 h-[46px] rounded p-1 px-3 mt-4  text-sm TradeGodthicCn"
              />
              <input
                placeholder="Postal code (optional)"
                className="border w-1/2  h-[46px] rounded p-1 px-3 mt-4 text-sm TradeGodthicCn"
              />
              
            </div>
            <input
              placeholder="Phone"
              className="border h-[46px] rounded p-1 px-3 mt-4  text-sm TradeGodthicCn"
            />
            <div className="flex items-center gap-2 mt-4">
              <input type="checkbox" className="w-4 h-4 text-black bg-gray-100 border-gray-300 rounded focus:ring-black dark:focus:ring-black dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 text-sm"/> 
              <div className="text-gray-500 border-none  text-sm TradeGodthicCn"> Text me with news and offers</div>
            </div>
            <div className="flex justify-between items-center mt-4 border-b mb-4 pb-12">
              <div className="text-sm TradeGodthic-BoldCn"> {"< "}Return to cart</div>
              <button className="bg-black text-white w-[188px] h-[60px] rounded  text-sm  TradeGodthicCn">
                Continue to shipping
              </button>
            </div>
            <div className="flex text-sm">
             <a href="#" className="mr-4 TradeGodthicCn">Refund policy</a>
             <a href="#" className="mr-4 TradeGodthicCn">Privacy policy</a>
             <a href="#" className="TradeGodthicCn">Terms of service</a>
              </div>
          </div>
        </div>
      </div>
      <div className="w-2/5 bg-[#f48029] text-white flex flex-col lg:hidden">
        <div className="w-3/4 mx-10 mt-[120px]">
          <div className="flex items-center justify-between border-b border-[rgba(248,172,116,0.34)] pb-2">
            <img src="/images/payment/pay2.png" alt="" />
            <div className="">
              <div className="ITCGara">D28 Compact | Reading Glasses</div>
              <div className="text-gray-300 TradeGodthicCn">Camo / frq Blue-Light Filtering / 3.00</div>
            </div>
            <div className="mx-20 TradeGodthicCn"> $130.00</div>
          </div>
          <div className="mt-6 gap-2 flex border-b border-[rgba(248,172,116,0.34)] pb-8">
            <input
              type="text"
              className="!bg-white outline-none rounded border-0 w-[300px] h-[45px] TradeGodthicCn"
              placeholder="Discount code or gift card"
            />
            <button className="bg-[#f7a05f] outline-none rounded border-0 h-[45px] w-[80px] TradeGodthicCn"> Apply</button>
          </div>
          <div className="mt-6 border-[rgba(248,172,116,0.34)] border-b pb-8">
            <div className="flex justify-between">
              <div className="text-sm text-gray-300 TradeGodthicCn">Subtotal</div>
              <div className="text-lg TradeGodthicCn">$130.00</div>
            </div>
            <div className="flex justify-between">
              <div className="text-sm text-gray-300 TradeGodthicCn">Shipping</div>
              <div className="text-sm text-gray-300 TradeGodthicCn">Calculated at next step</div>
            </div>
          </div>
          <div>
            <div className="flex justify-between mt-6">
              <div className="text-gray-50 ITCGara">Total</div>
              <div className="flex ">
              <div className="text-sm mt-1 mx-3 text-gray-300 TradeGodthicCn">USD </div>
              <div className="text-lg TradeGodthicCn">$130.000</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;

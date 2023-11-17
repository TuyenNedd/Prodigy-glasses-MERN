import { useState } from "react";

const PaymentPage = () => {
  const [show, setShow] = useState(false);

  return (
    <div className=" flex overflow-auto  ">
      <div className="w-full lg:w-3/5 mx-4 lg:mx-10 px-4 lg:px-10">
        <div className="flex flex-col">
          <div className="img-logo mx-auto ">
            <img
              className=" brightness-0  w-[15rem] "
              src="../../../public/images/logo/pdglogo (1).png"
              alt=""
            />
          </div>
          <div className="   w-full lg:max-w-full mt-[-100px] mx-auto flex flex-col pt-8">
            <div className="    flex-col mt-10 cursor-pointer lg:hidden">
              <div className=" w-[75%] py-5 m-auto flex items-center justify-between border-t border-b	">
                <div
                  className=" flex  ITCGara"
                  onClick={() => setShow(!show)}
                >
                  <span className="order-summary-toggle__icon-wrapper pr-2">
                    <svg
                      width="20"
                      height="19"
                      xmlns="http://www.w3.org/2000/svg"
                      className="order-summary-toggle__icon"
                    >
                      <path d="M17.178 13.088H5.453c-.454 0-.91-.364-.91-.818L3.727 1.818H0V0h4.544c.455 0 .91.364.91.818l.09 1.272h13.45c.274 0 .547.09.73.364.18.182.27.454.18.727l-1.817 9.18c-.09.455-.455.728-.91.728zM6.27 11.27h10.09l1.454-7.362H5.634l.637 7.362zm.092 7.715c1.004 0 1.818-.813 1.818-1.817s-.814-1.818-1.818-1.818-1.818.814-1.818 1.818.814 1.817 1.818 1.817zm9.18 0c1.004 0 1.817-.813 1.817-1.817s-.814-1.818-1.818-1.818-1.818.814-1.818 1.818.814 1.817 1.818 1.817z"></path>
                    </svg>
                  </span>
                  {show ? "Hide" : "Show"} order summary
                </div>
                <div className=" font-semibold items-price">$130.00</div>
              </div>

              {show && (
                <div className=" bg-[#f48029] text-white flex flex-col ">
                  <div className=" w-[65%] mx-auto py-5">
                    <div className="flex items-center justify-between border-b border-[rgba(248,172,116,0.34)] pb-2">
                      <img src="images/payment/pay2.png" alt="" />
                      <div className="py-5">
                        <div className="ITCGara text-sm ">
                          D28 Compact | Reading Glasses
                        </div>
                        <div className="text-orange-200	0 TradeGodthicCn">
                          Camo / frq Blue-Light Filtering / 3.00
                        </div>
                      </div>
                      <div className="TradeGodthicCn"> $130.00</div>
                    </div>
                    <div className="mt-6 gap- flex justify-between border-b border-[rgba(248,172,116,0.34)] pb-8">
                      <input
                        type="text"
                        className=" text-black bg-white outline-none rounded border-0 h-[50px] TradeGodthicCn w-80 "
                        placeholder="Discount code or gift card"
                      />
                      <button className="bg-[#f7a05f] h-[50px] w-[80px] TradeGodthicCn">
                        {" "}
                        Apply
                      </button>
                    </div>
                    <div className="mt-6 border-[rgba(248,172,116,0.34)] border-b pb-8">
                      <div className="flex justify-between">
                        <div className="text-sm text-orange-200	 TradeGodthicCn">
                          Subtotal
                        </div>
                        <div className="text-lg TradeGodthicCn">$130.00</div>
                      </div>
                      <div className="flex justify-between">
                        <div className="text-sm text-orange-200	 TradeGodthicCn">
                          Shipping
                        </div>
                        <div className="text-sm text-orange-200	 TradeGodthicCn">
                          Calculated at next step
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mt-6">
                        <div className="text-orange-200	 ITCGara">Total</div>
                        <div className="flex  ">
                          <div className="text-sm mt-1 font-semibold mx-3 text-orange-200	 TradeGodthicCn">
                            USD{" "}
                          </div>
                          <div className="text-lg font-semibold TradeGodthicCn">
                            $130.000
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
            <div className="comten w-[70%] m-auto pt-8 mt-6 ">
              <div className="text-sm TradeGodthic-BoldCn">
                Cart {">"} Information {">"} Shipping {">"} Payment
              </div>
              <div className=" mx-auto text-center text-ms font-semibold mt-6 TradeGodthic-BoldCn">
                Express checkout
              </div>
              <div className="  lg:w-full border-[1px] ">
              <div className="border-b flex flex-row items-center justify-around p-4 border-[#e6e6e6] ">
                <div className="w-[241px] rounded bg-[#5a31f4] lg:w-72  lg:rounded">
                  <button className="flex h-11 items-center border-none  w-full justify-center rounded ">
                    <img
                      className="h-5 brightness-200"
                      src="https://vectorseek.com/wp-content/uploads/2023/09/Shop-Pay-Logo-Vector.svg-.png"
                    />
                   
                  </button>
                </div>
                <div className="w-[241px] rounded bg-[#ffc439] lg:w-72  lg:rounded">
                  <button className="flex h-11 items-center border-none  w-full justify-center rounded ">
                    <img
                      className="h-5"
                      src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAg
                      MCAyNCAzMiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBwcmVzZXJ2ZUFzcGVjdFJhdGl
                      vPSJ4TWluWU1pbiBtZWV0Ij4KICAgIDxwYXRoIGZpbGw9IiMwMDljZGUiIGQ9Ik0gMjAuOTA1IDkuNSBDIDIx
                      LjE4NSA3LjQgMjAuOTA1IDYgMTkuNzgyIDQuNyBDIDE4LjU2NCAzLjMgMTYuNDExIDIuNiAxMy42OTcgMi42IEwgNS43
                      MzkgMi42IEMgNS4yNzEgMi42IDQuNzEgMy4xIDQuNjE1IDMuNiBMIDEuMzM5IDI1LjggQyAxLjMzOSAyNi4yIDEuNjIgMjY
                      uNyAyLjA4OCAyNi43IEwgNi45NTYgMjYuNyBMIDYuNjc1IDI4LjkgQyA2LjU4MSAyOS4zIDYuODYyIDI5LjYgNy4yMzYgMjkuNiBMIDExLjM1NiAyOS42IEMgMTEuODI1IDI5LjYgMTIuMjkyIDI5L
                      jMgMTIuMzg2IDI4LjggTCAxMi4zODYgMjguNSBMIDEzLjIyOCAyMy4zIEwgMTMuMjI4IDIzLjEgQyAxMy4zMjIgMjIuNiAxMy43OSAyMi4yIDE0LjI1OCAyMi4yIEwgMTQuODIxIDIyLjIgQyAxOC44NDUgMjIuMiAyMS45MzUgMjAuNSAyMi44NzEgMTUuNSBDIDIzLjMzOSAxMy40IDIzLjE1MyAxMS43IDIyLjAyOSAxMC41IEMgMjEuNzQ4IDEwLjEgMjEuMjc5IDkuOCAyMC45MDUgOS41IEwgMjAuOTA1IDkuNSI+PC9wYXRoPgogICAgPHBhdGggZmlsbD0iIzAxMjE2OSIgZD0iTSAyMC45MDUgOS41IEMgMjEuMTg1IDcuNCAyMC45MDUgNiAxOS43ODIgNC43IEMgMTguNTY0IDMuMyAxNi40MTEgMi42IDEzLjY5NyAyLjYgTCA1LjczOSAyLjYgQyA1LjI3MSAyLjYgNC43MSAzLjEgNC42MTUgMy42IEwgMS4zMzkgMjUuOCBDIDEuMzM5IDI2LjIgMS42MiAyNi43IDIuMDg4IDI2LjcgTCA2Ljk1NiAyNi43IEwgOC4yNjcgMTguNCBMIDguMTczIDE4LjcgQyA4LjI2NyAxOC4xIDguNzM1IDE3LjcgOS4yOTYgMTcuNyBMIDExLjYzNiAxNy43IEMgMTYuMjI0IDE3LjcgMTkuNzgyIDE1LjcgMjAuOTA1IDEwLjEgQyAyMC44MTIgOS44IDIwLjkwNSA5LjcgMjAuOTA1IDkuNSI+PC9wYXRoPgogICAgPHBhdGggZmlsbD0iIzAwMzA4NyIgZD0iTSA5LjQ4NSA5LjUgQyA5LjU3NyA5LjIgOS43NjUgOC45IDEwLjA0NiA4LjcgQyAxMC4yMzIgOC43IDEwLjMyNiA4LjYgMTAuNTEzIDguNiBMIDE2LjY5MiA4LjYgQyAxNy40NDIgOC42IDE4LjE4OSA4LjcgMTguNzUzIDguOCBDIDE4LjkzOSA4LjggMTkuMTI3IDguOCAxOS4zMTQgOC45IEMgMTkuNTAxIDkgMTkuNjg4IDkgMTkuNzgyIDkuMSBDIDE5Ljg3NSA5LjEgMTkuOTY4IDkuMSAyMC4wNjMgOS4xIEMgMjAuMzQzIDkuMiAyMC42MjQgOS40IDIwLjkwNSA5LjUgQyAyMS4xODUgNy40IDIwLjkwNSA2IDE5Ljc4MiA0LjYgQyAxOC42NTggMy4yIDE2LjUwNiAyLjYgMTMuNzkgMi42IEwgNS43MzkgMi42IEMgNS4yNzEgMi42IDQuNzEgMyA0LjYxNSAzLjYgTCAxLjMzOSAyNS44IEMgMS4zMzkgMjYuMiAxLjYyIDI2LjcgMi4wODggMjYuNyBMIDYuOTU2IDI2LjcgTCA4LjI2NyAxOC40IEwgOS40ODUgOS41IFoiPjwvcGF0aD4KPC9zdmc+Cg"
                      alt=""
                    />
                    <img
                      className="h-5"
                      src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjMyIiB2aWV3Qm94PSIwIDAgMTAwIDMyIiB4bWxucz0iaHR0cDomI3gyRjsmI3gyRjt3d3cudzMub3JnJiN4MkY7MjAwMCYjeDJGO3N2ZyIgcHJlc2VydmVBc3BlY3RSYXRpbz0ieE1pbllNaW4gbWVldCI+PHBhdGggZmlsbD0iIzAwMzA4NyIgZD0iTSAxMiA0LjkxNyBMIDQuMiA0LjkxNyBDIDMuNyA0LjkxNyAzLjIgNS4zMTcgMy4xIDUuODE3IEwgMCAyNS44MTcgQyAtMC4xIDI2LjIxNyAwLjIgMjYuNTE3IDAuNiAyNi41MTcgTCA0LjMgMjYuNTE3IEMgNC44IDI2LjUxNyA1LjMgMjYuMTE3IDUuNCAyNS42MTcgTCA2LjIgMjAuMjE3IEMgNi4zIDE5LjcxNyA2LjcgMTkuMzE3IDcuMyAxOS4zMTcgTCA5LjggMTkuMzE3IEMgMTQuOSAxOS4zMTcgMTcuOSAxNi44MTcgMTguNyAxMS45MTcgQyAxOSA5LjgxNyAxOC43IDguMTE3IDE3LjcgNi45MTcgQyAxNi42IDUuNjE3IDE0LjYgNC45MTcgMTIgNC45MTcgWiBNIDEyLjkgMTIuMjE3IEMgMTIuNSAxNS4wMTcgMTAuMyAxNS4wMTcgOC4zIDE1LjAxNyBMIDcuMSAxNS4wMTcgTCA3LjkgOS44MTcgQyA3LjkgOS41MTcgOC4yIDkuMzE3IDguNSA5LjMxNyBMIDkgOS4zMTcgQyAxMC40IDkuMzE3IDExLjcgOS4zMTcgMTIuNCAxMC4xMTcgQyAxMi45IDEwLjUxNyAxMy4xIDExLjIxNyAxMi45IDEyLjIxNyBaIj48L3BhdGg+PHBhdGggZmlsbD0iIzAwMzA4NyIgZD0iTSAzNS4yIDEyLjExNyBMIDMxLjUgMTIuMTE3IEMgMzEuMiAxMi4xMTcgMzAuOSAxMi4zMTcgMzAuOSAxMi42MTcgTCAzMC43IDEzLjYxNyBMIDMwLjQgMTMuMjE3IEMgMjkuNiAxMi4wMTcgMjcuOCAxMS42MTcgMjYgMTEuNjE3IEMgMjEuOSAxMS42MTcgMTguNCAxNC43MTcgMTcuNyAxOS4xMTcgQyAxNy4zIDIxLjMxNyAxNy44IDIzLjQxNyAxOS4xIDI0LjgxNyBDIDIwLjIgMjYuMTE3IDIxLjkgMjYuNzE3IDIzLjggMjYuNzE3IEMgMjcuMSAyNi43MTcgMjkgMjQuNjE3IDI5IDI0LjYxNyBMIDI4LjggMjUuNjE3IEMgMjguNyAyNi4wMTcgMjkgMjYuNDE3IDI5LjQgMjYuNDE3IEwgMzIuOCAyNi40MTcgQyAzMy4zIDI2LjQxNyAzMy44IDI2LjAxNyAzMy45IDI1LjUxNyBMIDM1LjkgMTIuNzE3IEMgMzYgMTIuNTE3IDM1LjYgMTIuMTE3IDM1LjIgMTIuMTE3IFogTSAzMC4xIDE5LjMxNyBDIDI5LjcgMjEuNDE3IDI4LjEgMjIuOTE3IDI1LjkgMjIuOTE3IEMgMjQuOCAyMi45MTcgMjQgMjIuNjE3IDIzLjQgMjEuOTE3IEMgMjIuOCAyMS4yMTcgMjIuNiAyMC4zMTcgMjIuOCAxOS4zMTcgQyAyMy4xIDE3LjIxNyAyNC45IDE1LjcxNyAyNyAxNS43MTcgQyAyOC4xIDE1LjcxNyAyOC45IDE2LjExNyAyOS41IDE2LjcxNyBDIDMwIDE3LjQxNyAzMC4yIDE4LjMxNyAzMC4xIDE5LjMxNyBaIj48L3BhdGg+PHBhdGggZmlsbD0iIzAwMzA4NyIgZD0iTSA1NS4xIDEyLjExNyBMIDUxLjQgMTIuMTE3IEMgNTEgMTIuMTE3IDUwLjcgMTIuMzE3IDUwLjUgMTIuNjE3IEwgNDUuMyAyMC4yMTcgTCA0My4xIDEyLjkxNyBDIDQzIDEyLjQxNyA0Mi41IDEyLjExNyA0Mi4xIDEyLjExNyBMIDM4LjQgMTIuMTE3IEMgMzggMTIuMTE3IDM3LjYgMTIuNTE3IDM3LjggMTMuMDE3IEwgNDEuOSAyNS4xMTcgTCAzOCAzMC41MTcgQyAzNy43IDMwLjkxNyAzOCAzMS41MTcgMzguNSAzMS41MTcgTCA0Mi4yIDMxLjUxNyBDIDQyLjYgMzEuNTE3IDQyLjkgMzEuMzE3IDQzLjEgMzEuMDE3IEwgNTUuNiAxMy4wMTcgQyA1NS45IDEyLjcxNyA1NS42IDEyLjExNyA1NS4xIDEyLjExNyBaIj48L3BhdGg+PHBhdGggZmlsbD0iIzAwOWNkZSIgZD0iTSA2Ny41IDQuOTE3IEwgNTkuNyA0LjkxNyBDIDU5LjIgNC45MTcgNTguNyA1LjMxNyA1OC42IDUuODE3IEwgNTUuNSAyNS43MTcgQyA1NS40IDI2LjExNyA1NS43IDI2LjQxNyA1Ni4xIDI2LjQxNyBMIDYwLjEgMjYuNDE3IEMgNjAuNSAyNi40MTcgNjAuOCAyNi4xMTcgNjAuOCAyNS44MTcgTCA2MS43IDIwLjExNyBDIDYxLjggMTkuNjE3IDYyLjIgMTkuMjE3IDYyLjggMTkuMjE3IEwgNjUuMyAxOS4yMTcgQyA3MC40IDE5LjIxNyA3My40IDE2LjcxNyA3NC4yIDExLjgxNyBDIDc0LjUgOS43MTcgNzQuMiA4LjAxNyA3My4yIDYuODE3IEMgNzIgNS42MTcgNzAuMSA0LjkxNyA2Ny41IDQuOTE3IFogTSA2OC40IDEyLjIxNyBDIDY4IDE1LjAxNyA2NS44IDE1LjAxNyA2My44IDE1LjAxNyBMIDYyLjYgMTUuMDE3IEwgNjMuNCA5LjgxNyBDIDYzLjQgOS41MTcgNjMuNyA5LjMxNyA2NCA5LjMxNyBMIDY0LjUgOS4zMTcgQyA2NS45IDkuMzE3IDY3LjIgOS4zMTcgNjcuOSAxMC4xMTcgQyA2OC40IDEwLjUxNyA2OC41IDExLjIxNyA2OC40IDEyLjIxNyBaIj48L3BhdGg+PHBhdGggZmlsbD0iIzAwOWNkZSIgZD0iTSA5MC43IDEyLjExNyBMIDg3IDEyLjExNyBDIDg2LjcgMTIuMTE3IDg2LjQgMTIuMzE3IDg2LjQgMTIuNjE3IEwgODYuMiAxMy42MTcgTCA4NS45IDEzLjIxNyBDIDg1LjEgMTIuMDE3IDgzLjMgMTEuNjE3IDgxLjUgMTEuNjE3IEMgNzcuNCAxMS42MTcgNzMuOSAxNC43MTcgNzMuMiAxOS4xMTcgQyA3Mi44IDIxLjMxNyA3My4zIDIzLjQxNyA3NC42IDI0LjgxNyBDIDc1LjcgMjYuMTE3IDc3LjQgMjYuNzE3IDc5LjMgMjYuNzE3IEMgODIuNiAyNi43MTcgODQuNSAyNC42MTcgODQuNSAyNC42MTcgTCA4NC4zIDI1LjYxNyBDIDg0LjIgMjYuMDE3IDg0LjUgMjYuNDE3IDg0LjkgMjYuNDE3IEwgODguMyAyNi40MTcgQyA4OC44IDI2LjQxNyA4OS4zIDI2LjAxNyA4OS40IDI1LjUxNyBMIDkxLjQgMTIuNzE3IEMgOTEuNCAxMi41MTcgOTEuMSAxMi4xMTcgOTAuNyAxMi4xMTcgWiBNIDg1LjUgMTkuMzE3IEMgODUuMSAyMS40MTcgODMuNSAyMi45MTcgODEuMyAyMi45MTcgQyA4MC4yIDIyLjkxNyA3OS40IDIyLjYxNyA3OC44IDIxLjkxNyBDIDc4LjIgMjEuMjE3IDc4IDIwLjMxNyA3OC4yIDE5LjMxNyBDIDc4LjUgMTcuMjE3IDgwLjMgMTUuNzE3IDgyLjQgMTUuNzE3IEMgODMuNSAxNS43MTcgODQuMyAxNi4xMTcgODQuOSAxNi43MTcgQyA4NS41IDE3LjQxNyA4NS43IDE4LjMxNyA4NS41IDE5LjMxNyBaIj48L3BhdGg+PHBhdGggZmlsbD0iIzAwOWNkZSIgZD0iTSA5NS4xIDUuNDE3IEwgOTEuOSAyNS43MTcgQyA5MS44IDI2LjExNyA5Mi4xIDI2LjQxNyA5Mi41IDI2LjQxNyBMIDk1LjcgMjYuNDE3IEMgOTYuMiAyNi40MTcgOTYuNyAyNi4wMTcgOTYuOCAyNS41MTcgTCAxMDAgNS42MTcgQyAxMDAuMSA1LjIxNyA5OS44IDQuOTE3IDk5LjQgNC45MTcgTCA5NS44IDQuOTE3IEMgOTUuNCA0LjkxNyA5NS4yIDUuMTE3IDk1LjEgNS40MTcgWiI+PC9wYXRoPjwvc3ZnPg"
                      alt=""
                    />
                  </button>
                </div>
              </div>
              </div>
             
              <div className="mx-auto text-sm mt-4 border-b w-full text-center ITCGara ">
                OR
              </div>
              <div className="flex justify-between mt-[50px]">
                <div className="TradeGodthicCn">Contact</div>
                <div className=" text-sm TradeGodthicCn">
                  {" "}
                  Have an account?
                  <button className=" pl-2">Log in</button>
                </div>
              </div>
              <input
                placeholder="Email "
                className=" w-full border h-[46px] rounded p-1 px-3 mt-4 TradeGodthicCn"
              />
              <div className="flex items-center gap-2 mt-4">
                <input
                  type="checkbox"
                  className="w-4 h-4 text-black bg-gray-100 border-gray-300 rounded focus:ring-black dark:focus:ring-black dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <div className="text-gray-500 border-none  text-sm TradeGodthicCn">
                  {" "}
                  Email me with news and offers
                </div>
              </div>
              <div className=" text-lg mt-6 ITCGara">Shipping address</div>
              <input
                placeholder="Country"
                className="border w-full h-[46px] rounded p-1 px-3 mt-4  text-sm TradeGodthicCn"
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
                className="border w-full h-[46px] rounded p-1 px-3 mt-4  text-sm TradeGodthicCn"
              />
              <input
                placeholder="Apartment, suite, etc. (optional)"
                className="border w-full h-[46px] rounded p-1 px-3 mt-4  text-sm TradeGodthicCn"
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
                className="border w-full h-[46px] rounded p-1 px-3 mt-4  text-sm TradeGodthicCn"
              />
              <div className="flex items-center gap-2 mt-4">
                <input
                  type="checkbox"
                  className="w-4 h-4 text-black bg-gray-100 border-gray-300 rounded focus:ring-black dark:focus:ring-black dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 text-sm"
                />
                <div className="text-gray-500 border-none  text-sm TradeGodthicCn">
                  {" "}
                  Text me with news and offers
                </div>
              </div>
              <div className="flex justify-between items-center mt-4 border-b mb-4 pb-12">
                <div className="text-sm TradeGodthic-BoldCn">
                  {" "}
                  {"< "}Return to cart
                </div>
                <button className="bg-black text-white w-[188px] h-[60px] rounded  text-sm  TradeGodthicCn">
                  Continue to shipping
                </button>
              </div>
              <div className="flex text-sm">
                <a href="#" className="mr-4 TradeGodthicCn">
                  Refund policy
                </a>
                <a href="#" className="mr-4 TradeGodthicCn">
                  Privacy policy
                </a>
                <a href="#" className="TradeGodthicCn">
                  Terms of service
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="hidden xl:flex xl:w-2/5 bg-[#f48029] text-white flex-col">
        <div className="w-3/4 mx-auto mt-16">
          <div className="flex items-center  border-b border-[rgba(248,172,116,0.34)] pb-2">
            <img src="/images/payment/pay2.png" alt="" />
            <div className="w-3/4">
              <div className="ITCGara">D28 Compact | Reading Glasses</div>
              <div className="text-orange-200	 TradeGodthicCn">
                Camo / frq Blue-Light Filtering / 3.00
              </div>
            </div>
            <div className=" TradeGodthicCn mx-6 px-5 "> $130.00</div>
          </div>
          <div className="mt-6 gap-2 flex border-b border-[rgba(248,172,116,0.34)] pb-8">
            <input
              type="text"
              className="!bg-white outline-none rounded border-0 w-full h-[45px] TradeGodthicCn"
              placeholder="Discount code or gift card"
            />
            <button className="bg-[#f7a05f] outline-none rounded border-0 h-[45px] w-[80px] TradeGodthicCn">
              {" "}
              Apply
            </button>
          </div>
          <div className="mt-6 border-[rgba(248,172,116,0.34)] border-b pb-8">
            <div className="flex justify-between">
              <div className="text-sm text-orange-200	 TradeGodthicCn">
                Subtotal
              </div>
              <div className="text-sm TradeGodthicCn">$130.00</div>
            </div>
            <div className="flex justify-between">
              <div className="text-sm text-orange-200	 TradeGodthicCn">
                Shipping
              </div>
              <div className="text-sm text-orange-200	TradeGodthicCn">
                Calculated at next step
              </div>
            </div>
          </div>
          <div>
            <div className="flex justify-between mt-6">
              <div className=" text-white	 ITCGara">Total</div>
              <div className="flex ">
                <div className="text-sm mt-1 font-semibold mx-3 text-orange-200	 TradeGodthicCn">
                  USD{" "}
                </div>
                <div className="text-lg font-semibold TradeGodthicCn">
                  $130.000
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;

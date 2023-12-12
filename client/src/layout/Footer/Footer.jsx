    
    
    
    import { useState } from "react";
    
    
    
    
    const Footer = () => {

      const [email, setEmail] = useState("");
      const [message, setMessage] = useState("");
      const [, setSuccess] = useState(false);
      const [isValidEmail, setIsValidEmail] = useState(false);
    
      const emailValidation = () => {
        const regEx = /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}(\.[a-z]{2,8})?/;
        const isValid = regEx.test(email);
    
        if (email.trim() === "") {
          setMessage("Email address can't be empty");
        } else if (isValid) {
          setMessage(
            <>
              Thanks for Subscribing!
              <br />
              Check your email for a confirmation message.
            </>
          );
          setSuccess(true); // Thành công, ẩn input và button
          setIsValidEmail(true); // Email hợp lệ
        } else if (!isValid && email !== "") {
          setMessage("Please enter a valid email address");
          setIsValidEmail(false); // Email không hợp lệ
        } else {
          setMessage("");
        }
      };
    
      const handleOnChange = (e) => {
        setEmail(e.target.value);
        setIsValidEmail(false); // Reset lại trạng thái khi người dùng thay đổi nội dung input
      };
      
  return (
    <>
     <footer className="footer-section bg-black text-white" data-section-id="footer" data-section-type="footer-section">
          <div id="footer-wrapper" className="container lg:px-0 mx-auto">
            <div
              id="footer"
              className="row flex lg:flex-row flex-col flex-wrap pt-10 pb-0 px-4 lg:px-0 lg:pt-16 lg:pb-0 m-0 "
            >
              <div className="w-full flex lg:flex-row flex-col justify items-stretch">
                <section className="footer-company w-full md:w-3/4 lg:w-4/4 m-0 flex flex-col items-center lg:items-start lg:py-0 py-5 lg:pr-16 lg:order-none order-none">
                  <p className="h3  md:text-6xl m-0 ITCGara">Join the cult.</p>
    
                  <p className="m-0 TradeGodthicCn ">
                    For insider product info + age awesome content...sign up.
                  </p>
    
                  <div className="footer-company--newsletter flex flex-col w-full max-w-lg my-4">
                    <div className="klaviyo-form-RZNiRy klaviyo-form form-version-cid-1">
                      <div
                        className="needsclick  kl-private-reset-css-Xuajs1"
                        style={{ transform: "translate(0px, 0px)" }}
                      >
                       <form
  className="needsclick klaviyo-form klaviyo-form-version-cid_1 kl-private-reset-css-Xuajs1"
  tabIndex="-1"
  style={{
    display: "flex",
    flexDirection: "row",
    width: "100%",
    overflow: "visible",
    margin: "0px auto",
    borderRadius: "0px",
    borderStyle: "none",
    borderWidth: "0px",
    borderColor: "rgb(0, 0, 0)",
    backgroundColor: "rgba(255, 255, 255, 0)",
    backgroundRepeat: "no-repeat",
    backgroundPositionY: "50%",
    padding: "0px",
    flex: "1 1 0%",
  }}
>
  <div
    className="needsclick  kl-private-reset-css-Xuajs1"
    style={{
      display: "flex",
      flexDirection: "column",
      width: "100%",
      margin: "0px",
      padding: "0px",
      minHeight: "70px",
      justifyContent: "center",
    }}
  >
    <div
      className="needsclick  kl-private-reset-css-Xuajs1"
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "stretch",
        position: "relative",
      }}
    >
      <div
        data-testid="form-component"
        className="needsclick  kl-private-reset-css-Xuajs1"
        style={{
          display: "flex",
          justifyContent: "flex-start",
          padding: "32px 0px 31px",
          position: "relative",
          flex: "1 0 0px",
        }}
      >
        <div
          className="needsclick  kl-private-reset-css-Xuajs1"
          style={{
            display: "flex",
            flexGrow: 1,
            flexDirection: "column",
            alignSelf: "flex-end",
          }}
        >
          <input
            id="email_58004580"
            className="needsclick go966669512 kl-private-reset-css-Xuajs1"
            type="email"
            autoComplete="email"
            name="email"
            tabIndex="0"
            placeholder="Enter Email Address"
            value={email}
            onChange={handleOnChange}
            style={{
              boxSizing: "border-box",
              borderRadius: "0px",
              padding: "0px 0px 0px 16px",
              height: "54px",
              textAlign: "left",
              color: "rgb(0, 0, 0)",
              fontFamily: [
                "Trade Gothic Next LT Pro Cn",
                "Arial",
                "Helvetica Neue",
                "Helvetica",
                "sansSerif",
              ],
              fontSize: "20px",
              fontWeight: "300",
              letterSpacing: "0px",
              backgroundColor: "rgb(255, 255, 255)",
              border: "1px solid rgb(208, 51, 31)",
            }}
          />
          <div
            className="needsclick kl-private-reset-css-Xuajs1"
            style={{ width: "100%", position: "relative" }}
          >
            <div
              className="needsclick kl-private-reset-css-Xuajs1"
              style={{
                backgroundColor: "white",
                position: "absolute",
                zIndex: "1",
                right: "0px",
                borderRadius: "4px",
                animation: "0.4s ease 0s 1 normal none running klaviyo-fadein",
                top: "9px",
              }}
            >
              <div
                className="needsclick go3298969293 kl-private-reset-css-Xuajs1"
                style={{
                  borderRadius: "4px",
                  boxShadow: "rgba(0, 0, 0, 0.26) 1px 1px 4px 0px",
                  border: "1px solid rgb(208, 51, 31)",
                  backgroundColor: "rgb(255, 244, 240)",
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>
      <div
        data-testid="form-component"
        className="needsclick kl-private-reset-css-Xuajs1"
        style={{
          display: "flex",
          justifyContent: "flexStart",
          padding: "31px 0px 32px",
          position: "relative",
          backgroundColor: "rgba(255, 255, 255, 0)",
          flex: "0 1 auto",
          margin: "0px auto",
        }}
      >
        <button
          className="needsclick go407975473 kl-private-reset-css-Xuajs1"
          type="button"
          tabIndex="0"
          style={{
            background: "rgb(244, 128, 41)",
            borderRadius: "0px",
            borderStyle: "none",
            borderColor: "rgb(29, 29, 29)",
            borderWidth: "2px",
            color: "rgb(0, 0, 0)",
            fontFamily: "TradeGothicNextBoldCondensed",
            fontSize: "20px",
            fontWeight: "700",
            letterSpacing: "0px",
            lineHeight: "1",
            whiteSpace: "normal",
            padding: "0px 10px",
            textAlign: "center",
            wordBreak: "breakWord",
            alignSelf: "flexEnd",
            cursor: "pointer",
            height: "54px",
          }}
          onClick={emailValidation}
        >
          SIGN UP 
        </button>
      </div>
    </div>
    <input type="submit" tabIndex="-1" value="Submit" style={{ display: "none" }} />
  </div>
</form>
<p className={`message font-semibold ${isValidEmail ? "text-white" : "text-red-500"}`}>
  {message}
</p>

                      </div>
                    </div>
                  </div>
    
                  <div className="hidden md:flex flex-col items-center md:items-start mt-2">
                    <p className="tracking-wider mb-2 TradeGodthicCn ">QUESTIONS? CONTACT US</p>
    
                    <div
                      className="flex  justify-start items-center "
                   style={{color: "transparent"}}
                    >
                     <img src="/images/icons/mail.png" alt="" className="w-5 h-5 m-2 " />
    
                      <a
                        className="m-0 TradeGodthicCn text-white"
                        href=""
                      >
                        nhom3@prodigy.com
                      </a>
                    </div>
    
                    <div
                      className="flex justify-start items-center"
                      style={{color: "transparent",}}
                    >
          
                      <img src="/images/icons/phone.png" alt=""  className="w-6 h-6 m-2"/>

                      <span className="sr-only TradeGodthicCn">Contact</span>
    
                      <p className="m-0 TradeGodthicCn text-white">(+123) 456-7899</p>
                    </div>
                  </div>
                </section>
    
                <div className="footer-menu flex flex-col lg:flex-grow lg:w-1/3 lg:order-none order-none ">
                  <ul className="list-none m-0 lg:mr-20 p-0">
                    <li className="flex-auto flex-basis-0 p-0 lg:mb-4">
                      <div
                        className="group w-full footer-menu m-0 border-b lg:border-b-0 border-gray-400 lg:mb-0"
                       
                      >
                        <div className="flex lg:cursor-default cursor-pointer items-center justify-between w-full border-none bg-transparent color-white font-normal accordion-title py-5 lg:py-0 ">
                          <span className="block h5 text-xl lg:text-3xl m-0 font-subheading lg:mb-4 ITCGara">
                            Shop
                          </span>
                          <span className="w-8 text-right text-currentColor icon-plus lg:hidden">
                            <svg
                              className="icon   icon-plus"
                              width="24"
                              height="24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="1"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <use xlinkHref="#icon-def-plus"></use>
                            </svg>
                            <span className="sr-only">plus</span>
                          </span>
                          <span className="w-8 text-right text-currentColor icon-minus lg:hidden">
                            <svg
                              className="icon   icon-minus"
                              width="24"
                              height="24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="1"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <use xlinkHref="#icon-def-minus"></use>
                            </svg>
                            <span className="sr-only">minus</span>
                          </span>
                        </div>
                        <ul className="list-none m-0 p-0 max-h-0 lg:max-h-full group-active:max-h-full overflow-hidden">
                          <li className="flex-auto flex-basis-0 p-0 mb-3">
                            <a
                              className="block hover:opacity-70 leading-normal font-body text-md TradeGodthicCn"
                              href="/collections/eye-appliances"
                            >
                              Readers
                            </a>
                          </li>
                          <li className="flex-auto flex-basis-0 p-0 mb-3">
                            <a
                              className="block hover:opacity-70 leading-normal font-body text-md TradeGodthicCn"
                              href="/pages/sun-options"
                            >
                              Sunglasses
                            </a>
                          </li>
                          <li className="flex-auto flex-basis-0 p-0 mb-3">
                            <a
                              className="block hover:opacity-70 leading-normal font-body text-md TradeGodthicCn"
                              href="/collections/rx"
                            >
                              Prescription
                            </a>
                          </li>
                          <li className="flex-auto flex-basis-0 p-0 mb-6">
                            <a
                              className="block hover:opacity-70 leading-normal font-body text-md TradeGodthicCn"
                              href="/collections/accessories"
                            >
                              Accessories
                            </a>
                          </li>
                        </ul>
                      </div>
                    </li>
                  </ul>
                </div>
    
                <div className="footer-menu flex flex-col lg:flex-grow lg:w-1/3 lg:order-none order-none ">
                  <ul className="list-none m-0 lg:mr-20 p-0">
                    <li className="flex-auto flex-basis-0 p-0 lg:mb-4">
                      <div
                        className="group w-full footer-menu m-0 border-b lg:border-b-0 border-gray-400 lg:mb-0"
                        
                      >
                        <div className="flex lg:cursor-default cursor-pointer items-center justify-between w-full border-none bg-transparent color-white font-normal accordion-title py-5 lg:py-0">
                          <span className="block h5 text-xl lg:text-3xl m-0 font-subheading lg:mb-4 ITCGara">
                            Discover
                          </span>
                          <span className="w-8 text-right text-currentColor icon-plus lg:hidden">
                            <svg
                              className="icon   icon-plus"
                              width="24"
                              height="24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="1"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <use xlinkHref="#icon-def-plus"></use>
                            </svg>
                            <span className="sr-only">plus</span>
                          </span>
                          <span className="w-8 text-right text-currentColor icon-minus lg:hidden">
                            <svg
                              className="icon   icon-minus"
                              width="24"
                              height="24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="1"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <use xlinkHref="#icon-def-minus"></use>
                            </svg>
                            <span className="sr-only">minus</span>
                          </span>
                        </div>
                        <ul className="list-none m-0 p-0 max-h-0 lg:max-h-full group-active:max-h-full overflow-hidden">
                          <li className="flex-auto flex-basis-0 p-0 mb-3">
                            <a
                              className="block hover:opacity-70 leading-normal font-body text-md TradeGodthicCn"
                              href=""
                            >
                              About Us
                            </a>
                          </li>
                          <li className="flex-auto flex-basis-0 p-0 mb-3">
                            <a
                              className="block hover:opacity-70 leading-normal font-body text-md TradeGodthicCn"
                              href=""
                            >
                              Find a Store
                            </a>
                          </li>
                          <li className="flex-auto flex-basis-0 p-0 mb-3">
                            <a
                              className="block hover:opacity-70 leading-normal font-body text-md TradeGodthicCn"
                              href=""
                            >
                              Prodigy NYC Store
                            </a>
                          </li>
                          <li className="flex-auto flex-basis-0 p-0 mb-3">
                            <a
                              className="block hover:opacity-70 leading-normal font-body text-md TradeGodthicCn"
                              href=""
                            >
                              Readers 101
                            </a>
                          </li>
                          <li className="flex-auto flex-basis-0 p-0 mb-3">
                            <a
                              className="block hover:opacity-70 leading-normal font-body text-md TradeGodthicCn"
                              href=""
                            >
                              Architects &amp,Custodians
                            </a>
                          </li>
                          <li className="flex-auto flex-basis-0 p-0 mb-3">
                            <a
                              className="block hover:opacity-70 leading-normal font-body text-md TradeGodthicCn"
                              href=""
                            >
                              Collaborations
                            </a>
                          </li>
                          <li className="flex-auto flex-basis-0 p-0 mb-6">
                            <a
                              className="block hover:opacity-70 leading-normal font-body text-md TradeGodthicCn"
                              href=""
                            >
                              Give 20%, Get 20%
                            </a>
                          </li>
                        </ul>
                      </div>
                    </li>
                  </ul>
                </div>
    
                <div className="footer-menu flex flex-col lg:flex-grow lg:w-1/3 lg:order-none order-none ">
                  <ul className="list-none m-0 lg:mr-20 p-0">
                    <li className="flex-auto flex-basis-0 p-0 lg:mb-4">
                      <div
                        className="group w-full footer-menu m-0 border-b lg:border-b-0 border-gray-400 lg:mb-0"
                        
                      >
                        <div className="flex lg:cursor-default cursor-pointer items-center justify-between w-full border-none bg-transparent color-white font-normal accordion-title py-5 lg:py-0">
                          <span className="block h5 text-xl lg:text-3xl m-0 font-subheading lg:mb-4 ITCGara">
                            Help
                          </span>
                          <span className="w-8 text-right text-currentColor icon-plus lg:hidden">
                            <svg
                              className="icon   icon-plus"
                              width="24"
                              height="24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="1"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <use xlinkHref="#icon-def-plus"></use>
                            </svg>
                            <span className="sr-only">plus</span>
                          </span>
                          <span className="w-8 text-right text-currentColor icon-minus lg:hidden">
                            <svg
                              className="icon   icon-minus"
                              width="24"
                              height="24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="1"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <use xlinkHref="#icon-def-minus"></use>
                            </svg>
                            <span className="sr-only">minus</span>
                          </span>
                        </div>
                        <ul className="list-none m-0 p-0 max-h-0 lg:max-h-full group-active:max-h-full overflow-hidden">
                          <li className="flex-auto flex-basis-0 p-0 mb-3">
                            <a
                              className="block hover:opacity-70 leading-normal font-body text-md TradeGodthicCn"
                              href=""
                            >
                              FAQ
                            </a>
                          </li>
                          <li className="flex-auto flex-basis-0 p-0 mb-3">
                            <a
                              className="block hover:opacity-70 leading-normal font-body text-md TradeGodthicCn"
                              href="/pages/warranty"
                            >
                              Warranty
                            </a>
                          </li>
                          <li className="flex-auto flex-basis-0 p-0 mb-3">
                            <a
                              className="block hover:opacity-70 leading-normal font-body text-md TradeGodthicCn"
                              href=""
                            >
                              Become an Affiliate
                            </a>
                          </li>
                          <li className="flex-auto flex-basis-0 p-0 mb-3">
                            <a
                              className="block hover:opacity-70 leading-normal font-body text-md TradeGodthicCn"
                              href=""
                            >
                              Become a Stockist
                            </a>
                          </li>
                          <li className="flex-auto flex-basis-0 p-0 mb-6">
                            <a
                              className="block hover:opacity-70 leading-normal font-body text-md TradeGodthicCn"
                              href=""
                            >
                              FSA/HSA Cards
                            </a>
                          </li>
                        </ul>
                      </div>
                    </li>
                  </ul>
                </div>
    
                <div className="footer-menu flex flex-col lg:flex-grow lg:w-1/3 lg:order-none order-none ">
                  <ul className="list-none m-0 lg:mr-20 p-0">
                    <li className="flex-auto flex-basis-0 p-0 lg:mb-4">
                      <div
                        className="group w-full footer-menu m-0 border-b lg:border-b-0 border-gray-400 lg:mb-0"
                      
                      >
                        <div className="flex lg:cursor-default cursor-pointer items-center justify-between w-full border-none bg-transparent color-white font-normal accordion-title py-5 lg:py-0">
                          <span className="block h5 text-xl lg:text-3xl m-0 font-subheading lg:mb-4 ITCGara">
                            Returns
                          </span>
                          <span className="w-8 text-right text-currentColor icon-plus lg:hidden">
                            <svg
                              className="icon   icon-plus"
                              width="24"
                              height="24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="1"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <use xlinkHref="#icon-def-plus"></use>
                            </svg>
                            <span className="sr-only">plus</span>
                          </span>
                          <span className="w-8 text-right text-currentColor icon-minus lg:hidden">
                            <svg
                              className="icon   icon-minus"
                              width="24"
                              height="24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="1"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <use xlinkHref="#icon-def-minus"></use>
                            </svg>
                            <span className="sr-only">minus</span>
                          </span>
                        </div>
                        <ul className="list-none m-0 p-0 max-h-0 lg:max-h-full group-active:max-h-full overflow-hidden">
                          <li className="flex-auto flex-basis-0 p-0 mb-6">
                            <a
                              className="block hover:opacity-70 leading-normal font-body text-md TradeGodthicCn"
                            >
                     Start a Return or Exchange
                            </a>
                          </li>
                        </ul>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
    
            <div
              id="bottom-footer"
              className="sub-footer lg:flex-row flex-col flex-wrap items-center lg:items-start row text-left lg:pt-0 lg:p-0 py-5 px-4 justify-center lg:justify-start"
            >
              <div className="md:hidden flex flex-col items-center md:items-start border-b lg:border-b-0 border-gray-400 pt-4 pb-7">
                <p className="tracking-wider mb- TradeGodthicCn">QUESTIONS? CONTACT US</p>
    
                <div
                  className="flex justify-start items-center"
                  style={{ color: "transparent" }}
                >
                   <img src="/images/icons/mail.png" alt="" className="w-6 h-6 m-2  " />
                  <span className="sr-only TradeGodthicCn">Contact</span>
    
                  <a
                    className="m-0 underline TradeGodthicCn text-white"
                    href=""
                  >
                     nhom3@prodigy.com
                  </a>
                </div>
    
                <div
                  className="flex justify-start items-center "
                  style={{ color: "transparent" }}
                >
                 <img src="/images/icons/phone.png" alt=""  className="w-6 h-6 m-2 " />
                  <span className="sr-only TradeGodthicCn">Contact</span>
    
                  <p className="m-0   TradeGodthicCn text-white">(+123) 456-7899</p>
                </div>
              </div>
    
              <div className="flex lg:flex-row-reverse flex-col items-center lg:items-center lg:justify-between lg:px-0 lg:pt-10">
                <div
                  id="socialFooter"
                  className="flex lg:flex-row flex-col lg:px-2 lg:py-10 px-4 py-5 "
                >
                  <ul
                    id="social-icons"
                    className="list-none flex flex-row items-center m-0 p-0"
                  >
                    <li>
                      <a
                        href=""
                        className="link block hover:opacity-50 no-underline mx-5  md:mr-6"
                        style={{ textDecoration: "none", color: "transparent" }}
                        rel=""
                      >
                        <img src="/images/icons/facebook-fill.svg" alt="Icons" className="w-7 h-7 rounded-full bg-yellow-500 hover:bg-yellow-600 mx-1 inline-block pt-1"/>
                        <span className="sr-only">Facebook</span>
                      </a>
                    </li>
    
                    <li>
                      <a
                        href=""
                        className="link block hover:opacity-50 no-underline mx-2 md:mr-6"
                        style={{ textDecoration: "none", color: "transparent" }}
                        target="_blank"
                        rel=""
                      >
                       <img src= "/images/icons/pinterest-fill.svg" alt="Icons"className="w-7 h-7 rounded-full bg-yellow-500 hover:bg-yellow-600 mx-1 inline-block pt-1" />
                        <span className="sr-only">Pinterest</span>
                      </a>
                    </li>
    
                    <li>
                      <a
                        href=""
                        className="link block hover:opacity-50 no-underline mx-2 md:mr-6"
                        style={{ textDecoration: "none", color: "transparent " }}
                        target="_blank"
                        rel=""
                      >
                       <img src="/images/icons/instagram-line.svg" alt="Icons" className="w-7 h-7 rounded-full bg-yellow-500 hover:bg-yellow-600 mx-1 inline-block pt-1" />
                        <span className="sr-only">Instagram</span>
                      </a>
                    </li>
    
                    <li>
                      <a
                        href=""
                        className="link block hover:opacity-50 no-underline mx-2 md:mr-6"
                        style={{ textDecoration: "none", color: "transparent" }}
                        target="_blank"
                        rel=""
                        
                      >
                        <img src="/images/icons/youtube-fill.svg" alt="Icons" className="w-7 h-7 rounded-full bg-yellow-500 hover:bg-yellow-600 mx-1 inline-block pt-1" />
                        <span className="sr-only">YouTube</span>
                      </a>
                    </li>
                  </ul>
                </div>
                            
                <div className="footer-logo max-w-full">
                  
                <p className="h3 text-3xl md:text-5xl font-semibold  TradeGodthicCn">PRODIGY</p>
                </div>
    
                <ul className="list-none m-0 p-0 flex flex-row items-start justify-center gap-4 lg:justify-start text-xs lg:order-2 order-1">
                  <li className="lg:mr-4">
                    <a
                      className="block hover:opacity-70 animate leading-normal py-3 lg:p-0 text-xs white hover:underline TradeGodthicCn"
                      href=""
                    >
                      Privacy Policy
                    </a>
                  </li>
    
                  <li className="lg:mr-4">
                    <a
                      className="block hover:opacity-70 animate leading-normal py-3 lg:p-0 text-xs white hover:underline TradeGodthicCn"
                      href=""
                    >
                      Accessibility Statement
                    </a>
                  </li>
    
                  <li className="lg:mr-4">
                    <a
                      className="block hover:opacity-70 animate leading-normal py-3 lg:p-0 text-xs white hover:underline TradeGodthicCn"
                      href=""
                    >
                      Terms of Service
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          </footer>
    </>
  );
};

export default Footer;

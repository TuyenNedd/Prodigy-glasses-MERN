import "./style.scss";
import { MailFilled, PhoneFilled } from "@ant-design/icons";
const Footer = () => {
  return (
    <>
      <footer className="footer-section TradeGodthicCn text-base">
        <div id="footer-wrapper" className="container lg:px-8 mx-auto">
          <div
            id="footer"
            className="row flex lg:flex-row flex-col flex-wrap pt-10 pb-0 px-4 lg:px-0 lg:pt-16 lg:pb-0"
          >
            <div className="w-full flex lg:flex-row flex-col justify items-stretch">
              <section className="footer-company w-full lg:w-4/4 m-0 flex flex-col items-center lg:items-start lg:py-0 py-5 lg:pr-16 lg:order-none order-none">
                <p className="h3 text-[40px] md:text-6xl m-0 ITCGara leading-none">
                  Join the cult.
                </p>

                <p className="m-0">
                  For insider product info + age awesome content...sign up.
                </p>

                <div className="footer-company--newsletter flex flex-col w-full max-w-lg my-4">
                  <div>
                    <div className="needsclick ">
                      <form
                        className="needsclick"
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          width: "100%",
                          overflow: "visible",
                          margin: "0px auto",
                          borderRa: "0px",
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
                          className="needsclick "
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            width: "100%",
                            margin: "0px",
                            padding: "0px",
                            minHeight: " 70px",
                            justifyContent: "center",
                          }}
                        >
                          <div
                            className="needsclick "
                            style={{
                              display: "flex",
                              flexDirection: "row",
                              alignItems: "stretch",
                              position: "relative",
                            }}
                          >
                            <div
                              className="needsclick "
                              style={{
                                display: "flex",
                                justifyContent: "flex-start",
                                position: "relative",
                                flex: "1 0 0px",
                              }}
                            >
                              <div
                                className="needsclick "
                                style={{
                                  display: "flex",
                                  flexGrow: 1,
                                  flexDirection: "column",
                                  alignSelf: "flex-end",
                                }}
                              >
                                <input
                                  className="needsclick "
                                  type="email"
                                  autoComplete="email"
                                  name="email"
                                  placeholder="Enter Email Address"
                                  style={{
                                    boxSizing: "border-box",
                                    borderRadius: "0px",
                                    padding: "0px 0px 0px 16px",
                                    height: "54px",
                                    textAlign: "left",
                                    color: "rgb(0, 0, 0)",
                                    fontSize: "20px",
                                    fontWeight: 300,
                                    letterSpacing: "0px",
                                    backgroundColor: "rgb(255, 255, 255)",
                                    border: "1px solid rgba(180, 187, 195, 0)",
                                  }}
                                />
                                <div
                                  className="needsclick "
                                  style={{
                                    width: "100%",
                                    position: "relative",
                                  }}
                                ></div>
                              </div>
                            </div>
                            <div
                              className="needsclick "
                              style={{
                                display: "flex",
                                justifyContent: "flex-start",
                                position: "relative",
                                backgroundColor: "rgba(255, 255, 255, 0)",
                                flex: "0 1 auto",
                                margin: "0px auto",
                              }}
                            >
                              <button
                                className="needsclick px-8 tracking-wider"
                                type="button"
                                style={{
                                  background: "var(--primaryColor)",
                                  borderRadius: "0px",
                                  borderStyle: "none",
                                  borderColor: " rgb(29, 29, 29)",
                                  borderWidth: "2px",
                                  color: "black",
                                  fontSize: "20px",
                                  fontWeight: "700",
                                  letterSpacing: "0px",
                                  lineHeight: "1",
                                  whiteSpace: "normal",
                                  textAlign: "center",
                                  cursor: "pointer",
                                  height: "54px",
                                }}
                              >
                                SIGN UP
                              </button>
                            </div>
                          </div>
                        </div>
                        <input
                          type="submit"
                          value="Submit"
                          style={{ display: "none" }}
                        />
                      </form>
                    </div>
                  </div>
                </div>

                <div className="hidden md:flex flex-col items-center md:items-start mt-10">
                  <p className="tracking-wider mb-2">QUESTIONS? CONTACT US</p>

                  <div
                    className="flex justify-start items-center"
                    style={{ color: "transparent" }}
                  >
                    <MailFilled className="text-white text-lg mr-2" />
                    <span className="sr-only">Contact</span>

                    <a className="m-0">prodigyglasses@gmail.com</a>
                  </div>

                  <div
                    className="flex justify-start items-center"
                    style={{ color: "transparent" }}
                  >
                    <PhoneFilled className="text-white text-lg mr-2" />
                    <span className="sr-only">Contact</span>

                    <p className="m-0">(014)09-02023</p>
                  </div>
                </div>
              </section>

              <div className="footer-menu flex flex-col lg:flex-grow lg:w-1/3 lg:order-none order-none ">
                <ul className="list-none m-0 lg:mr-20 p-0">
                  <li className="flex-auto flex-basis-0 p-0 lg:mb-4">
                    <div className="group w-full footer-menu m-0 border-b lg:border-b-0 border-gray-400 lg:mb-0">
                      <div className="flex lg:cursor-default cursor-pointer items-center justify-between w-full border-none bg-transparent color-white font-normal accordion-title py-5 lg:py-0">
                        <span className="block h5 text-2xl lg:text-3xl m-0 font-subheading lg:mb-4 ITCGara">
                          Shop
                        </span>
                      </div>
                      <ul className="list-none m-0 p-0 max-h-0 lg:max-h-full group-active:max-h-full overflow-hidden">
                        <li className="flex-auto flex-basis-0 p-0 mb-3">
                          <a className="block hover:opacity-70 hover:text-white leading-normal font-body text-md">
                            Readers
                          </a>
                        </li>
                        <li className="flex-auto flex-basis-0 p-0 mb-3">
                          <a className="block hover:opacity-70 hover:text-white leading-normal font-body text-md">
                            Sunglasses
                          </a>
                        </li>
                        <li className="flex-auto flex-basis-0 p-0 mb-3">
                          <a className="block hover:opacity-70 hover:text-white leading-normal font-body text-md">
                            Prescription
                          </a>
                        </li>
                        <li className="flex-auto flex-basis-0 p-0 mb-6">
                          <a className="block hover:opacity-70 hover:text-white leading-normal font-body text-md">
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
                    <div className="group w-full footer-menu m-0 border-b lg:border-b-0 border-gray-400 lg:mb-0">
                      <div className="flex lg:cursor-default cursor-pointer items-center justify-between w-full border-none bg-transparent color-white font-normal accordion-title py-5 lg:py-0">
                        <span className="block h5 text-2xl lg:text-3xl m-0 font-subheading lg:mb-4 ITCGara ">
                          Discover
                        </span>
                      </div>
                      <ul className="list-none m-0 p-0 max-h-0 lg:max-h-full group-active:max-h-full overflow-hidden">
                        <li className="flex-auto flex-basis-0 p-0 mb-3">
                          <a className="block hover:opacity-70 hover:text-white leading-normal font-body text-md">
                            About Us
                          </a>
                        </li>
                        <li className="flex-auto flex-basis-0 p-0 mb-3">
                          <a className="block hover:opacity-70 hover:text-white leading-normal font-body text-md">
                            Find a Store
                          </a>
                        </li>
                        <li className="flex-auto flex-basis-0 p-0 mb-3">
                          <a className="block hover:opacity-70 hover:text-white leading-normal font-body text-md">
                            Caddis NYC Store
                          </a>
                        </li>
                        <li className="flex-auto flex-basis-0 p-0 mb-3">
                          <a className="block hover:opacity-70 hover:text-white leading-normal font-body text-md">
                            Readers 101
                          </a>
                        </li>
                        <li className="flex-auto flex-basis-0 p-0 mb-3">
                          <a className="block hover:opacity-70 hover:text-white leading-normal font-body text-md">
                            Architects &amp; Custodians
                          </a>
                        </li>
                        <li className="flex-auto flex-basis-0 p-0 mb-3">
                          <a className="block hover:opacity-70 hover:text-white leading-normal font-body text-md">
                            Collaborations
                          </a>
                        </li>
                        <li className="flex-auto flex-basis-0 p-0 mb-6">
                          <a className="block hover:opacity-70 hover:text-white leading-normal font-body text-md">
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
                    <div className="group w-full footer-menu m-0 border-b lg:border-b-0 border-gray-400 lg:mb-0">
                      <div className="flex lg:cursor-default cursor-pointer items-center justify-between w-full border-none bg-transparent color-white font-normal accordion-title py-5 lg:py-0">
                        <span className="block h5 text-2xl lg:text-3xl m-0 font-subheading lg:mb-4 ITCGara">
                          Help
                        </span>
                      </div>
                      <ul className="list-none m-0 p-0 max-h-0 lg:max-h-full group-active:max-h-full overflow-hidden">
                        <li className="flex-auto flex-basis-0 p-0 mb-3">
                          <a className="block hover:opacity-70 hover:text-white leading-normal font-body text-md">
                            FAQ
                          </a>
                        </li>
                        <li className="flex-auto flex-basis-0 p-0 mb-3">
                          <a className="block hover:opacity-70 hover:text-white leading-normal font-body text-md">
                            Warranty
                          </a>
                        </li>
                        <li className="flex-auto flex-basis-0 p-0 mb-3">
                          <a className="block hover:opacity-70 hover:text-white leading-normal font-body text-md">
                            Become an Affiliate
                          </a>
                        </li>
                        <li className="flex-auto flex-basis-0 p-0 mb-3">
                          <a className="block hover:opacity-70 hover:text-white leading-normal font-body text-md">
                            Become a Stockist
                          </a>
                        </li>
                        <li className="flex-auto flex-basis-0 p-0 mb-6">
                          <a className="block hover:opacity-70 hover:text-white leading-normal font-body text-md">
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
                    <div className="group w-full footer-menu m-0 border-b lg:border-b-0 border-gray-400 lg:mb-0">
                      <div className="flex lg:cursor-default cursor-pointer items-center justify-between w-full border-none bg-transparent color-white font-normal accordion-title py-5 lg:py-0">
                        <span className="block h5 text-2xl lg:text-3xl m-0 font-subheading lg:mb-4 ITCGara">
                          Returns
                        </span>
                      </div>
                      <ul className="list-none m-0 p-0 max-h-0 lg:max-h-full group-active:max-h-full overflow-hidden">
                        <li className="flex-auto flex-basis-0 p-0 mb-6">
                          <a className="block hover:opacity-70 hover:text-white leading-normal font-body text-md">
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
              <p className="tracking-wider mb-2">QUESTIONS? CONTACT US</p>

              <div
                className="flex justify-start items-center"
                style={{ color: "transparent" }}
              >
                <MailFilled className="text-white text-lg mr-2" />
                <span className="sr-only">Contact</span>

                <a className="m-0">prodigyglasses@gmail.com</a>
              </div>

              <div
                className="flex justify-start items-center"
                style={{ color: "transparent" }}
              >
                <PhoneFilled className="text-white text-lg mr-2" />
                <span className="sr-only">Contact</span>

                <p className="m-0">(014)019-02023</p>
              </div>
            </div>

            <div className="flex lg:flex-row-reverse flex-col items-center lg:items-center lg:justify-between lg:px-0 lg:pt-10">
              <div
                id="socialFooter"
                className="flex lg:flex-row flex-col lg:px-2 lg:py-10 px-4 py-5"
              >
                <ul
                  id="social-icons"
                  className="list-none flex flex-row items-center m-0 p-0"
                >
                  <li>
                    <a
                      className="link hover:opacity-50 no-underline mx-2 md:mr-6 bg-[var(--primaryColor)] rounded-full w-[30px] h-[30px] flex items-center justify-center"
                      style={{ textDecoration: "none", color: "transparent" }}
                      target="_blank"
                    >
                      <img
                        loading="lazy"
                        src="/images/facebook-icon.svg"
                        className="w-3/4"
                      />
                      <span className="sr-only">Facebook</span>
                    </a>
                  </li>

                  <li>
                    <a
                      className="link hover:opacity-50 no-underline mx-2 md:mr-6 bg-[var(--primaryColor)] rounded-full w-[30px] h-[30px] flex items-center justify-center"
                      style={{ textDecoration: "none", color: "transparent" }}
                      target="_blank"
                    >
                      <img
                        loading="lazy"
                        src="/images/pinterest-icon.svg"
                        className="w-3/4"
                      />
                      <span className="sr-only">Pinterest</span>
                    </a>
                  </li>

                  <li>
                    <a
                      className="link hover:opacity-50 no-underline mx-2 md:mr-6 bg-[var(--primaryColor)] rounded-full w-[30px] h-[30px] flex items-center justify-center"
                      style={{ textDecoration: "none", color: "transparent" }}
                      target="_blank"
                    >
                      <img
                        loading="lazy"
                        src="/images/instagram-icon.svg"
                        className="w-3/4"
                      />
                      <span className="sr-only">Instagram</span>
                    </a>
                  </li>

                  <li>
                    <a
                      className="link hover:opacity-50 no-underline mx-2 md:mr-6 bg-[var(--primaryColor)] rounded-full w-[30px] h-[30px] flex items-center justify-center"
                      style={{ textDecoration: "none", color: "transparent" }}
                      target="_blank"
                    >
                      <img
                        loading="lazy"
                        src="/images/youtube-icon.svg"
                        className="w-3/4"
                      />
                      <span className="sr-only">Instagram</span>
                    </a>
                  </li>
                </ul>
              </div>

              <div className="footer-logo max-w-full">
                <img
                  loading="lazy"
                  className="brightness-[100]"
                  src="/images/logo/pdglogo.svg"
                />
              </div>

              <ul className="list-none m-0 p-0 flex flex-row items-start justify-center gap-4 lg:justify-start text-xs lg:order-2 order-1">
                <li className="lg:mr-4">
                  <a className="block hover:opacity-70 hover:text-white animate leading-normal py-3 lg:p-0 text-xs white hover:underline">
                    Privacy Policy
                  </a>
                </li>

                <li className="lg:mr-4">
                  <a className="block hover:opacity-70 hover:text-white animate leading-normal py-3 lg:p-0 text-xs white hover:underline">
                    Accessibility Statement
                  </a>
                </li>

                <li className="lg:mr-4">
                  <a className="block hover:opacity-70 hover:text-white animate leading-normal py-3 lg:p-0 text-xs white hover:underline">
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

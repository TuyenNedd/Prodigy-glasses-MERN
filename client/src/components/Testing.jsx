import { useState, useEffect } from "react";
import AwwMenu from "./AwwMenu/AwwMenu.jsx";

const Testing = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  useEffect(() => {
    const nav_toggle = document.querySelector(".nav_toggle");
    const navMenuMobile = document.querySelector(".nav_menu-mobile");
    const bodyElement = document.querySelector("body");
    const navGlasses = document.querySelector(".navGlasses");
    const navSunglasses = document.querySelector(".navSunglasses");
    const glassesAccord = document.querySelector(".glassesAccord");
    const SunglassesAccord = document.querySelector(".SunglassesAccord");

    const handleClick = () => {
      navMenuMobile.classList.toggle("active");
      setIsMenuOpen(!isMenuOpen); // Đảo ngược trạng thái của menu
      if (isMenuOpen) {
        bodyElement.classList.remove("overflow-hidden");
      } else {
        bodyElement.classList.add("overflow-hidden");
      }
    };
    nav_toggle.addEventListener("click", handleClick);

    const glassesClick = () => {
      glassesAccord.classList.toggle("!block");
    };
    navGlasses.addEventListener("click", glassesClick);

    const SunGlassedClick = () => {
      SunglassesAccord.classList.toggle("!block");
    };
    navSunglasses.addEventListener("click", SunGlassedClick);

    return () => {
      // Remove the event listener when the component unmounts to prevent memory leaks.
      nav_toggle.removeEventListener("click", handleClick);
      navGlasses.removeEventListener("click", glassesClick);
      navSunglasses.removeEventListener("click", SunGlassedClick);
    };
  }, [isMenuOpen]);

  return (
    <>
      <header className="sticky top">
        <nav className="header_nav flex items-center justify-between h-16 lg:h-20 bg-white px-3 lg:p-0">
          <div className="nav_toggle lg:hidden TradeGodthic-BoldCm text-xs flex-1 h-full flex items-start flex-wrap justify-center flex-col">
            <button className="tracking-wider p-2">
              {" "}
              {isMenuOpen ? "CLOSE" : "MENU"}{" "}
              {/* Sử dụng biến state để hiển thị nội dung phù hợp */}
            </button>
          </div>

          <ul className="nav_menu hidden lg:flex h-full flex-1">
            <li className="nav_list flex items-center m-0">
              <a
                href="#!"
                className="nav_link flex justify-center py-4 px-5 pl-9 text-sm"
              >
                <span className="nav_name tracking-wider">GLASSES</span>
              </a>
            </li>
            <li className="nav_list nav_list_menu flex items-center m-0 ">
              <a
                href="#!"
                className="nav_link flex justify-center py-4 px-5 text-sm"
              >
                <span className="nav_name tracking-wider">SUNGLASSES</span>
              </a>
              <div className="dropdown">
                <div className="dropdown-inner grid grid-cols-[repeat(auto-fit,minmax(20rem,1fr))] gap-4 p-8">
                  <div className="dropdown-item">
                    <h3 className="item-heading">Products</h3>
                    <div className="item-list flex items-center gap-4 my-12">
                      <div className="item-img w-16 h-16 rounded-full flex items-center justify-center bg-secondary">
                        <img src="" alt="Icon" />
                      </div>
                      <div className="item-list-info">
                        <h4>Team dashboard</h4>
                        <p>Monitor your metrics.</p>
                      </div>
                    </div>
                    <div className="item-list flex items-center gap-4 my-12">
                      <div className="item-img w-16 h-16 rounded-full flex items-center justify-center bg-secondary">
                        <img src="" alt="Icon" />
                      </div>
                      <div className="item-list-info">
                        <h4>Limitless segmentation</h4>
                        <p>Surface hidden trends.</p>
                      </div>
                    </div>
                    <div className="item-list flex items-center gap-4 my-12">
                      <div className="item-img w-16 h-16 rounded-full flex items-center justify-center bg-secondary">
                        <img src="" alt="Icon" />
                      </div>
                      <div className="item-list-info">
                        <h4>Group analytics</h4>
                        <p>Learn about your users</p>
                      </div>
                    </div>
                    <div className="item-list flex items-center gap-4 my-12">
                      <div className="item-img w-16 h-16 rounded-full flex items-center justify-center bg-secondary">
                        <img src="" alt="Icon" />
                      </div>
                      <div className="item-list-info">
                        <span className="info-badge">New</span>
                        <h4>Interactive reports</h4>
                        <p>Measure B2B account health.</p>
                      </div>
                    </div>
                  </div>

                  <div className="dropdown-item">
                    <h3 className="item-heading">Use cases</h3>
                    <div className="item-list flex items-center gap-4 my-12">
                      <div className="item-img w-16 h-16 rounded-full flex items-center justify-center bg-secondary">
                        <img src="" alt="Icon" />
                      </div>
                      <div className="item-list-info">
                        <h4>Convert</h4>
                        <p>Analyze conversion rates.</p>
                      </div>
                    </div>
                    <div className="item-list flex items-center gap-4 my-12">
                      <div className="item-img w-16 h-16 rounded-full flex items-center justify-center bg-secondary">
                        <img src="" alt="Icon" />
                      </div>
                      <div className="item-list-info">
                        <h4>Engage</h4>
                        <p>Measure active usage.</p>
                      </div>
                    </div>
                    <div className="item-list flex items-center gap-4 my-12">
                      <div className="item-img w-16 h-16 rounded-full flex items-center justify-center bg-secondary">
                        <img src="" alt="Icon" />
                      </div>
                      <div className="item-list-info">
                        <h4>Retain</h4>
                        <p>Find retention drivers.</p>
                      </div>
                    </div>
                    <div className="item-list flex items-center gap-4 my-12">
                      <div className="item-img w-16 h-16 rounded-full flex items-center justify-center bg-secondary bg-secondary">
                        {/* <img src="images/icon-8.svg" alt="Icon" /> */}
                      </div>
                      <div className="item-list-info">
                        <h4>Grow</h4>
                        <p>Grow your user base faster.</p>
                      </div>
                    </div>
                  </div>

                  <div className="dropdown-item">
                    <h3 className="item-heading">Resources</h3>
                    <div className="item-list">
                      <div className="item-img w-16 h-16 rounded-full flex items-center justify-center bg-secondary">
                        {/* <img src="images/icon-9.svg" alt="Icon" /> */}
                      </div>
                      <div className="item-list-info">
                        <h4>Blog</h4>
                        <p>The latest industry news.</p>
                      </div>
                    </div>
                    <div className="item-list">
                      <div className="item-img w-16 h-16 rounded-full flex items-center justify-center bg-secondary">
                        {/* <img src="images/icon-10.svg" alt="Icon" /> */}
                      </div>
                      <div className="item-list-info">
                        <h4>Customer stories</h4>
                        <p>Learn how our customers.</p>
                      </div>
                    </div>
                    <div className="item-list">
                      <div className="item-img w-16 h-16 rounded-full flex items-center justify-center bg-secondary">
                        {/* <img src="images/icon-11.svg" alt="Icon" /> */}
                      </div>
                      <div className="item-list-info">
                        <h4>Video tutorials</h4>
                        <p>New features and techniques.</p>
                      </div>
                    </div>
                    <div className="item-list">
                      <div className="item-img w-16 h-16 rounded-full flex items-center justify-center bg-secondary">
                        {/* <img src="images/icon-12.svg" alt="Icon" /> */}
                      </div>
                      <div className="item-list-info">
                        <h4>Documentation</h4>
                        <p>All the boring stuff.</p>
                      </div>
                    </div>
                  </div>

                  <div className="dropdown-item">
                    <h3 className="item-heading">Company</h3>
                    <div className="item-list">
                      <div className="item-img">
                        {/* <img src="images/icon-13.svg" alt="Icon" /> */}
                      </div>
                      <div className="item-list-info">
                        <h4>About us</h4>
                        <p>Learn about our story.</p>
                      </div>
                    </div>
                    <div className="item-list">
                      <div className="item-img">
                        {/* <img src="images/icon-14.svg" alt="Icon" /> */}
                      </div>
                      <div className="item-list-info">
                        <h4>Press</h4>
                        <p>News and press resources.</p>
                      </div>
                    </div>
                    <div className="item-list">
                      <div className="item-img">
                        {/* <img src="images/icon-15.svg" alt="Icon" /> */}
                      </div>
                      <div className="item-list-info">
                        <span className="info-badge">We’re hiring!</span>
                        <h4>Careers</h4>
                        <p>Join our team!</p>
                      </div>
                    </div>
                    <div className="item-list">
                      <div className="item-img">
                        <img src="" alt="Icon" />
                      </div>
                      <div className="item-list-info">
                        <h4>Legal</h4>
                        <p>All the boring stuff.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </ul>

          <div className="nav_menu-mobile lg:hidden">
            <ul className="mobile_nav flex flex-col">
              <li className="nav_mobile navGlasses">
                <div className="flex justify-between items-center py-4 px-5">
                  <a href="#!" className="nav_link flex ">
                    <span className="nav_name--mobile ITCGara text-[40px]">
                      Glasses
                    </span>
                  </a>
                  <button>
                    <span className="toggleMenu">+</span>
                  </button>
                </div>

                <div className="glassesAccord accordion-panel accordion-panel--nav TradeGodthic-BoldCn text-lg tracking-wider uppercase pb-6 hidden">
                  <li className="transition-all cubic">
                    <a className="block px-5 py-3 btn--cta" href="">
                      Readers
                    </a>
                  </li>
                  <li className="transition-all cubic">
                    <a className="block px-5 py-3 btn--cta" href="">
                      Progressive Readers
                    </a>
                  </li>
                  <li className="transition-all cubic">
                    <a className="block px-5 py-3 btn--cta" href="">
                      Prescription Glasses
                    </a>
                  </li>
                </div>
              </li>
              <li className="nav_mobile navSunglasses">
                <div className="flex justify-between items-center py-4 px-5">
                  <a href="#!" className="nav_link flex ">
                    <span className="nav_name--mobile ITCGara text-[40px]">
                      Sunglasses
                    </span>
                  </a>
                  <button>
                    <span className="toggleMenu">+</span>
                  </button>
                </div>

                <div className="SunglassesAccord accordion-panel accordion-panel--nav TradeGodthic-BoldCn text-lg tracking-wider uppercase pb-6 hidden">
                  <li className="transition-all cubic">
                    <a className="block px-5 py-3 btn--cta" href="">
                      Sunglasses
                    </a>
                  </li>
                  <li className="transition-all cubic">
                    <a className="block px-5 py-3 btn--cta" href="">
                      sunglass readers
                    </a>
                  </li>
                  <li className="transition-all cubic">
                    <a className="block px-5 py-3 btn--cta" href="">
                      SUN PROGRESSIVES
                    </a>
                  </li>
                  <li className="transition-all cubic">
                    <a className="block px-5 py-3 btn--cta" href="">
                      PRESCRIPTION SUNGLASSES
                    </a>
                  </li>
                  <li className="transition-all cubic">
                    <a className="block px-5 py-3 btn--cta" href="">
                      Light Responsive
                    </a>
                  </li>
                </div>
              </li>
            </ul>

            <ul className="nav_additional lg:hidden py-5 TradeGodthic-BoldCn">
              <li
                id="mainMenu-best-sellers"
                className="nav__item--additional transition-all cubic fade-in-right"
              >
                <a className="block px-5 py-3 btn--cta">
                  <span className="block">Best Sellers</span>
                </a>
              </li>

              <li
                id="mainMenu-new-arrivals"
                className="nav__item--additional transition-all cubic fade-in-right"
              >
                <a className="block px-5 py-3 btn--cta">
                  <span className="block">New Arrivals</span>
                </a>
              </li>

              {/* <li
                id="mainMenu-accessories"
                className="nav__item--additional transition-all cubic fade-in-right"
              >
                <a className="block px-5 py-3 btn--cta">
                  <span className="block">Accessories</span>
                </a>
              </li> */}

              <li
                id="mainMenu-my-account"
                className="nav__item--additional transition-all cubic fade-in-right"
              >
                <a className="block px-5 py-3 btn--cta">
                  <span className="block">My Account</span>
                </a>
              </li>

              <li
                id="mainMenu-find-a-store"
                className="nav__item--additional transition-all cubic fade-in-right"
              >
                <a className="block px-5 py-3 btn--cta">
                  <span className="block">Find a Store</span>
                </a>
              </li>

              <li
                id="mainMenu-our-story"
                className="nav__item--additional transition-all cubic fade-in-right"
              >
                <a className="block px-5 py-3 btn--cta">
                  <span className="block">Our Story</span>
                </a>
              </li>

              <li
                id="mainMenu-readers-101"
                className="nav__item--additional transition-all cubic fade-in-right"
              >
                <a className="block px-5 py-3 btn--cta">
                  <span className="block">Readers 101</span>
                </a>
              </li>

              <li
                id="mainMenu-architects-custodians"
                className="nav__item--additional transition-all cubic fade-in-right"
              >
                <a className="block px-5 py-3 btn--cta">
                  <span className="block">Architects &amp; Custodians</span>
                </a>
              </li>
            </ul>
          </div>

          <div className="header_logo flex items-center h-full flex-1 justify-center">
            <a href="#!" className="logo-link">
              <img
                src="/images/pdglogo.svg"
                alt="Logo"
                className="logo-img w-20 h-6 lg:w-32 lg:h-10"
              />
            </a>
          </div>

          <ul className="nav_menu-right flex h-full flex-1  justify-end text-xs lg:text-sm">
            <li className="nav_list gap-8 items-center m-0 hidden lg:flex">
              <a
                href="#!"
                className="nav_link flex justify-center gap-4 font-medium p-4"
              >
                <span className="nav_name tracking-wider">STORE</span>
              </a>
            </li>
            <li className="nav_list nav_list_menu flex gap-8 items-center m-0 ">
              <a
                href="#!"
                className="nav_link !flex justify-center gap-4 font-medium p-4 "
              >
                <span className=" tracking-wider TradeGodthic-BoldCm">
                  SEARCH
                </span>
              </a>
            </li>
            <li className="nav_list nav_list_menu gap-8 items-center m-0 hidden lg:flex">
              <a href="#!" className="nav_link flex justify-center gap-4 p-4">
                <span className="nav_name tracking-wider">ACCOUNT</span>
              </a>
            </li>
            <li className="nav_list nav_list_menu flex gap-8 items-center m-0 ">
              <a
                href="#!"
                className="nav_link flex justify-center gap-4 font-medium p-0 lg:p-4 lg:pr-9"
              >
                <span className=" tracking-wider pl-2 lg:pl-0 TradeGodthic-BoldCm">
                  CART
                </span>
              </a>
            </li>
          </ul>
        </nav>
      </header>

      <AwwMenu></AwwMenu>
    </>
  );
};

export default Testing;

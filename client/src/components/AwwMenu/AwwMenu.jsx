import "./menu.scss";
import { useEffect } from "react";

const AwwMenu = () => {
  useEffect(() => {
    const jsMenuFloatHam = document.querySelector(".js-menufloat-hamburger");
    const jsMenuFloat = document.querySelector(".js-menufloat-show");
    const menuFloatContent = document.querySelector(
      ".menu-float__menu-content"
    ); //is-show
    const menuFloat = document.querySelector(".menu-float__menu"); // is-active
    const menuFloatTop = document.querySelector(".menu-float__top");
    const menuFloatWrap = document.querySelector(".menu-float__wrapper"); //is-open is-open-main
    const e = document.documentElement;
    let t = window.innerHeight - 95;
    e.style.setProperty("--mft-height", `${t}px`);

    var prevScrollpos = window.scrollY;
    window.onscroll = function () {
      var currentScrollPos = window.scrollY;
      if (prevScrollpos > currentScrollPos) {
        jsMenuFloat.style.transform = "translateY(0%)";
        // jsMenuFloat.style.transition = ".2s ease .2s";
      } else {
        jsMenuFloat.style.transform = "translateY(500px)";
      }
      prevScrollpos = currentScrollPos;
    };
    menuFloatWrap.addEventListener("mouseleave", function () {
      menuFloatWrap.classList.remove("is-open");
      menuFloatWrap.classList.remove("is-open-main");
      menuFloat.classList.remove("is-active");
      menuFloatContent.classList.remove("is-show");
      setTimeout(() => {
        menuFloatTop.classList.remove("mb-[6px]");
      }, 400);
    });
    jsMenuFloatHam.addEventListener("click", function () {
      if (menuFloatWrap.classList.contains("is-open")) {
        menuFloatWrap.classList.remove("is-open");
        menuFloatWrap.classList.remove("is-open-main");
        menuFloat.classList.remove("is-active");
        menuFloatTop.classList.remove("mb-[6px]");
        menuFloatContent.classList.remove("is-show");
      } else {
        menuFloatWrap.classList.add("is-open");
        menuFloatWrap.classList.add("is-open-main");
        menuFloat.classList.add("is-active");
        menuFloatTop.classList.add("mb-[6px]");
        menuFloatContent.classList.add("is-show");
      }
    });
  }, []);

  return (
    <>
      <div className="menu-float js-menufloat-show is-visible">
        <div className="inner">
          <div className="menu-float__inner">
            <div className="menu-float__wrapper">
              <div className="menu-float__top">
                <div className="menu-float__menu menu-main" id="menu-main">
                  <div className="menu-float__menu-content">
                    <div className="menu-float__menu--main">
                      <div className="menu-float__menu-col ">
                        <div className="menu-float__menu-section TradeGodthic-BoldCm text-sm uppercase tracking-wider">
                          Glasses
                        </div>
                        <ul className="menu-float__menu-nav">
                          <li>
                            <a
                              href="/websites/"
                              className="menu-float__sub-item"
                            >
                              <span>Readers</span>
                            </a>
                          </li>
                          <li>
                            <a
                              href="/websites/nominees/"
                              className="menu-float__sub-item"
                            >
                              <span>Progressive Readers</span>
                            </a>
                          </li>
                          <li>
                            <a
                              href="/websites/sites_of_the_day/"
                              className="menu-float__sub-item"
                            >
                              <span>Prescription Glasses</span>
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="menu-float__menu-col ">
                        <div className="menu-float__menu-row ">
                          <div className="menu-float__menu-section TradeGodthic-BoldCm text-sm uppercase tracking-wider">
                            <span>Sunglasses</span>
                          </div>
                          <ul className="menu-float__menu-nav">
                            <li>
                              <a
                                href="/collections/"
                                className="menu-float__sub-item"
                              >
                                <span>Sunglasses</span>
                              </a>
                            </li>
                            <li>
                              <a
                                href="/elements/"
                                className="menu-float__sub-item"
                              >
                                <span>Sunglass Readers</span>
                              </a>
                            </li>
                            <li>
                              <a
                                href="/elements/"
                                className="menu-float__sub-item"
                              >
                                <span>Sun Progressives</span>
                              </a>
                            </li>
                            <li>
                              <a
                                href="/elements/"
                                className="menu-float__sub-item"
                              >
                                <span>Prescription Sunglasses</span>
                              </a>
                            </li>
                            <li>
                              <a
                                href="/elements/"
                                className="menu-float__sub-item"
                              >
                                <span>Light Responsive</span>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="menu-float__menu-col ">
                        <div className="menu-float__menu-row ">
                          <div className="menu-float__menu-section TradeGodthic-BoldCm text-sm uppercase tracking-wider">
                            Feature
                          </div>
                          <ul className="menu-float__menu-nav">
                            <li>
                              <a
                                href="/directory/homepage/"
                                className="menu-float__sub-item"
                              >
                                <span>Best Sellers</span>
                              </a>
                            </li>
                            <li>
                              <a
                                href="/directory/international/"
                                className="menu-float__sub-item"
                              >
                                <span>New Arrivals</span>
                              </a>
                            </li>
                            <li>
                              <a
                                href="/directory/freelance/"
                                className="menu-float__sub-item"
                              >
                                <span>Accessories</span>
                              </a>
                            </li>
                            <li>
                              <a
                                href="/directory/agency-studio/"
                                className="menu-float__sub-item"
                              >
                                <span>Narrow Styles</span>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div> 

              <div className="menu-float__bottom TradeGodthic-BoldCm uppercase">
                <div className="menu-float__layout menu-float__layout--primary">
                  <div className="menu-float__content">
                    <a href="/" className="menu-float__logo">
                      <img
                        width={25}
                        src="/images/logo/pdglogo-mobile.svg"
                        alt=""
                      />
                    </a>
                    <div className="menu-float__breadcrumb">
                      <strong className="menu-float__title">home</strong>
                    </div>
                    <div className="menu-float__hamburger js-menufloat-hamburger">
                      <div></div>
                      <div></div>
                      <div></div>
                    </div>
                  </div>
                </div>

                <div className="menu-float__layout menu-float__layout--secondary">
                  <div className="menu-float__content">
                    <div className="menu-float__progress">
                      <div className="menu-float__bar js-menu-progress"></div>
                    </div>
                    {/* <strong className="menu-float__title-section">Home</strong> */}
                    <ul className="menu-float__nav">
                      <li>
                        <a
                          className="menu-float__item js-menu-anchor"
                          href="!#"
                        >
                          <span>Glasses</span>
                        </a>
                      </li>
                      <li>
                        <a
                          className="menu-float__item js-menu-anchor"
                          href="!#"
                        >
                          <span>Sunglasses</span>
                        </a>
                      </li>
                      <li>
                        <a
                          className="menu-float__item js-menu-anchor"
                          href="!#"
                        >
                          <span>Account</span>
                        </a>
                      </li>
                      <li>
                        <a
                          className="menu-float__item js-menu-anchor"
                          href="#collections"
                        >
                          <span>Cart</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <MainMenu></MainMenu> */}
    </>
  );
};

export default AwwMenu;

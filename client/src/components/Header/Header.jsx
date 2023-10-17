import { useEffect } from "react";
import "./style.css";
import ButtonSolid from "../ButtonSolid/ButtonSolid.jsx";
import ButtonOutline from "../ButtonOutline/ButtonOutline.jsx";
import { useNavigate } from "react-router-dom";
const Header = () => {
  const navigate = useNavigate();
  const handleLogin = () => {
    navigate("/sign-in");
  };
  const handleSignUp = () => {
    navigate("/sign-up");
  };
  useEffect(() => {
    const jsSearchInput = document.querySelector(".js-search-input");
    const headerSearch = document.querySelector(".header-search");
    // const headerResult = document.querySelector(".header-search__results");
    // const searchForm = document.querySelector(".search-form");

    const inputClick = () => {
      if (headerSearch.classList.contains("show-results")) {
        headerSearch.classList.remove("show-results");
      } else {
        headerSearch.classList.add("show-results");
      }
    };
    jsSearchInput.addEventListener("click", inputClick);

    const inputBlur = () => {
      headerSearch.classList.remove("show-results");
    };
    jsSearchInput.addEventListener("blur", inputBlur);

    return () => {
      jsSearchInput.removeEventListener("click", inputClick);
      //   jsSearchInput.removeEventListener("blur", inputBlur);
    };
  }, []);
  return (
    <>
      <header
        id="header"
        data-controller="search"
        data-search-url-value="tv_search_inspiration"
        data-search-selected-type-value="inspiration"
      >
        <div className="inner">
          <div className="header-main px-5 lg:px-9">
            <a href="/" className="header-main__logo flex-none lg:flex-1">
              <img
                src="/images/logo/pdglogo.svg"
                alt=""
                className="logoLarge w-20 h-6 lg:w-32 lg:h-10"
              />
              <img
                src="/images/logo/pdglogo-mobile.svg"
                alt=""
                className="logoSmall"
                width={30}
              />
            </a>
            <div className="header-search">
              {/* <div
                className="header-search__overlay"
                data-search-target="overlay"
                data-action="click->search#close"
              ></div> */}
              <div className="search-form">
                <div className="search-form__field">
                  <input
                    type="text"
                    placeholder="What are you looking for?"
                    className="search-form__input js-search-input ITCGara placeholder-[#443828] lg:text-2xl text-xl text-[#443828]"
                    style={{ width: "7.7px" }}
                  />
                  <button
                    type="submit"
                    className="search-form__button"
                    aria-label="Search"
                  >
                    <img
                      src="/images/search-outline.svg"
                      alt=""
                      className="w-fit h-7"
                    />
                  </button>
                </div>
              </div>
              {/* <div className="header-search__results">
                <div className="content-tabs">
                  <div
                    className="content-tabs__item active"
                    id="search-default"
                    data-search-target="defaultView"
                  >
                    <div className="header-search__content-results">
                      <div className="header-search__left">
                        <div className="header-search__row hidden-sm">
                          <p className="text-uppercase">Featured in Awwwards</p>
                          <ul className="list-featured">
                            <li>
                              <figure>
                                <a href="/websites/sites_of_the_day/">
                                  <img
                                    width="143"
                                    height="88"
                                    className="list-featured__img"
                                    loading="lazy"
                                    src="https://assets.awwwards.com/assets/redesign/images/header/search/featured/1.jpg"
                                    alt="Sites of the Day"
                                  />
                                </a>
                              </figure>
                              <a
                                className="list-featured__title"
                                href="/websites/sites_of_the_day/"
                              >
                                Sites of the Day
                              </a>
                            </li>
                            <li>
                              <figure>
                                <a href="/websites/">
                                  <img
                                    width="143"
                                    height="88"
                                    className="list-featured__img"
                                    loading="lazy"
                                    src="https://assets.awwwards.com/assets/redesign/images/header/search/featured/2.jpg"
                                    alt="Websites"
                                  />
                                </a>
                              </figure>
                              <a
                                className="list-featured__title"
                                href="/websites/"
                              >
                                Websites
                              </a>
                            </li>
                            <li>
                              <figure>
                                <a href="/elements/">
                                  <img
                                    width="143"
                                    height="88"
                                    className="list-featured__img"
                                    loading="lazy"
                                    src="https://assets.awwwards.com/assets/redesign/images/header/search/featured/3.jpg"
                                    alt="Elements"
                                  />
                                </a>
                              </figure>
                              <a
                                className="list-featured__title"
                                href="/elements/"
                              >
                                Elements
                              </a>
                            </li>
                            <li>
                              <figure>
                                <a href="/academy/">
                                  <img
                                    width="143"
                                    height="88"
                                    className="list-featured__img"
                                    loading="lazy"
                                    src="https://assets.awwwards.com/assets/redesign/images/header/search/featured/4.jpg"
                                    alt="Courses"
                                  />
                                </a>
                              </figure>
                              <a
                                className="list-featured__title"
                                href="/academy/"
                              >
                                Courses
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="header-search__row">
                          <p className="text-uppercase">Best Tags</p>
                          <ul className="list-tags">
                            <li>
                              <a
                                href="/websites/animation/"
                                className="button button--tag--x-small--dark"
                              >
                                Animation
                              </a>
                            </li>
                            <li>
                              <a
                                href="/websites/portfolio/"
                                className="button button--tag--x-small--dark"
                              >
                                Portfolio
                              </a>
                            </li>
                            <li>
                              <a
                                href="/websites/404-pages/"
                                className="button button--tag--x-small--dark"
                              >
                                404 pages
                              </a>
                            </li>
                            <li>
                              <a
                                href="/websites/clean/"
                                className="button button--tag--x-small--dark"
                              >
                                Clean
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="header-search__right">
                        <p className="uppercase">Coming soon</p>
                        <div
                          className="slider-header swiper swiper-initialized swiper-horizontal swiper-pointer-events"
                          data-controller="swiper"
                          data-swiper-custom-configuration-value='{"grabCursor":true,"navigation":{"nextEl":".js-slider-header-next","prevEl":".js-slider-header-prev"},"slidesPerView":"auto","spaceBetween":16}'
                        >
                          <div
                            className="swiper-wrapper"
                            style={{
                              cursor: "grab",
                              transitionDuration: "0ms",
                            }}
                          >
                            <div className="swiper-slide">
                              <figure className="slider-header__figure">
                                <a href="/c2-montr%C3%A9al-by-koki-kiko-and-friends-wins-sotm-may.html">
                                  <img
                                    width={350}
                                    height={263}
                                    className="slider-header__img lazy"
                                    data-controller="lazyload-image"
                                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 350 263' %3E%3C/svg%3E"
                                    data-srcset="https://assets.awwwards.com/awards/media/cache/thumb_440_330/images/2023/06/c2mtl-thumb.jpg 1x, https://assets.awwwards.com/awards/media/cache/optimize/images/2023/06/c2mtl-thumb.jpg 2x"
                                    alt="C2 Montréal by KOKI-KIKO and friends wins SOTM May"
                                  />
                                </a>
                              </figure>
                              <h4 className="slider-header__title">
                                C2 Montréal by KOKI-KIKO and friends wins SOTM
                                May
                              </h4>
                            </div>
                            <div className="swiper-slide">
                              <figure className="slider-header__figure">
                                <a href="/engine-station-by-monogrid-a-3d-experiential-e-commerce-destination.html">
                                  <img
                                    width={350}
                                    height={263}
                                    className="slider-header__img lazy"
                                    data-controller="lazyload-image"
                                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 350 263' %3E%3C/svg%3E"
                                    data-srcset="https://assets.awwwards.com/awards/media/cache/thumb_440_330/images/2023/05/es-thumb-v2.jpg 1x, https://assets.awwwards.com/awards/media/cache/optimize/images/2023/05/es-thumb-v2.jpg 2x"
                                    alt="Engine Station by MONOGRID: A 3D Experiential E-Commerce Destination"
                                  />
                                </a>
                              </figure>
                              <h4 className="slider-header__title">
                                Engine Station by MONOGRID: A 3D Experiential
                                E-Commerce Destination
                              </h4>
                            </div>
                            <div className="swiper-slide">
                              <figure className="slider-header__figure">
                                <a href="/case-study-reinventing-locomotive-r.html">
                                  <img
                                    width={350}
                                    height={263}
                                    className="slider-header__img lazy"
                                    data-controller="lazyload-image"
                                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 350 263' %3E%3C/svg%3E"
                                    data-srcset="https://assets.awwwards.com/awards/media/cache/thumb_440_330/images/2023/05/loco-thumb.jpg 1x, https://assets.awwwards.com/awards/media/cache/optimize/images/2023/05/loco-thumb.jpg 2x"
                                    alt="Reinventing Locomotive® Wins Site of the Month March"
                                  />
                                </a>
                              </figure>
                              <h4 className="slider-header__title">
                                Reinventing Locomotive® Wins Site of the Month
                                March
                              </h4>
                            </div>
                            <div className="swiper-slide">
                              <figure className="slider-header__figure">
                                <a href="/vote-for-site-of-the-month-april-2023.html">
                                  <img
                                    width={350}
                                    height={263}
                                    className="slider-header__img lazy"
                                    data-controller="lazyload-image"
                                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 350 263' %3E%3C/svg%3E"
                                    data-srcset="https://assets.awwwards.com/awards/media/cache/thumb_440_330/images/2023/05/sotm-april-2023-thumbnail.jpg 1x, https://assets.awwwards.com/awards/media/cache/optimize/images/2023/05/sotm-april-2023-thumbnail.jpg 2x"
                                    alt="Vote for Site of the Month April 2023!"
                                  />
                                </a>
                              </figure>
                              <h4 className="slider-header__title">
                                Vote for Site of the Month April 2023!
                              </h4>
                            </div>
                          </div>
                          <div className="slider-header__nav">
                            <div className="slider-header__btnav js-slider-header-prev">
                              <svg width="14" height="11" viewBox="0 0 14 11">
                                <path d="M1.6282 5.31601L2.20129 5.88332L2.20127 5.88907L6.08664 9.77444L5.27172 10.5894L1.38635 6.70399L-0.000460164 5.31717L0.814456 4.50226L5.31672 -1.6281e-06L6.12471 0.813773L2.20618 4.7323L1.6282 5.31601ZM3.21672 5.60365L4.18558 4.22814L13.0313 4.19073L13.0254 5.56217L3.21672 5.60365Z"></path>
                              </svg>
                            </div>
                            <div className="slider-header__btnav js-slider-header-next">
                              <svg width="14" height="11" viewBox="0 0 14 11">
                                <path d="M11.403 5.27335L10.83 4.70604L10.83 4.70028L6.94461 0.814915L7.75953 0L11.6449 3.88537L13.0317 5.27218L12.2168 6.0871L7.71453 10.5894L6.90654 9.77558L10.8251 5.85706L11.403 5.27335ZM9.81453 4.9857L8.84567 6.36122L0 6.39862L0.00580048 5.02719L9.81453 4.9857Z"></path>
                              </svg>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="content-tabs__item"
                    id="search-autocomplete"
                    data-search-target="autocompleteView"
                  >
                    <div className="header-search__content-results">
                      <div className="header-search__row">
                        <div data-search-target="autocompleteTagsContainer">
                          <p className="text-uppercase">Search</p>
                          <ul
                            className="list-search-ac"
                            data-search-target="autocompleteTags"
                          ></ul>
                        </div>
                        <div data-search-target="autocompleteUsersContainer">
                          <p className="text-uppercase">Users</p>
                          <ul
                            className="list-search-ac list-search-ac--s2"
                            data-search-target="autocompleteUsers"
                          ></ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div> */}
            </div>
            <div className="header-main__right flex-none lg:flex-1">
              <div className="header-main__user flex-1 justify-end">
                <ButtonSolid
                  onClick={handleLogin}
                  child={"Login"}
                  hidden={"hidden-sm"}
                ></ButtonSolid>
                <ButtonOutline
                  child={"Sign up"}
                  onClick={handleSignUp}
                ></ButtonOutline>
                <span className="header-main__ico">
                  <img src="/images/user-check.svg" alt="" width={23} />
                </span>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;

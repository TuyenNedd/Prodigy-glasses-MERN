import ResultProductSearch from "../ResultProductSearch/ResultProductSearch.jsx";

const HeaderSearchResult = () => {
  return (
    <>
      <div className="header-search__results">
        <div className="content-tabs">
          <div className="content-tabs__item active">
            <div className="header-search__content-results">
              <div>
                <ResultProductSearch></ResultProductSearch>
              </div>
              <div className="search-results w-full lg:w-3/4 lg:pt-6 pt-4">
                <div className="flex lg:flex-row lg:items-start flex-col">
                  <div className="lg:px-0">
                    <p className="lg:text-base text-sm font-custom-1 uppercase tracking-wider leading-tight text-secondary lg:mb-5 mb-4 TradeGodthic-BoldCn">
                      Popular Searches:
                    </p>

                    <ul className="ITCGara">
                      <li>
                        <a className="block no-underline font-subheading lg:text-2xl text-lg tracking-wide leading-none text-black lg:mb-2 mb-2">
                          Miklos Reading Glasses
                        </a>
                      </li>

                      <li>
                        <a className="block no-underline font-subheading lg:text-2xl text-lg tracking-wide leading-none text-black lg:mb-2 mb-2">
                          Progressive Readers
                        </a>
                      </li>

                      <li>
                        <a className="block no-underline font-subheading lg:text-2xl text-lg tracking-wide leading-none text-black lg:mb-2 mb-2">
                          Prescription Glasses
                        </a>
                      </li>

                      <li>
                        <a className="block no-underline font-subheading lg:text-2xl text-lg tracking-wide leading-none text-black lg:mb-2 mb-2">
                          Sunglasses
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
    </>
  );
};

export default HeaderSearchResult;

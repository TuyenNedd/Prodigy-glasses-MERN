import "./style.scss";

const TypeProductHeader = () => {
  // Tạo mảng các mục để hiển thị Skeleton

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
                <li className="flex-shrink-0">
                  <div className="field">
                    <label>
                      <input name="feature" type="radio" className="hidden" />
                      <span>All Frames</span>
                    </label>
                  </div>
                </li>
                <li className="flex-shrink-0">
                  <div className="field">
                    <label>
                      <input name="feature" type="radio" className="hidden" />
                      <span>Best Sellers</span>
                    </label>
                  </div>
                </li>
                <li className="flex-shrink-0">
                  <div className="field">
                    <label>
                      <input name="feature" type="radio" className="hidden" />
                      <span>New Arrivals</span>
                    </label>
                  </div>
                </li>
              </ul>
            </form>
          </div>
        </div>
      </header>
    </>
  );
};

export default TypeProductHeader;

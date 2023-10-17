/* eslint-disable react/no-unescaped-entities */
import "./signup.scss";
import AwwMenu from "../../components/AwwMenu/AwwMenu.jsx";
import ButtonSolid from "../../components/ButtonSolid/ButtonSolid.jsx";
import Header from "../../components/Header/Header.jsx";
const SignUpPage = () => {
  return (
    <>
      <Header></Header>
      <AwwMenu></AwwMenu>
      <section className=" flex flex-col text-left lg:flex-row-reverse h-main items-center">
        <div className="flex flex-col items-center justify-center w-full  lg:p-16 p-4">
          <div className="max-w-md w-full p-4 lg:p-0" data-login-form="">
            <form
              method="post"
              action="/account/login"
              id="customer_login"
              acceptCharset="UTF-8"
              data-login-with-shop-sign-in="true"
            >
              <input type="hidden" name="form_type" value="customer_login" />
              <input type="hidden" name="utf8" value="✓" />
              <h1 className="text-[40px] lg:text-[80px] mb-2 mt-0 ITCGara leading-none">
                Create Account
              </h1>

              <div className=" relative field my-1">
                <label className="form--label text-sm">First Name</label>
                <input
                  type="text"
                  placeholder="First Name"
                  className="form--input w-full placeholder-[#443828]"
                />
              </div>
              <div className=" relative field my-1">
                <label className="form--label text-sm">Last Name</label>
                <input
                  type="text"
                  placeholder="Last Name"
                  className="form--input w-full placeholder-[#443828]"
                />
              </div>

              <div className="relative field my-1">
                <label htmlFor="CustomerEmail" className="form--label text-sm">
                  Email
                </label>
                <input
                  type="email"
                  name="customer[email]"
                  id="CustomerEmail"
                  placeholder="Email address"
                  className="form--input w-full placeholder-[#443828]"
                />
              </div>

              <div className=" relative field my-1">
                <label
                  htmlFor="CustomerPassword"
                  className="form--label text-sm"
                >
                  Password
                </label>
                <input
                  type="password"
                  placeholder="Password"
                  name="customer[password]"
                  id="CustomerPassword"
                  className="form--input w-full placeholder-[#443828]"
                />
              </div>

              {/* <input
                type="submit"
                className="btn btn--primary mt-2 w-full"
                value="Sign In"
              /> */}

              <ButtonSolid
                child={"CREATE"}
                customClass={"w-full mt-2 TradeGodthic-BoldCn text-lg"}
              ></ButtonSolid>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default SignUpPage;

import AwwMenu from "../../components/AwwMenu/AwwMenu.jsx";
import ButtonSolid from "../../components/ButtonSolid/ButtonSolid.jsx";
import Header from "../../components/Header/Header.jsx";
import "./signin.scss";

/* eslint-disable react/no-unescaped-entities */
const SignInPage = () => {
  return (
    <>
      <Header></Header>
      <AwwMenu></AwwMenu>
      <section className=" flex flex-col text-left lg:flex-row-reverse h-main items-center">
        <div className="flex flex-col items-center justify-center w-full  lg:p-16 p-4">
          <div className="form-success hidden" data-reset-success="">
            We've sent you an email with a link to update your password.
          </div>
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
                Login
              </h1>

              <div className="mt-4 relative field my-2">
                <label htmlFor="CustomerEmail" className="form--label text-sm">
                  Email
                </label>
                <input
                  type="email"
                  name="customer[email]"
                  id="CustomerEmail"
                  placeholder="Email address"
                  className="form--input w-full placeholder-[#443828]"
                  spellCheck="false"
                  autoComplete="off"
                  autoCapitalize="off"
                  autoFocus
                />
              </div>

              <div className="mt-2 relative field my-2">
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
                child={"SIGN IN"}
                customClass={"w-full mt-2 TradeGodthic-BoldCn text-lg"}
              ></ButtonSolid>

              <div className="mt-2 text-sm TradeGodthicCn">
                <a
                  className="link text-sm underline text-black px-1"
                  href="/account/register"
                >
                  Create account
                </a>

                <a
                  href="#recover"
                  className="link text-sm underline text-black px-1"
                  data-recover-toggle=""
                >
                  Forgot your password?
                </a>
              </div>

              <input
                type="hidden"
                name="login_with_shop[analytics_trace_id]"
                value="1b099161-4466-444e-9130-38cd18f073a1"
              />
            </form>
          </div>

          <div
            className="max-w-md w-full p-1 lg:p-0 hidden"
            data-recover-form=""
          >
            <h2 className="type--secondary mb-2 mt-0">Reset your password</h2>
            <p className="leading-normal">
              We will send you an email to reset your password.
            </p>

            <form method="post" action="/account/recover" acceptCharset="UTF-8">
              <input
                type="hidden"
                name="form_type"
                value="recover_customer_password"
              />
              <input type="hidden" name="utf8" value="✓" />

              <div className="field mt-1 relative">
                <label htmlFor="RecoverEmail" className="form--label">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="RecoverEmail"
                  className="block input-reset w-full form--input"
                  spellCheck="false"
                  autoComplete="off"
                  autoCapitalize="off"
                />
              </div>

              <div>
                <input
                  type="submit"
                  className="btn btn--primary w-full mt-4"
                  value="Submit"
                />
              </div>

              <div>
                <button
                  type="button"
                  className="border-0 bg-transparent border-none link font-body text-sm underline px-1"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default SignInPage;

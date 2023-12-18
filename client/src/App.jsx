import { Fragment, useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import DefaultComponent from "./components/DefaultComponent/DefaultComponent";
import { routes } from "./routes";
import { isJsonString } from "./utils";
import jwt_decode from "jwt-decode";
import * as UserService from "./services/UserService";
import { useDispatch, useSelector } from "react-redux";
import { resetUser, updateUser } from "./redux/slides/userSlide";
import { Suspense } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";

import LinearWithValueLabel from "./components/LinearWithValueLabel/LinearWithValueLabel.jsx";
import ToTopWhenChangeRoute from "./components/ToTopWhenChangeRoute/ToTopWhenChangeRoute.jsx";
function App() {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);
  const user = useSelector((state) => state.user);
  const location = useLocation();

  useEffect(() => {
    setIsLoading(true);
    const { storageData, decoded } = handleDecoded();
    if (decoded?.id) {
      handleGetDetailsUser(decoded?.id, storageData);
    }
    setTimeout(() => {
      setIsLoading(false);
    }, 4000);
  }, []);

  const handleDecoded = () => {
    let storageData =
      user?.access_token || localStorage.getItem("access_token");
    let decoded = {};
    if (storageData && isJsonString(storageData) && !user?.access_token) {
      storageData = JSON.parse(storageData);
      decoded = jwt_decode(storageData);
    }
    return { decoded, storageData };
  };

  useEffect(() => {
    // Update the title based on the current route
    const currentRoute = routes.find(
      (route) => route.path === location.pathname
    );
    if (currentRoute) {
      document.title = currentRoute.titleName;
    }
  }, [location.pathname]);

  UserService.axiosJWT.interceptors.request.use(
    async (config) => {
      // Do something before request is sent
      const currentTime = new Date();
      const { decoded } = handleDecoded();
      let storageRefreshToken = localStorage.getItem("refresh_token");
      const refreshToken = JSON.parse(storageRefreshToken);
      const decodedRefreshToken = jwt_decode(refreshToken);
      if (decoded?.exp < currentTime.getTime() / 1000) {
        if (decodedRefreshToken?.exp > currentTime.getTime() / 1000) {
          const data = await UserService.refreshToken(refreshToken);
          config.headers["token"] = `Bearer ${data?.access_token}`;
        } else {
          dispatch(resetUser());
        }
      }
      return config;
    },
    (err) => {
      return Promise.reject(err);
    }
  );

  const handleGetDetailsUser = async (id, token) => {
    let storageRefreshToken = localStorage.getItem("refresh_token");
    const refreshToken = JSON.parse(storageRefreshToken);
    const res = await UserService.getDetailsUser(id, token);
    dispatch(
      updateUser({
        ...res?.data,
        access_token: token,
        refreshToken: refreshToken,
      })
    );
  };

  // const ToTopWhenChangeRoute = ({ children }) => {
  //   const location = useLocation();
  //   useLayoutEffect(() => {
  //     document.documentElement.scrollTo(0, 0);
  //   }, [location.pathname]);
  //   return children;
  // };
  return (
    <>
      <HelmetProvider>
        {isLoading ? (
          <LinearWithValueLabel />
        ) : (
          <>
            {/* <Router></Router> */}
            <ToTopWhenChangeRoute>
              <Suspense>
                {/* <Suspense fallback={<LinearWithValueLabel />}> */}
                <Routes>
                  {routes.map((route) => {
                    const Page = route.page;
                    const Layout = route.isShowHeader
                      ? DefaultComponent
                      : Fragment;

                    return (
                      <>
                        <Route
                          key={route.path}
                          path={route.path}
                          element={
                            <>
                              <Layout>
                                <Helmet>
                                  <title>{route.titleName}</title>
                                </Helmet>
                                <Page />
                              </Layout>
                            </>
                          }
                        />
                      </>
                    );
                  })}
                </Routes>
              </Suspense>
            </ToTopWhenChangeRoute>
          </>
        )}
      </HelmetProvider>
    </>
  );
}

export default App;

import React from "react";
import HomePage from "../pages/HomePage/HomePage";
import TypeProductPage from "../pages/TypeProductPage/TypeProductPage";

const AdminPage = React.lazy(() => import("../pages/AdminPage/AdminPage"));
const DetailsOrderPage = React.lazy(() =>
  import("../pages/DetailsOrderPage/DetailsOrderPage")
);
const MyOrderPage = React.lazy(() => import("../pages/MyOrder/MyOrder"));
const NotFoundPage = React.lazy(() =>
  import("../pages/NotFoundPage/NotFoundPage")
);
const OrderSuccess = React.lazy(() =>
  import("../pages/OrderSuccess/OrderSuccess")
);
const PaymentPage = React.lazy(() =>
  import("../pages/PaymentPage/PaymentPage")
);
const ProductDetailsPage = React.lazy(() =>
  import("../pages/ProductDetailsPage/ProductDetailsPage")
);
const ProductsPage = React.lazy(() =>
  import("../pages/ProductsPage/ProductsPage")
);

const ProfilePage = React.lazy(() => import("../pages/Profile/ProfilePage"));
// const SignInPage = React.lazy(() => import("../pages/SignInPage/SignInPage"));
import SignInPage from "../pages/SignInPage/SignInPage";
const SignUpPage = React.lazy(() => import("../pages/SignUpPage/SignUpPage"));
// const TypeProductPage = React.lazy(() =>
//   import("../pages/TypeProductPage/TypeProductPage")
// );

export const routes = [
  {
    path: "/",
    page: HomePage,
    isShowHeader: true,
    menuName: "Home",
    titleName: "Prodigy Readers - Age Awesome",
  },
  {
    path: "/my-order",
    page: MyOrderPage,
    isShowHeader: true,
    menuName: "My order",
    titleName: "My Order - Prodigy",
  },
  {
    path: "/details-order/:id",
    page: DetailsOrderPage,
    isShowHeader: true,
    menuName: "Order details",
    titleName: "Order Details - Prodigy",
  },
  {
    path: "/payment",
    page: PaymentPage,
    isShowHeader: true,
    menuName: "Payment",
    titleName: "Payment - Prodigy",
  },
  {
    path: "/orderSuccess",
    page: OrderSuccess,
    isShowHeader: false,
    menuName: "Order success",
    titleName: "Order Success - Prodigy",
  },
  {
    path: "/products",
    page: ProductsPage,
    isShowHeader: true,
    menuName: "Products",
    titleName: "Products - Prodigy",
  },
  {
    path: "/product/:type",
    page: TypeProductPage,
    isShowHeader: true,
    menuName: "Product",
    titleName: "Product - Prodigy",
  },
  {
    path: "/sign-in",
    page: SignInPage,
    isShowHeader: true,
    menuName: "Sign in",
    titleName: "Account - Prodigy",
  },
  {
    path: "/sign-up",
    page: SignUpPage,
    isShowHeader: true,
    menuName: "Sign up",
    titleName: "Create Account - Prodigy",
  },
  {
    path: "/product-details/:id",
    page: ProductDetailsPage,
    isShowHeader: true,
    menuName: "Details",
    titleName: "Product Details - Prodigy",
  },
  {
    path: "/profile-user",
    page: ProfilePage,
    isShowHeader: true,
    menuName: "Account",
    titleName: "My Account - Prodigy",
  },
  {
    path: "/system/admin",
    page: AdminPage,
    isShowHeader: false,
    isPrivated: true,
    menuName: "Admin",
    titleName: "Admin Dashboard - Prodigy",
  },
  {
    path: "*",
    page: NotFoundPage,
    menuName: "Error",
    titleName: "NotFound 404 - Prodigy",
  },
];

// import AdminPage from "../pages/AdminPage/AdminPage";
// import DetailsOrderPage from "../pages/DetailsOrderPage/DetailsOrderPage";
// import HomePage from "../pages/HomePage/HomePage";
// import MyOrderPage from "../pages/MyOrder/MyOrder";
// import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";
// import OrderSuccess from "../pages/OrderSuccess/OrderSuccess";
// import PaymentPage from "../pages/PaymentPage/PaymentPage";
// import ProductDetailsPage from "../pages/ProductDetailsPage/ProductDetailsPage";
// import ProductsPage from "../pages/ProductsPage/ProductsPage";
// import ProfilePage from "../pages/Profile/ProfilePage";
// import SignInPage from "../pages/SignInPage/SignInPage";
// import SignUpPage from "../pages/SignUpPage/SignUpPage";
// import TypeProductPage from "../pages/TypeProductPage/TypeProductPage";

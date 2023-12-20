import AdminPage from "../pages/AdminPage/AdminPage";
import DetailsOrderPage from "../pages/DetailsOrderPage/DetailsOrderPage";
import HomePage from "../pages/HomePage/HomePage";
import MyOrderPage from "../pages/MyOrder/MyOrder";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";
import Notpermitted from "../pages/Notpermitted/Notpermitted";
import OrderSuccess from "../pages/OrderSuccess/OrderSuccess";
import PaymentPage from "../pages/PaymentPage/PaymentPage";
import ProductDetailsPage from "../pages/ProductDetailsPage/ProductDetailsPage";
import ProductsPage from "../pages/ProductsPage/ProductsPage";
import ProfilePage from "../pages/Profile/ProfilePage";
import SignInPage from "../pages/SignInPage/SignInPage";
import SignUpPage from "../pages/SignUpPage/SignUpPage";
import TypeProductPage from "../pages/TypeProductPage/TypeProductPage";

export const routes = [
  {
    path: "/",
    page: HomePage,
    isShowHeader: true,
    menuName: "Home",
  },
  {
    path: "/my-order",
    page: MyOrderPage,
    isShowHeader: true,
    menuName: "My order",
  },
  {
    path: "/details-order/:id",
    page: DetailsOrderPage,
    isShowHeader: true,
    menuName: "Order details",
  },
  {
    path: "/payment",
    page: PaymentPage,
    isShowHeader: true,
    menuName: "Payment",
  },
  {
    path: "/orderSuccess",
    page: OrderSuccess,
    isShowHeader: false,
    menuName: "Order success",
  },
  {
    path: "/products",
    page: ProductsPage,
    isShowHeader: true,
    menuName: "Products",
  },
  {
    path: "/product/:type",
    page: TypeProductPage,
    isShowHeader: true,
    menuName: "Product",
  },
  {
    path: "/sign-in",
    page: SignInPage,
    isShowHeader: true,
    menuName: "Sign in",
  },
  {
    path: "/sign-up",
    page: SignUpPage,
    isShowHeader: true,
    menuName: "Sign up",
  },
  {
    path: "/product-details/:id",
    page: ProductDetailsPage,
    isShowHeader: true,
    menuName: "Details",
  },
  {
    path: "/profile-user",
    page: ProfilePage,
    isShowHeader: true,
    menuName: "Profile",
  },
  {
    path: "/system/admin",
    page: AdminPage,
    isShowHeader: false,
    isPrivated: true,
    menuName: "Admin",
  },
  {
    path: "/notpermitted",
    page: Notpermitted,
    isShowHeader: false,
    menuName: "notpermitted",
  },
  {
    path: "*",
    page: NotFoundPage,
    menuName: "Error",
  },
];

// Import public pages
import LandingPage from "../pages/LandingPage";

// Import private pages
import Dashboard from "../pages/Dashboard";
import Transaction from "../pages/Transaction";
import Category from "../pages/Category";
import Bills from "../pages/Bills";
import Saving from "../pages/Saving";
import Wallet from "../pages/Wallet";
import StatisticPage from "../pages/Statistic";

// Import Authorization pages
import Login from '../pages/Login';
import Signup from "../pages/Signup";

// Import Layout
import PublicPageLayout from "../components/layout/PublicPageLayout";
import PrivatePageLayout from "../components/layout/PrivatePageLayout";
import AuthLayout from "../components/layout/AuthLayout";

// Public routes
export const publicRoutes = [
    {
        path: "/",
        component: LandingPage,
        layout: PublicPageLayout
    },
    {
        path: "/signup",
        component: Signup,
        layout: AuthLayout
    },
    {
        path: "/login",
        component: Login,
        layout: AuthLayout
    }
];

export const privateRoutes = [
    {
        path: "/transaction",
        component: Transaction,
        layout: PrivatePageLayout
    },
    {
        path: "/category",
        component: Category,
        layout: PrivatePageLayout
    },
    {
        path: "/invoices",
        component: Bills,
        layout: PrivatePageLayout
    },
    {
        path: "/planning",
        component: Saving,
        layout: PrivatePageLayout
    },
    {
        path: "/dashboard",
        component: Dashboard,
        layout: PrivatePageLayout
    },
    {
        path: "/wallets",
        component: Wallet,
        layout: PrivatePageLayout
    },
    {
        path: "/statistics",
        component: StatisticPage,
        layout: PrivatePageLayout
    }
]


// Import public pages
import LandingPage from "../pages/public/LandingPage";

// Import private pages
import Dashboard from "../pages/private/Dashboard";
import Transaction from "../pages/private/Transaction";
import Category from "../pages/private/Category";
import Bills from "../pages/private/Bills";
import Saving from "../pages/private/Saving";
import Wallet from "../pages/private/Wallet";
import StatisticPage from "../pages/private/Statistic";

// Import Authorization pages
import Login from '../pages/public/Login';
import Signup from "../pages/public/Signup";

// Import Layout
import PublicPageLayout from "../components/layout/PublicPageLayout";
import PrivatePageLayout from "../components/layout/PrivatePageLayout";
import AuthLayout from "../components/layout/AuthLayout";
import { AboutUs } from "../pages/public/AboutUs";
import { FAQ } from "../pages/public/faq";
import { TAP } from "../pages/public/termsandservice";

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
    },
    {
        path: "/aboutus",
        component: AboutUs,
        layout: PublicPageLayout
    },
    {
        path: "/faq",
        component: FAQ,
        layout: PublicPageLayout
    },
    {
        path: "/policy",
        component: TAP,
        layout: PublicPageLayout
    },
];

export const privateRoutes = [
    {
        path: "/transaction",
        component: Transaction,
        layout: PrivatePageLayout,
        header: 'My Transactions'
    },
    {
        path: "/category",
        component: Category,
        layout: PrivatePageLayout,
        header: 'My Categories'
    },
    {
        path: "/invoices",
        component: Bills,
        layout: PrivatePageLayout,
        header: 'My Invoices'
    },
    {
        path: "/planning",
        component: Saving,
        layout: PrivatePageLayout,
        header: 'My Planning'
    },
    {
        path: "/dashboard",
        component: Dashboard,
        layout: PrivatePageLayout,
        header: 'My Dashboard'
    },
    {
        path: "/wallets",
        component: Wallet,
        layout: PrivatePageLayout,
        header: 'My Wallets'
    },
    {
        path: "/statistics",
        component: StatisticPage,
        layout: PrivatePageLayout,
        header: 'My Statistics'
    }
]


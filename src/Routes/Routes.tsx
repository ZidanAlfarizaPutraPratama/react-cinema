import { lazy } from "react";

const DashboardPage = lazy(() => import('../Pages/DashboardPage/DashboardPage'));

export interface iPageRoutes{
    name: string,
    path: string,
    component: React.ReactElement
}

const PageRoutes: iPageRoutes[] = [
    {
        name: "Dashboard",
        path: "/",
        component: <DashboardPage />
    }
]

export default PageRoutes;
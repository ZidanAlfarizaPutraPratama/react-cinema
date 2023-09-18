import { lazy } from "react";

const DashboardPage = lazy(() => import('../Pages/DashboardPage/DashboardPage'));

export interface iPageRoutes{
    path: string,
    component: React.ReactElement
}

const PageRoutes: iPageRoutes[] = [
    {
        path: "/",
        component: <DashboardPage />
    }
]

export default PageRoutes;
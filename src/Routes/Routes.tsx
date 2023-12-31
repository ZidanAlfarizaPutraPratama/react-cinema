import { lazy } from "react";

const DashboardPage = lazy(() => import('../Pages/DashboardPage/DashboardPage'));
const GenresPage = lazy(() => import('../Pages/GenresPage/GenresPage'));

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
    },
    {
        name: "Genres",
        path: "/genres",
        component: <GenresPage />
    }
]

export default PageRoutes;
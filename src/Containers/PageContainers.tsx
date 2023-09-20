import { Suspense } from "react"
import SuspenseContainer from "./SuspenseContainers/SuspenseContainer"
import PageRoutes, { iPageRoutes } from "../Routes/Routes"
import { Route, Routes } from 'react-router-dom'

const PageContainers = () => {
  return (
    <main className="vh-100 vw-100 px-5 py-3">
        <Suspense fallback={<SuspenseContainer />}>
            <Routes>
                {
                    PageRoutes.map((el: iPageRoutes) => {
                        return (
                            <Route key={el.path} path={el.path} element={el.component} />
                        );
                    })
                }
            </Routes>
        </Suspense>
    </main>
  )
}

export default PageContainers
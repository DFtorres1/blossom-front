import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./shared/components/Layout";
import { Fragment, lazy, Suspense } from "react";
import LoadingScreen from "./shared/components/LoadingScreen";

const routesConfig: RoutesType[] = [
  {
    id: "root",
    exact: true,
    layout: Layout,
    path: "/",
    component: lazy(() => import("src/views/pages/characters/CharacterList")),
  },
  {
    id: "not-found",
    exact: true,
    layout: Layout,
    path: "/404",
    component: lazy(() => import("src/views/pages/NotFound")),
  },
  {
    id: "*",
    layout: Layout,
    path: "*",
    component: () => <Navigate to="/404" />,
  },
];

const renderRoutes = (routes: RoutesType[]) =>
  routes ? (
    <Suspense fallback={<LoadingScreen />}>
      <Routes>
        {routes.map((route) => {
          const Layout = route.layout || Fragment;
          const Component = route.component;
          return (
            <Route
              key={route.id}
              path={route.path ?? ""}
              element={
                <Layout>
                  {route.routes ? renderRoutes(route.routes) : <Component />}
                </Layout>
              }
            />
          );
        })}
      </Routes>
    </Suspense>
  ) : null;

const RenderRoutes = () => {
  return renderRoutes(routesConfig);
};

export default RenderRoutes;

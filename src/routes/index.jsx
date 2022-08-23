import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import routes from "./routes";

export const AppRouter = () => {
  return (
    <Router>
      <Routes>
        {routes.map((route) => {
          return (
            <Route key={route.path} path={route.path} element={route.element}>
              {route.children.length &&
                route.children.map((childRoute) => (
                  <Route key={childRoute.path} path={childRoute.path} element={childRoute.element} />
                ))}
            </Route>
          );
        })}
      </Routes>
    </Router>
  );
};

export default AppRouter;

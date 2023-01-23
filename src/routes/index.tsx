import { RouteObject, useRoutes } from "react-router-dom";
import { lazyImport } from '@/utils/lazyImport';
import { Home } from "@/features/home/Home";

const { FormStepsRoutes } = lazyImport(
  () => import("@/features/formSteps"),
  "FormStepsRoutes"
);

export const Routes: RouteObject[] = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/venta/*",
    element: <FormStepsRoutes />,
  },
];

export const AppRoutes = () => {
  const element = useRoutes(Routes);
  return element;
};

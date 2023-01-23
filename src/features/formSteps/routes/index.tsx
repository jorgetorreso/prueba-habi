import { Route, Routes } from "react-router-dom";
import { steps } from "../steps";
import { FormStep } from "../FormStep";

export const FormStepsRoutes = () => {
  return (
    <Routes>
      {steps.map((step) => {
        return <Route key={step.step} path={step.path} element={<FormStep/>} />;
      })}
    </Routes>
  );
};

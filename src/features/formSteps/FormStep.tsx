import { Header } from "@/components/Header";
import StepsBar from "./components/StepBar/StepBar";
import "./FormStep.scss";
import FormData from "./components/FormData/FormData";
import { useLocation, useNavigate } from "react-router-dom";
import { selectData } from "./formStepSlice";
import { useAppSelector } from "@/app/hooks";
import { steps } from "./steps";
import Resume from "./components/Resume";
import { isEmpty } from "./utils";
import { useEffect } from "react";

export const FormStep = () => {
  const data = useAppSelector(selectData);
  const location = useLocation().pathname;
  const navigate = useNavigate();
  const currentStep = steps.filter(
    (step) => `/venta${step.path}` === location
  )[0];
  const totalStep = steps.length;
  if (!currentStep) <></>;

  



  useEffect(() => {
    const goToFirstStep = () => {
      localStorage.clear();
      navigate(`/venta${steps[0].path}`);
    };
    if (currentStep.step > 1 && isEmpty(data)) goToFirstStep();
  }, [currentStep.step, data, navigate]);

  return (
    <section>
      <Header />
      <div className="FormStep__wrapper">
        <StepsBar totalStep={totalStep} currentStep={currentStep} />
        <div className="FormStep__row">
          <div className="FormStep__col FormStep__col--1">
            <FormData currentStep={currentStep} />
          </div>
          <div className="FormStep__col FormStep__col--2">
            <Resume />
          </div>
        </div>
      </div>
    </section>
  );
};

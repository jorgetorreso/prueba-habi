import { steps } from "../../steps";
import { Step } from "../../types";
import "./StepBar.scss";

interface IStepBar {
  currentStep: Step;
  totalStep: number;
}

const StepBar = ({ currentStep, totalStep }: IStepBar) => {
  return (
    <div className="StepBar">
      {steps.map((step, i) => {
        const Icon = step.iconNav;
        const isCurrent = currentStep.step === i + 1;
        return (
          <div
            key={step.id}
            className={`StepBar__item ${isCurrent ? "active" : ""}`}
          >
            <div className={"StepBar__item__icon"}>
              <Icon width={"35px"} height={"35px"} />
            </div>
            {isCurrent && (
              <div className={"StepBar__item__info"}>
                <b>
                  Paso {step.step} de {totalStep}
                </b>
                <h3>{step.title}</h3>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default StepBar;

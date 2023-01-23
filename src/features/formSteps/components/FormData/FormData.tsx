import "./FormData.scss";
import { Step } from "../../types";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { ReactComponent as BackIcon } from "@/assets/svg/back.svg";
import { setStep, selectData, selectStep, setData } from "../../formStepSlice";
import { useAppSelector, useAppDispatch } from "@/app/hooks";
import { useNavigate } from "react-router-dom";
import { steps } from "../../steps";
import { getDefaultValues, getInputName, showField } from "../../utils";
import { useEffect, useState } from "react";
import { Modal } from "../Modal";
import Resume from "../Resume";

interface IFormData {
  currentStep: Step;
}

const FormData = ({ currentStep }: IFormData) => {
  const [showModal, setShowModal] = useState(false);
  const handleKeyup = (e: { keyCode: number }) =>
    e.keyCode === 27 && setShowModal(false);
  const toggleModal = () => setShowModal(!showModal);

  const data = useAppSelector(selectData);
  const step = useAppSelector(selectStep);
  const navigate = useNavigate();

  const prev = () => navigate(-1);

  const next = () => {
    const stepNext = currentStep.step + 1;
    const moveNext = steps.find((step) => step.step === stepNext);
    if (moveNext) {
      navigate(`/venta${moveNext.path}`);
    } else {
      navigate("/");
    }
  };

  const inputs = getInputName(currentStep.inputs);
  const inputsDefaultValues = getDefaultValues(currentStep.inputs);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (showModal) {
      window.addEventListener("keyup", handleKeyup);
      window.addEventListener("resize", toggleModal);
    }
    return () => {
      window.removeEventListener("keyup", handleKeyup);
      window.removeEventListener("resize", toggleModal);
    };
  });

  return (
    <div className="FormData">
      <h2 className="FormData__title">{currentStep.title}</h2>
      <p className="FormData__description">{currentStep.description}</p>
      <Formik
        initialValues={{ ...inputsDefaultValues, ...data }}
        validate={(values) => {
          const errors: any = {};
          Object.keys(values).forEach((key) => {
            const infoInput = inputs[key];

            if (!infoInput) return;

            if (infoInput?.required?.value && !values[key]) {
              errors[key] = infoInput?.required?.message;
            }

            if (infoInput?.maxValue && values[key] > infoInput?.maxValue) {
              errors[
                key
              ] = `El maximo valor permitido es ${infoInput?.maxValue}`;
            }
          });
          return errors;
        }}
        onSubmit={(values, actions) => {
          dispatch(setData(values));
          dispatch(setStep(step + 1));
          next();
          actions.setSubmitting(false);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          /* and other goodies */
        }) => (
          <Form className="FormData__form">
            {currentStep.inputs.map((input, i) => {
              const props = {
                type: input.type,
                name: input.name,
                className: "FormData__field",
                required: input.required.value,
                key: input.name,
              };
              const showFieldForm = showField(input, values);
              if (!showFieldForm) return <></>;
              return (
                <div
                  className={`FormData__group ${input.type}`}
                  key={input.name}
                >
                  <label htmlFor={input.name} className="FormData__label">
                    {input.label &&
                      `${input.label} ${input.required.value ? "*" : ""}`}
                  </label>
                  {input.type === "select" && input.values ? (
                    <Field {...props} as="select">
                      {input.values.map((val, i) => (
                        <option key={val} value={val}>
                          {val}
                        </option>
                      ))}
                    </Field>
                  ) : (
                    <Field {...props} />
                  )}
                  <ErrorMessage name={input.name} component="div" />
                </div>
              );
            })}

            <div className="FormData__buttomContainer">
              {currentStep.step > 1 && (
                <button
                  className="FormData__backButton"
                  type="button"
                  onClick={prev}
                >
                  <BackIcon height="40px" /> Volver
                </button>
              )}

              <button
                className="FormData__nextButton"
                type="submit"
                disabled={isSubmitting}
              >
                Siguiente paso
              </button>

              <button
                className="FormData__resumeButton"
                type="button"
                onClick={toggleModal}
              >
                Resumen
              </button>
            </div>
          </Form>
        )}
      </Formik>

      {showModal && (
        <Modal toggleModal={toggleModal}>
          <Resume />
        </Modal>
      )}
    </div>
  );
};

export default FormData;

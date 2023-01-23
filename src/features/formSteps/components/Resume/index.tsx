import "./Resume.scss";
import { selectData } from "../../formStepSlice";
import { useAppSelector } from "@/app/hooks";
import { dataKey } from "../../constants/resume";

const Resume = () => {
  const data = useAppSelector(selectData);
  return (
    <div className="Resume">
      <h2 className="Resume__title">Resumen</h2>
      {Object.entries(data).map(([k, v]) => {
        return (
          <div key={k} className="Resume__item">
            <span className="Resume__item__label">{dataKey[k]}:</span> {v}
          </div>
        );
      })}
    </div>
  );
};

export default Resume;

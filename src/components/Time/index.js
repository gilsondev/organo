import "./Time.css";
import { Colaborator } from "../Colaborador";

export const Time = (props) => {
  const css = { backgroundColor: props.secondaryColor };

  return (
    props.colaborators.length > 0 && (
      <section className="time" style={css}>
        <h3 style={{ borderColor: props.primaryColor }}>{props.name}</h3>
        <div className="colaborators">
          {props.colaborators.map((colaborator) => (
            <Colaborator key={colaborator.name} {...colaborator} />
          ))}
        </div>
      </section>
    )
  );
};

import "./Time.css";
import { Colaborator } from "../Colaborador";
import React from "react";
import hexToRgba from "hex-to-rgba";

export const Time = ({
  team,
  colaborators,
  onDelete,
  onClickFavorite,
  onChangeColor,
}) => {
  return (
    colaborators.length > 0 && (
      <section
        className="time"
        style={{
          backgroundImage: "url(/images/fundo.png)",
          backgroundColor: hexToRgba(team.color, 0.6),
        }}
      >
        <input
          type="color"
          className="input-color"
          value={team.color}
          onChange={(event) => onChangeColor(team.id, event.target.value)}
        />
        <h3 style={{ borderColor: team.color }}>{team.name}</h3>
        <div className="colaborators">
          {colaborators.map((colaborator) => (
            <Colaborator
              backgroundColor={team.color}
              key={colaborator.id}
              onDelete={onDelete}
              onClickFavorite={onClickFavorite}
              {...colaborator}
            />
          ))}
        </div>
      </section>
    )
  );
};

import React, { useState } from "react";

export function GenerarColores() {
  const [color, setColor] = useState("");
  const [coloresGenerados, setColoresGenerados] = useState([]);

  function obtenerColor() {
    const codColores = [
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
      "G",
    ];
    let colors = "#";
    for (let i = 0; i < 6; i++) {
      colors += codColores[Math.floor(Math.random() * codColores.length)];
    }
    return colors;
  }

  const generarColores = () => {
    const cantColores = Array.from({ length: parseInt(color) }, obtenerColor);
    setColoresGenerados(cantColores);
  };

  return (
    <div>
      <div className="contenedor">
        <select onChange={(e) => setColor(e.target.value)} value={color}>
          <option value="">Escoje Cantidad de Colores</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
        </select>
        <button onClick={generarColores} className="btn-colors">
          Generar
        </button>
      </div>
      <div className="container">
        {coloresGenerados.map((color, id) => (
          <div
            key={id}
            style={{ backgroundColor: color }}
            className="colores-generados"
          ></div>
        ))}
      </div>
    </div>
  );
}

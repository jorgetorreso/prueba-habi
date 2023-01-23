import React from "react";
import "./Hero.scss";
import { useNavigate } from "react-router-dom";
export const Hero = () => {
  const navigate = useNavigate();
  return (
    <div className="Hero">
      <div className="Hero__wrapper">
        <h3>Llegaste al lugar que estabas buscando</h3>
        <h1>
          <strong className="Hero__strong">Compramos</strong>
          <br />
          tu vivienda en 10 días*
        </h1>
        <h4>
          <strong>Solicita una oferta gratis</strong> ingresando la dirección,
          características del inmueble y tus datos de contacto. Uno de nuestros
          expertos te hará una oferta.
        </h4>

        <button
          className="Hero__buttom-container"
          onClick={() => navigate("/venta/p-1--informacion-personal")}
        >
          <span>Vender</span>
        </button>
      </div>
    </div>
  );
};

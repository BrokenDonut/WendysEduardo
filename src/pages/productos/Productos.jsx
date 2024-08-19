import { useState, useEffect } from "react";
import { Aromatica } from "./aromaticas/Aromatica";
import { Lechugas } from "./lechugas/Lechuga";
import { Carrito } from "./carrito/Carrito";
import "./Productos.css";
import { Brote } from "./brotes/Brote";
import { HojasVerder } from "./hojasVerdes/HojaVerder";
import { Verduras } from "./verduras/Verduras";
import { Especiales } from "./especiales/Especiales";
import { useLocation } from "react-router-dom";

export const Productos = () => {
  const [seccionActiva, setSeccionActiva] = useState("Lechugas");
  const location = useLocation();

  useEffect(() => {
    const hash = location.hash.replace("#", "");
    if (hash) {
      setSeccionActiva(hash.charAt(0).toUpperCase() + hash.slice(1).replace( " "));
    }
  }, [location]);

  return (
    <div>
      <div className="nombre-producto">
        <a href="#lechugas" onClick={() => setSeccionActiva("Lechugas")}>
          Lechugas
        </a>
        <a href="#aromaticas" onClick={() => setSeccionActiva("Aromaticas")}>
          Hierbas Aromaticas
        </a>
        <a href="#brotes" onClick={() => setSeccionActiva("Brotes")}>
          Brotes
        </a>
        <a href="#hojas" onClick={() => setSeccionActiva("Hojas")}>
          Hojas Verdes
        </a>
        <a href="#verduras" onClick={() => setSeccionActiva("Verduras")}>
          Verduras
        </a>
        <a href="#especiales" onClick={() => setSeccionActiva("Especiales")}>
          Especiales
        </a>
      </div>
      <div className="mercaderia">
        <Carrito></Carrito>
        <div id="lechugas">{seccionActiva === "Lechugas" && <Lechugas />}</div>
        <div id="aromaticas">{seccionActiva === "Aromaticas" && <Aromatica />}</div>
        <div id="brotes">{seccionActiva === "Brotes" && <Brote />}</div>
        <div id="hojas">{seccionActiva === "Hojas" && <HojasVerder />}</div>
        <div id="verduras">{seccionActiva === "Verduras" && <Verduras />}</div>
        <div id="especiales">{seccionActiva === "Especiales" && <Especiales />}</div>
      </div>
    </div>
  );
};



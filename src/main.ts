import { esPrimo,divisores,raizYResiduo } from "./app";

const input = document.getElementById("numero") as HTMLInputElement;
const btn = document.getElementById("Analizar") as HTMLButtonElement;
const resultado = document.getElementById("resultado") as HTMLDivElement;

btn.addEventListener("click", () => {
  if(input.value == null){
    resultado.innerHTML = "Tienes que ingresar un número primero"
    return;
  }
  const numero = parseInt(input.value);
  if(isNaN(numero)){
    resultado.innerHTML = "Ingresa un número valido porfavor";
    return;
  }
  if(numero < 0){
    resultado.innerHTML = "El número no puede ser negativo";
    return;
  }
  if(numero > 10000){
    resultado.innerHTML = "Numero demasiado grande"
    return;
  }
  const {raiz, residuo} = raizYResiduo(numero);
  const primo = esPrimo(numero);
  const divs = divisores(numero);

  resultado.innerHTML = `
    <p><strong>Número:</strong> ${numero}</p>
    <p><strong>Es primo:</strong> ${primo ? "Sí" : "No"}</p>
    <p><strong>Raíz entera:</strong> ${raiz}</p>
    <p><strong>Residuo:</strong> ${residuo}</p>
    ${!primo ? `<p><strong>Divisores:</strong> ${divs.join(", ")}</p>` : ""}
  `;

})
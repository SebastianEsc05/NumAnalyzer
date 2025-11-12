import { esPrimo, divisores, raizYResiduo, validarNumero } from "./app";
import type { CancelToken } from "./app";

const input = document.getElementById("numero") as HTMLInputElement;
const btnAnalizar = document.getElementById("analizar") as HTMLButtonElement;
const btnCancelar = document.getElementById("cancelar") as HTMLButtonElement;
const resultado = document.getElementById("resultado") as HTMLDivElement;
const cargando = document.getElementById("cargando") as HTMLDivElement;
const cancelado = document.getElementById("cancelado") as HTMLDivElement;

let cancelToken: CancelToken = { cancelado: false };

btnAnalizar.addEventListener("click", async () => {
    cancelToken.cancelado = false;
    cancelado.style.display = "none";
    const numeroString: string = input.value;

    if (!validarNumero(numeroString)) {
        resultado.innerHTML = "Ingresa un número entero válido por favor.";
        return;
    }

    const numeroBigInt: bigint = BigInt(numeroString);

    if (numeroBigInt <= 0n) {
        resultado.innerHTML = "El número no puede ser cero ni negativo";
        return;
    }

    const limite = 100000000000n;
    if (numeroBigInt > limite) {
        resultado.innerHTML = `Número demasiado grande, el límite es ${limite.toString()}.`;
        return;
    }

    cargando.style.display = "block";
    resultado.innerHTML = "";

    const { raiz, residuo } = raizYResiduo(numeroBigInt, cancelToken);
    const primo = await esPrimo(numeroBigInt, cancelToken);

    let divsHTML = "";
    if (!primo) {
        const divs = await divisores(numeroBigInt,cancelToken);
        divsHTML = `<p><strong>Divisores:</strong> ${divs.join(", ")}</p>`;
    }

    if (!cancelToken.cancelado) {
        resultado.innerHTML = `
            <p><strong>Número:</strong> ${numeroBigInt.toString()}</p>
            <p><strong>Es primo:</strong> ${primo ? "Sí" : "No"}</p>
            <p><strong>Raíz entera:</strong> ${raiz.toString()}</p>
            <p><strong>Residuo:</strong> ${residuo.toString()}</p>
            ${divsHTML}
        `;
    } else {
        cancelado.style.display = "block";
    }

    cargando.style.display = "none";
});

btnCancelar.addEventListener("click", () => {
    cancelToken.cancelado = true;
});

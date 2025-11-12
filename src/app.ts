export interface CancelToken {
    cancelado: boolean;
}

export async function esPrimo(num: bigint, token?: CancelToken): Promise<boolean> {
    let i = 2n;
    return new Promise((resolve) => {
        const iterar = () => {
            if (token?.cancelado) return resolve(false);
            if (i * i > num) return resolve(true);
            if (num % i === 0n) return resolve(false);

            i++;
            if (i % 1000n === 0n) {
                setTimeout(iterar, 0);
            } else {
                iterar();
            }
        };
        iterar();
    });
}

export async function divisores(num: bigint, raiz: bigint, token?: CancelToken): Promise<bigint[]> {
    const numDivisores: bigint[] = [];
    let i = 1n;

    return new Promise((resolve) => {
        const iterar = () => {
            if (token?.cancelado) return resolve(numDivisores);
            if (i > raiz) return resolve(numDivisores);

            if (num % i === 0n) numDivisores.push(i);
            i++;
            if (i % 1000n === 0n) setTimeout(iterar, 0);
            else iterar();
        };
        iterar();
    });
}

export function raizYResiduo(num: bigint, token?: CancelToken): { raiz: bigint; residuo: bigint } {
    let resta = num;
    let raiz = 0n;
    let impar = 1n;

    while (resta >= impar) {
        if (token?.cancelado) break;
        resta -= impar;
        raiz++;
        impar += 2n;
    }

    return { raiz, residuo: resta };
}

export function validarNumero(inputString: string): boolean {
    if (inputString.trim() === "") return false;
    try {
        BigInt(inputString);
        return true;
    } catch (e) {
        return false;
    }
}

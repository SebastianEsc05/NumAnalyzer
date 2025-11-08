export function esPrimo(n: number): boolean {
    if(n <= 1) return false;
    for(let i = 2; i <= Math.sqrt(n); i++){
        if(n % i === 0) return false;
    }
    return true;
}

export function divisores(n: number): number[] {
    const numDivisores: number[] = [];
    for(let i = 1; i <= n; i++){
        if(n % i === 0) numDivisores.push(i);
    }
    return numDivisores;
}

export function raizYResiduo(n: number){
    const raiz = Math.floor(Math.sqrt(n));
    const residuo = n - raiz * raiz;
    return {raiz,residuo};
}
export function esPrimo(num: number): boolean {
    for (let i = 2; i * i <= num; i++) {
        if (num % i === 0) return false;
    }

    return true;
}

export function divisores(num: number): number[] {
    const numDivisores: number[] = [];
    for(let i = 1; i <= num; i++){
        if(num % i === 0) numDivisores.push(i);
    }
    return numDivisores;
}

export function raizYResiduo(num: number): {raiz: number, residuo : number}{
    let resta = num;
    let raiz = 0;
    let impar = 1;
    while(resta >= impar){
        resta -= impar;
        raiz++;
        impar += 2;
    }
    return {raiz, residuo: resta};
}
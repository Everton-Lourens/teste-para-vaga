


function getFibonacci(isNumSeq = 0) {
    if (isNumSeq !== '0' && Number(isNumSeq) === 0)
        return `"${isNumSeq}" não é um número válido.`;
    let num1 = 0;
    let num2 = 1;
    let result;
    let checkSeq = false;
    for (let i = 0; i < 100; i++) {
        result = num1 + num2;
        num2 = num1;
        num1 = result;
        if (isNumSeq !== null && Number(isNumSeq) === result)
            checkSeq = true;
    }
    return `O número ${isNumSeq}${checkSeq ? '' : ' não'} pertence a sequência de Fibonacci!`
}

console.log(getFibonacci(89));
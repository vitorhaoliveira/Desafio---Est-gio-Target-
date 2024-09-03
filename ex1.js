function pertenceAFibonacci(numero) {
    if (numero < 0) return false;

    function gerarFibonacciAte(max) {
        let fib = [0, 1];
        
        while (true) {
            let proximo = fib[fib.length - 1] + fib[fib.length - 2];
            if (proximo > max) break;
            fib.push(proximo);
        }
        return fib;
    }

    const fibonacciSeq = gerarFibonacciAte(numero);

    return fibonacciSeq.includes(numero);
}

const numeroInformado = 21;

if (pertenceAFibonacci(numeroInformado)) {
    console.log(`${numeroInformado} pertence à sequência de Fibonacci.`);
} else {
    console.log(`${numeroInformado} não pertence à sequência de Fibonacci.`);
}

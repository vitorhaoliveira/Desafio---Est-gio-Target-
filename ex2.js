function contarLetraA(str) {
    let contador = 0;

    str = str.toLowerCase();

    for (let i = 0; i < str.length; i++) {
        if (str[i] === 'a') {
            contador++;
        }
    }
    return contador;
}

const stringInformada = "Aqui está um exemplo de string com várias letras 'a'. Incluindo maiúscula: A.";

const quantidadeA = contarLetraA(stringInformada);

if (quantidadeA > 0) {
    console.log(`A letra 'a' (maiúscula e minúscula) ocorre ${quantidadeA} vez(es) na string.`);
} else {
    console.log("A letra 'a' não ocorre na string.");
}

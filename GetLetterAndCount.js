
function countLetter(phrase, letter) {
    const arrayLetter = phrase.split('');
    let result = 0;
    arrayLetter.map((mapLetter) => {
        mapLetter === letter && result++
    });

    return result;
}

function getLetterAndCount(phrase) {
    if (typeof phrase !== 'string' && phrase?.length > 0)
        return `O parâmetro phrase com "${phrase}" não é uma string válida.`;

    if (phrase.includes('a')) {
        console.log(`contém a letra "a" em maiúsculo! Quantidade: ${countLetter(phrase, 'a')}`);
    }
    if (phrase.includes('A')) {
        console.log(`contém a letra "A" em maiúsculo! Quantidade: ${countLetter(phrase, 'A')}`);
    }
}


getLetterAndCount('aaweaaabaaraadaaaaA');
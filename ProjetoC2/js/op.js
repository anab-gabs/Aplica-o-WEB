function iniciar() {

    var cores = ['cor', 'cor', 'cor', 'cor', 'cor', 'cor', 'cor', 'cor', 'cor', 'cor'];
    var vida = 3;
    var tentativa = 3;
    for (i = 0; i < cores.length; i++) {
        cores[i] = preencheVetorCores();
        if (i > 0) {
            for (let j = 0; j < i; j++) {
                if (cores[j] == cores[i]) {
                    cores[i] = preencheVetoCores();
                }
            }
        }
    }

    cores.sort();

    var corPos = parseInt(Math.random() * 10);
    var corEscolhida = cores[corPos];

    do {
        var cor = prompt("Opções:\n\n" + cores[0] + "\n" + cores[1] + "\n" + cores[2] + "\n" + cores[3] + "\n" + cores[4] + "\n" + cores[5] + "\n" + cores[6] + "\n" + cores[7] + "\n" + cores[8] + "\n" + cores[9] + "\n\nTente adivinhar a cor: ");
        tentativa--;
        if (cor.toUpperCase() != corEscolhida.toUpperCase()) {

            if (corEscolhida.localeCompare(cor) > 0) {
                alert("Errou!\nDica: Em ordem alfabética, a cor é maior do que digitou.\nVocê ainda possui " + tentativa + " tentativas.")
            } else {
                alert("Errou!\nDica: Em ordem alfabética, a cor é menor do que digitou.\nVocê ainda possui " + tentativa + " tentativas.")
            }
            vida--;

        }

    } while (cor.toUpperCase() != corEscolhida.toUpperCase() && vida > 0);

    if (cor.toUpperCase() == corEscolhida.toUpperCase() && vida > 0) {
        document.body.style.background = cor;
        alert("Parabéns. Você acertou!")

    } else {
        alert("Você perdeu!\n\nA cor era " + corEscolhida + "!");
    }

}

function coresTotais() {
    var coresTotais = ['AliceBlue', 'AntiqueWhite', 'Aqua', 'Aquamarine', 'Azure', 'Beige', 'Bisque', 'Black', 'BlanchedAlmond', 'Blue', 'BlueViolet', 'Brown', 'BurlyWood', 'CadetBlue', 'Chartreuse', 'Chocolate', 'Coral', 'CornflowerBlue', 'Cornsilk', 'Crimson', 'Cyan', 'DarkBlue', 'DarkCyan', 'DarkGoldenRod', 'DarkGray', 'DarkGrey', 'DarkGreen', 'DarkKhaki', 'DarkMagenta', 'DarkOliveGreen', 'DarkOrange', 'DarkOrchid', 'DarkRed', 'DarkSalmon', 'DarkSeaGreen', 'DarkSlateBlue', 'DarkSlateGray', 'DarkSlateGrey', 'DarkTurquoise', 'DarkViolet', 'DeepPink', 'DeepSkyBlue', 'DimGray', 'DimGrey', 'DodgerBlue', 'FireBrick', 'FloralWhite', 'ForestGreen', 'Fuchsia', 'Gainsboro', 'GhostWhite', 'Gold', 'GoldenRod', 'Gray', 'Grey', 'Green', 'GreenYellow', 'HoneyDew', 'HotPink', 'IndianRed', 'Indigo', 'Ivory', 'Khaki', 'Lavender', 'LavenderBlush', 'LawnGreen', 'LemonChiffon', 'LightBlue', 'LightCoral', 'LightCyan', 'LightGoldenRodYellow', 'LightGray', 'LightGrey', 'LightGreen', 'LightPink', 'LightSalmon', 'LightSeaGreen', 'LightSkyBlue', 'LightSlateGray', 'LightSlateGrey', 'LightSteelBlue', 'LightYellow', 'Lime', 'LimeGreen', 'Linen', 'Magenta', 'Maroon', 'MediumAquaMarine', 'MediumBlue', 'MediumOrchid', 'MediumPurple', 'MediumSeaGreen', 'MediumSlateBlue', 'MediumSpringGreen', 'MediumTurquoise', 'MediumVioletRed', 'MidnightBlue', 'MintCream', 'MistyRose', 'Moccasin', 'NavajoWhite', 'Navy', 'OldLace', 'Olive', 'OliveDrab', 'Orange', 'OrangeRed', 'Orchid', 'PaleGoldenRod', 'PaleGreen', 'PaleTurquoise', 'PaleVioletRed', 'PapayaWhip', 'PeachPuff', 'Peru', 'Pink', 'Plum', 'PowderBlue', 'Purple', 'RebeccaPurple', 'Red', 'RosyBrown', 'RoyalBlue', 'SaddleBrown', 'Salmon', 'SandyBrown', 'SeaGreen', 'SeaShell', 'Sienna', 'Silver', 'SkyBlue', 'SlateBlue', 'SlateGray', 'SlateGrey', 'Snow', 'SpringGreen', 'SteelBlue', 'Tan', 'Teal', 'Thistle', 'Tomato', 'Turquoise', 'Violet', 'Wheat', 'White', 'WhiteSmoke', 'Yellow', 'YellowGreen'];


    return coresTotais
}

function preencheVetorCores() {
    var vetorCores = coresTotais();

    do {
        var corPos = parseInt(Math.random() * 1000)
    } while (corPos > 145)

    var cor = vetorCores[corPos];
    return cor
}
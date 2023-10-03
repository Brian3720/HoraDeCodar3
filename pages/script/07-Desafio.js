var notas = [];
        var notasValidas = 0;
        var somaNotas = 0;

        for (var i = 1; i <= 6; i++) {
            var nota;
            do {
                nota = parseFloat(prompt("Digite a nota " + i +"º" + " (entre 0 e 10):"));
            } while (isNaN(nota) || nota < 0 || nota > 10);

            notas.push(nota);
            notasValidas++;
            somaNotas += nota;
        }

        var media = somaNotas / notasValidas;
        document.write("A média das notas válidas é: " + media.toFixed(2));
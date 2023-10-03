var dentroDoIntervalo = 0;
        var foraDoIntervalo = 0;

        for (var i = 1; i <= 10; i++) {
            var valor = parseFloat(prompt("Digite o valor #" + i + ":"));

            if (valor >= 24 && valor <= 42) {
                dentroDoIntervalo++;
            } else {
                foraDoIntervalo++;
            }
        }

        alert("Valores dentro do intervalo [24, 42]: " + dentroDoIntervalo);
        alert("Valores fora do intervalo [24, 42]: " + foraDoIntervalo);

var soma = 0;
        var quantidadeNumeros = 0;

        for (var i = 15; i <= 100; i++) {
            soma += i;
            quantidadeNumeros++;
        }

        var media = soma / quantidadeNumeros;
        document.write("A média aritmética dos números de 15 a 100 é: " + media);

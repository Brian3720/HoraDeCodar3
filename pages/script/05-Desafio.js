var numero1 = parseInt(prompt("Digite o primeiro número inteiro:"));
        var numero2 = parseInt(prompt("Digite o segundo número inteiro (deve ser maior que o primeiro):"));
        var soma = 0;
        var quantidadeNumeros = 0;

        if (numero1 >= numero2) {
            alert("O segundo número deve ser maior que o primeiro. Recarregue a página e tente novamente.");
        } else {
            for (var i = numero1; i <= numero2; i++) {
                soma += i;
                quantidadeNumeros++;
            }

            var mediaTotal = soma / quantidadeNumeros;
            document.write("A média aritmética dos números entre " + numero1 + " e " + numero2 + " é: " + mediaTotal.toFixed(2));
        }
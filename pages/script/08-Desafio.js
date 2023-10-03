var n = parseInt(prompt("Digite um valor N maior que zero:"));

        if (n > 0) {
            for (var i = 1; i <= n; i++) {
                document.write(i + " | ");
            }
        } else {
            document.write("Por favor, insira um valor maior que zero.");
        }
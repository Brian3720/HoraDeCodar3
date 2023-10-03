var n = parseInt(prompt("Digite um valor N para imprimir as tabuadas de 1 a N:"));

        for (var i = 1; i <= n; i++) {
            alert("Tabuada do " + i + ":");
            for (var j = 1; j <= 10; j++) {
                alert(i + " x " + j + " = " + (i * j));
            }
            alert("");
        }
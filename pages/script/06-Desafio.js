var alunosAprovados = 0;

        do {
            var nota1 = parseFloat(prompt("Digite a primeira nota do aluno:"));
            var nota2 = parseFloat(prompt("Digite a segunda nota do aluno:"));

            var media = (nota1 + nota2) / 2;

            if (media >= 9.5) {
                alert("Aluno aprovado! Média final: " + media.toFixed(2));
                alunosAprovados++;
            } else {
                alert("Aluno reprovado. Média final: " + media.toFixed(2));
            }

            var resposta = prompt("Calcular a média de outro aluno? (S/N)").toUpperCase();
        } while (resposta === "S");

        alert("Quantidade de alunos aprovados: " + alunosAprovados);
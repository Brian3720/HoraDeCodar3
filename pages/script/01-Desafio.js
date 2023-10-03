var n1 = parseInt(prompt("Digite o primeiro valor a ser dividido"));
        var n2 = parseInt(prompt("Digite o segundo valor"));
        for(var i=0;i<100;i++){
            if(n2==0 || n2<0){
                n2 = parseInt(prompt("Digite um valor que não seja 0 ou negativo, por favor."));
            }
        }
        var resultado = n1/n2;
        document.write("O resultado é: "+resultado);
const calcular = document.getElementById('calcular')


function imc (){
    const nome = document.getElementById('nome').value;
    const altura = document.getElementById('altura').value;
    const peso = document.getElementById('peso').value;
    const resultado = document.getElementById('resultado');

    if (nome !== '' && altura !== '' && peso !== ''){

        const valorIMC = (peso / (altura * altura)).toFixed(2);

        let classificacao = '';

        if (valorIMC < 18.5){
            classificacao = 'abaixo do peso'
        }
        
        resultado.textContent = `${nome} seu IMC é ${valorIMC} e você esta ${classificacao}`;

        resultado.textContent = valorIMC;

    } else{
        resultado.textContent = 'preencha os campos';
    }
    
}

calcular.addEventListener("click", imc);
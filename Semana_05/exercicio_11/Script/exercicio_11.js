/* Área da div principal */

var div_principal = document.getElementById("forms_contador");
div_principal.style.cssText = "border: 3px solid black; margin: auto; border-radius: 15px; background-color: #D3D3D3; padding: 2%; box-shadow: 5px 5px 5px 	#A9A9A9";

    var texto_principal = document.createElement("h1");
    div_principal.appendChild(texto_principal);
    texto_principal.innerHTML = "Total";
    texto_principal.style.cssText = "font-size: 50px; text-align: center";

    /* Área da div total pessoas */

    var div_total_pessoas = document.createElement("div");
    div_principal.appendChild(div_total_pessoas);
    div_total_pessoas.style.cssText = "width: 250px; margin:auto; border: 2px solid black; border-radius: 10px; background-color: white"

    var total_pessoas = document.createElement("h1");
    total_pessoas.innerHTML = 0;
    div_total_pessoas.appendChild(total_pessoas);
    total_pessoas.style.cssText = "text-align: center"

    /* Área da div pessoas */

    var div_pessoas = document.createElement("div");
    div_principal.appendChild(div_pessoas);
    div_pessoas.style.cssText = "background-color: #EE82EE; margin-top: 5%; display: grid; grid-template-column: repeat(1fr,)"


        /* Área da div homens */

        var div_homem = document.createElement("div");
        div_pessoas.appendChild(div_homem);
        div_homem.style.cssText = "background-color:yellow; display: flex; flex-direction: column";
     
        var imagem_homem = document.createElement("img");
        div_homem.appendChild(imagem_homem);
        imagem_homem.src = "../Images/homem.png";
        imagem_homem.style.cssText = "width: 350px";
        

        var botao_positivo_homem = document.createElement("img");
        div_homem.appendChild(botao_positivo_homem);
        botao_positivo_homem.src = "../Images/mais.png";
        botao_positivo_homem.style.cssText = "width: 150px";

        var botao_negativo_homem = document.createElement("img");
        div_homem.appendChild(botao_negativo_homem);
        botao_negativo_homem.src = "../Images/menos.png";
        botao_negativo_homem.style.cssText = "width: 100px";

        var titulo_homem = document.createElement("h1");
        div_homem.appendChild(titulo_homem);
        titulo_homem.innerHTML = "Homens";
        
        var div_total_homem = document.createElement("div");
        div_homem.appendChild(div_total_homem);
        div_total_homem.style.cssText = "width: 250px; margin:auto; border: 2px solid black; border-radius: 10px; background-color: white";

        var total_homem = document.createElement("h1");
        div_total_homem.appendChild(total_homem);
        total_homem.innerHTML = 0;
        total_homem.style.cssText = "text-align: center";

        /* Área da div mulher */

        var div_mulher = document.createElement("div");
        div_pessoas.appendChild(div_mulher);
        div_mulher.style.cssText = "display:flex; flex-direction: column";

        var imagem_mulher = document.createElement("img");
        imagem_mulher.src = "../Images/mulher.png";
        div_mulher.appendChild(imagem_mulher);
        imagem_mulher.style.cssText = "width: 350px";

        var botao_positivo_mulher = document.createElement("img");
        div_mulher.appendChild(botao_positivo_mulher);
        botao_positivo_mulher.src = "../Images/mais.png";
        botao_positivo_mulher.style.cssText = "width: 150px";
        

        var botao_negativo_mulher = document.createElement("img");
        div_mulher.appendChild(botao_negativo_mulher);
        botao_negativo_mulher.src = "../Images/menos.png";
        botao_negativo_mulher.style.cssText = "width: 100px";

        var titulo_mulher = document.createElement("h1");
        div_mulher.appendChild(titulo_mulher);
        titulo_mulher.innerHTML = "Mulheres";

        var div_total_mulher = document.createElement("div");
        div_mulher.appendChild(div_total_mulher);
        div_total_mulher.style.cssText = "width: 250px; margin:auto; border: 2px solid black; border-radius: 10px; background-color: white";

        var total_mulher = document.createElement("h1");
        div_total_mulher.appendChild(total_mulher);
        total_mulher.innerHTML = 0;
        total_mulher.style.cssText = "text-align: center";

    var botao_reload = document.createElement("img");
    div_principal.appendChild(botao_reload);
    botao_reload.src = "../Images/recarregar.png";
    botao_reload.style.cssText = "width: 50px; margin-left: 25%";

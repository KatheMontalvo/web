

calcular = document.querySelector(".calcular");
resultado = document.querySelector(".resultado")

imagenes=["Flaco.jpg","normal.png","obesidad1.png","obesidad2.png","obesidad3.png","sobrepreso.png"]

calcular.addEventListener('click', ()=>{
    
    peso = document.getElementById("peso").value;
    altura = document.getElementById("altura").value;
    altura = parseInt(altura)*0.01;
    imc = parseInt(peso)/Math.pow(altura,2);

    if (imc < 18.5){
        resultado.innerHTML  =`<h1>Flaco</h1><img src='${imagenes[0]}'></img>`;
    }else if(imc > 18.5 && imc < 24.9){
        resultado.innerHTML  =`<h1>Normal</h1><img src='${imagenes[1]}'></img>`;
    }else if(imc > 25 && imc < 29.9){
        resultado.innerHTML  =`<h1>Sobrepeso</h1><img src='${imagenes[5]}'></img>`;
    }else if(imc > 30 && imc < 34.9){
        resultado.innerHTML  =`<h1>Obesidad 1</h1><img src='${imagenes[2]}'></img>`;
    }else if(imc > 35 && imc < 39.9){
        resultado.innerHTML  =`<h1>Obesidad 2</h1><img src='${imagenes[3]}'></img>`;
    }else if(imc > 40 && imc < 49.9){
        resultado.innerHTML  =`<h1>Obesidad 3</h1><img src='${imagenes[4]}'></img>`;
    }
})



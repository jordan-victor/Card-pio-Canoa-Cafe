//SCRIPT MOSTRAR ITENS
function mostra_op1(){
    document.getElementById("op1").style.display = "block"
    document.getElementById("o1").style.backgroundColor = "rgb(255, 237, 213)"

    document.getElementById("op2").style.display = "none"
    document.getElementById("o2").style.backgroundColor = "transparent"

    document.getElementById("op3").style.display = "none"
    document.getElementById("o3").style.backgroundColor = "transparent"

    document.getElementById("op4").style.display = "none"
    document.getElementById("o4").style.backgroundColor = "transparent"

    document.getElementById("op5").style.display = "none"
    document.getElementById("o5").style.backgroundColor = "transparent"

    document.getElementById("op6").style.display = "none"
    document.getElementById("o6").style.backgroundColor = "transparent"
}




function mostra_op2(){
    document.getElementById("op1").style.display = "none"
    document.getElementById("o1").style.backgroundColor = "transparent"

    document.getElementById("op2").style.display = "block"
    document.getElementById("o2").style.backgroundColor = "rgb(255, 237, 213)"

    document.getElementById("op3").style.display = "none"
    document.getElementById("o3").style.backgroundColor = "transparent"

    document.getElementById("op4").style.display = "none"
    document.getElementById("o4").style.backgroundColor = "transparent"

    document.getElementById("op5").style.display = "none"
    document.getElementById("o5").style.backgroundColor = "transparent"

    document.getElementById("op6").style.display = "none"
    document.getElementById("o6").style.backgroundColor = "transparent"
}




function mostra_op3(){
    document.getElementById("op1").style.display = "none"
    document.getElementById("o1").style.backgroundColor = "transparent"

    document.getElementById("op2").style.display = "none"
    document.getElementById("o2").style.backgroundColor = "transparent"

    document.getElementById("op3").style.display = "block"
    document.getElementById("o3").style.backgroundColor = "rgb(255, 237, 213)"

    document.getElementById("op4").style.display = "none"
    document.getElementById("o4").style.backgroundColor = "transparent"

    document.getElementById("op5").style.display = "none"
    document.getElementById("o5").style.backgroundColor = "transparent"

    document.getElementById("op6").style.display = "none"
    document.getElementById("o6").style.backgroundColor = "transparent"
}




function mostra_op4(){
    document.getElementById("op1").style.display = "none"
    document.getElementById("o1").style.backgroundColor = "transparent"

    document.getElementById("op2").style.display = "none"
    document.getElementById("o2").style.backgroundColor = "transparent"

    document.getElementById("op3").style.display = "none"
    document.getElementById("o3").style.backgroundColor = "transparent"

    document.getElementById("op4").style.display = "block"
    document.getElementById("o4").style.backgroundColor = "rgb(255, 237, 213)"

    document.getElementById("op5").style.display = "none"
    document.getElementById("o5").style.backgroundColor = "transparent"

    document.getElementById("op6").style.display = "none"
    document.getElementById("o6").style.backgroundColor = "transparent"
}




function mostra_op5(){
    document.getElementById("op1").style.display = "none"
    document.getElementById("o1").style.backgroundColor = "transparent"

    document.getElementById("op2").style.display = "none"
    document.getElementById("o2").style.backgroundColor = "transparent"

    document.getElementById("op3").style.display = "none"
    document.getElementById("o3").style.backgroundColor = "transparent"

    document.getElementById("op4").style.display = "none"
    document.getElementById("o4").style.backgroundColor = "transparent"

    document.getElementById("op5").style.display = "block"
    document.getElementById("o5").style.backgroundColor = "rgb(255, 237, 213)"

    document.getElementById("op6").style.display = "none"
    document.getElementById("o6").style.backgroundColor = "transparent"
}




function mostra_op6(){
    document.getElementById("op1").style.display = "none"
    document.getElementById("o1").style.backgroundColor = "transparent"

    document.getElementById("op2").style.display = "none"
    document.getElementById("o2").style.backgroundColor = "transparent"

    document.getElementById("op3").style.display = "none"
    document.getElementById("o3").style.backgroundColor = "transparent"

    document.getElementById("op4").style.display = "none"
    document.getElementById("o4").style.backgroundColor = "transparent"

    document.getElementById("op5").style.display = "none"
    document.getElementById("o5").style.backgroundColor = "transparent"

    document.getElementById("op6").style.display = "block"
    document.getElementById("o6").style.backgroundColor = "rgb(255, 237, 213)"
}









//SCRIPT CARROSEL DE IMAGENS
function carrosel(){
    var imagens = document.getElementById("imgs")

    var cont = document.getElementById("contador").innerHTML
    var contador = parseInt(cont) + 1
    var cont = document.getElementById("contador").innerHTML = contador

    if(contador == 1){
        imagens.setAttribute("src", "img1.png")
    }
    else if(contador == 2){
        imagens.setAttribute("src", "img2.png")
    }
    else if(contador > 2){
        var cont = document.getElementById("contador").innerHTML = 0
    }
}

setInterval(carrosel, 3000)









//SCRIPT ENVIAR PEDIDO PARA O WHATSAPP
function pedir(){
    let texto = document.querySelector("input[type ='text-area']")
    let link = document.getElementById("link")

    if(texto.value != ""){
        let link_conteudo = `https://wa.me/92984622165?text= ${texto.value}`
        link.setAttribute("href", link_conteudo)

        setTimeout(()=>{
            document.querySelector("input[type ='text-area']").value = ""
            link.removeAttribute("href")
        }, 300)
    }
    else{
        alert("Digite o seu pedido")
    }
}

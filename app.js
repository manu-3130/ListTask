const miInput = document.getElementById("input");
const miFormulario = document.getElementById("formulario")
const miCaja = document.getElementById("box")
const boton = document.getElementById("boton")
let contador = 0;

miFormulario.addEventListener("submit", function (e, contador) {
    e.preventDefault();

    const li = document.createElement("li")
    const div = document.createElement("div")
    const button1 = document.createElement("button")
    const button2 = document.createElement("button")
    const p = document.createElement("p")
    const i = document.createElement("i")

    p.textContent = miInput.value

    li.appendChild(div)
    li.appendChild(button1)
    div.appendChild(button2)
    div.appendChild(p)


    li.classList.add("cajita")
    div.classList.add("display")
    i.classList.add("bi")
    i.classList.add("bi-check2-circle")
    p.classList.add("nada")
    myFuncion(button1, li, button2);
    button1.textContent = "X";
    button2.textContent = "☺";

    const tarea = li;
    miCaja.appendChild(tarea)
    miInput.value = "";

    button1.addEventListener("click", function(e){
        let item = e.target.id
        console.log(item)

        for(let i = 0; i < miCaja.children.length; i++){
            console.log(miCaja.children[i].id)
            if(miCaja.children[i].id === item){
                let eliminar = miCaja.children[i];
                miCaja.removeChild(eliminar)
                break
            }
        }
    })

    button2.addEventListener("click", function(e){
        let item = e.target.id
        console.log(item)

        for(let i = 0; i < miCaja.children.length; i++){

            if(miCaja.children[i].id === item){
                let tachar = miCaja.children[i].children[0].children[1];
                let valor = tachar.classList.value 

                if(valor === "nada"){
                    tachar.classList.add("tachar")
                }else{
                    tachar.classList.remove("tachar")
                }
                
                break
            }
        }
    })

});

function myFuncion(i, e, f){
    console.log(contador++)
    i.setAttribute("id", contador)
    e.setAttribute("id", contador)
    f.setAttribute("id", contador)
}

function lightblack(){
    let body = document.body;
    let header = document.getElementById("header");
    let Luna = document.getElementById("bi-moon-fill");
    let sol = document.getElementById("bi-brightness-high");

    if(body.style.background === "rgb(22, 23, 34)"){
        console.log("HOLA")
        body.style.background = "#ffffff"
        header.style.background = "url(./bg-desktop-light.jpg)"
        header.style.backgroundSize = "100%"
        header.style.backgroundRepeat = "no-repeat"
        Luna.style.display = "flex"
        sol.style.display = "none"
    }else{
        body.style.background = "rgb(22, 23, 34)"
        header.style.background = "url(./bg-desktop-dark.jpg)"
        header.style.backgroundSize = "100%"
        header.style.backgroundRepeat = "no-repeat"
        Luna.style.display = "none"
        sol.style.display = "flex"
    }
    
}
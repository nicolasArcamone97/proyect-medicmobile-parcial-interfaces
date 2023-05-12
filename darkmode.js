
let boton = document.getElementById("boton");
let body = document.body;

boton.addEventListener("click",function(){
    let val = body.classList.toggle("darkmode")
    localStorage.setItem( "boton",val)
})


let valor = localStorage.getItem("boton")

if (valor=="true"){
    body.classList.add("darkmode")
} else {
    body.classList.remove("darkmode")
}


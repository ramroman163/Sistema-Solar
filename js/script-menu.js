var boton_menu = document.getElementById("boton_slide_menu");
boton_menu.addEventListener("click", () => mostrar_menu());

function mostrar_menu(){
    console.log("HOLA");
    var menu = document.getElementById("menu-planetas").style.display = "flex";
    var contenido = document.getElementById("articulo").style.display = "none";
    var encabezado = document.getElementById("encabezado").style.display = "none";
    var encabezado = document.getElementById("footer-info").style.display = "none";
}

var boton_menu2 = document.getElementById("boton-salir-menu");
boton_menu2.addEventListener("click",() => ocultar_menu());

function ocultar_menu(){
    console.log("HOLA");
    var menu = document.getElementById("menu-planetas").style.display = "none";
    var contenido = document.getElementById("articulo").style.display = "flex";
    var encabezado = document.getElementById("encabezado").style.display = "flex";
}

window.addEventListener("load", () =>{
    setTimeout(() => {
        document.querySelector("body").classList.remove("cuerpo");
        document.querySelector(".loader").style.opacity = 0;
        document.querySelector(".loader").style.pointerEvents = "none";
    }, 100);
})
function sayHello (user) {
    if(user){
        alert("Hola, " + user + " es un gusto saludarte!");
    }
}

window.addEventListener("DOMContentLoaded", () => {
    const user = prompt("¿Cuál es tu Nombre?");
    sayHello(user);
});

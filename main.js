//console.log("Hola Mundo cruel desde la consola")

var app = document.getElementById('app');
var typewriter = new Typewriter(app, {
    loop: true
});
typewriter.typeString('Account Security Manager')
    .pauseFor(2500)
    .deleteAll()
    .typeString('Security Expert')
    .pauseFor(2500)
    .deleteChars(7)
    .start();
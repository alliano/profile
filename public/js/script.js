
const myName = "Im, Audia Naila Safa";

document.addEventListener('DOMContentLoaded', function() {
    new TypeIt("#my-name", {
       speed: 50
    }).type(myName, {
        delay: 2000
    }).delete(20, {
        delay: 2000
    }).type(myName, {
        delay: 2000
    }).go();
});

AOS.init();
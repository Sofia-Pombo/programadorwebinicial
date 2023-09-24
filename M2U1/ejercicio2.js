let texto = document.getElementById('textarea');
let result = document.getElementById('resultado');

texto.addEventListener("keyup", function() {
    result.textContent = "Contador de caracteres: " + texto.value.length;
});

document.addEventListener("DOMContentLoaded", function () {
  const noche = document.getElementById("noche");
  const dia = document.getElementById("dia");

  noche.addEventListener("click", function () {
    const colores = "#34495e";
    document.body.style.backgroundColor = colores;
  });

  dia.addEventListener("click", function () {
    const colores = "#DEE4B8";
    document.body.style.backgroundColor = colores;
  });

});
let precio = document.getElementById("precioA");
let cantidad = document.getElementById("cantidadA");
let btn = document.getElementById("btn");

btn.addEventListener("click", () => {
  let cantidad: number = Number(cantidadA.value);

  precioTotal = monto * cantidad;

  if (precioTotal >= 1000) {
    descuento = (precioTotal * 10) / 100;
    montoConDescuento = precioTotal - descuento;
    console.log("Por gastar mas de 1000 tiene un 10% de descuento.");
    console.log("El monto a pagar es: " + montoConDescuento);
  } else {
    console.log("No tiene descuento. El monto a pagar es: " + precioTotal);
  }
});

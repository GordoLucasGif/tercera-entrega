const mostrarMensaje = function (mensaje) {
    alert(mensaje);
    console.log(mensaje);
};

function cargarCompra(pregunta) {
    let cantidad = 0;
    let subtotal = 0;

    while (true) {
        const entrada = prompt(pregunta);

        if (entrada === null || entrada.trim().toLowerCase() === "salir") {
            break;
        }

        const precio = Number(entrada.replace(",", "."));

        if (Number.isFinite(precio) && precio > 0) {
            subtotal += precio;
            cantidad++;
        } else {
            mostrarMensaje("Ingresá un precio mayor que cero.");
        }
    }

    return { cantidad, subtotal };
}

const calcularTotal = (subtotal, envio) => subtotal + envio;

const costoEnvio = 500;
const compra = cargarCompra('Ingresá un precio o escribí "salir" para terminar.');

if (compra.cantidad > 0) {
    const total = calcularTotal(compra.subtotal, costoEnvio);
    const resumen = "Productos: " + compra.cantidad +
        "\nSubtotal: $" + compra.subtotal.toFixed(2) +
        "\nEnvío: $" + costoEnvio +
        "\nTotal: $" + total.toFixed(2);

    mostrarMensaje(resumen);
} else {
    mostrarMensaje("No cargaste ningún producto.");
}
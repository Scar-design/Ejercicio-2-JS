function generarNumeroAleatorio() {
    const min = 1;
    const max = 500;

    const numeroAleatorio = Math.floor (Math.random() * (max - min + 1)) + min;

    document.getElementById ('numero').textContent = numeroAleatorio;
}
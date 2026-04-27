function calcular(){
    let ingresos = parseFloat(document.getElementById("txtIngresos").value) || 0;
    let egresos = parseFloat(document.getElementById("txtEgresos").value) || 0;
    let monto = parseFloat(document.getElementById("txtMonto").value) || 0;
    let plazo = parseFloat(document.getElementById("txtPlazo").value) || 0;
    let tasa = parseFloat(document.getElementById("txtTasaInteres").value) || 0;
    let disponible = calcularDisponible(ingresos, egresos);
    let capacidad = calcularCapacidadPago(disponible);
    let interes = calcularInteresSimple(monto, tasa, plazo);
    let total = calcularTotalPagar(monto, interes);
    let cuota = calcularCuotaMensual(total, plazo);
    let aprobado = aprobarCredito(capacidad, cuota);
    console.log(monto, plazo, tasa);
    console.log(ingresos, egresos);
    console.log(total);
    document.getElementById("spnDisponible").innerHTML = "USD " + disponible;
    document.getElementById("spnCapacidadPago").innerHTML = "USD " + capacidad;
    document.getElementById("spnInteresPagar").innerHTML = "USD " + interes;
    document.getElementById("spnTotalPrestamo").innerHTML = "USD " + total;
    document.getElementById("spnCuotaMensual").innerHTML = "USD " + cuota;
    if (aprobado){
        document.getElementById("spnEstadoCredito").innerHTML = "Crédito Aprobado";
    } else {
        document.getElementById("spnEstadoCredito").innerHTML = "Crédito Rechazado";
    }
}
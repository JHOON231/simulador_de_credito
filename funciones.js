function calcularDisponible(ingresos, egresos){
    let resultado = ingresos - egresos;
    return resultado < 0 ? 0 : resultado;
} 

function calcularCapacidadPago(montoDisponible){
    return montoDisponible * 0.5; 
}

function calcularInteresSimple(monto, tasa, plazoAnios){
    let interes = monto * (tasa / 100) * plazoAnios;
    return interes;
}

function calcularTotalPagar(monto, interes){
    return monto + interes + 100;
}

function calcularCuotaMensual(total, plazoAnios){
    let meses = plazoAnios * 12;
    return total / meses;
}

function aprobarCredito(capacidadPago, cuotaMensual){
    return capacidadPago > cuotaMensual;
} 

function reiniciar(){
    document.getElementById("txtIngresos").value = "";
    document.getElementById("txtEgresos").value = "";
    document.getElementById("txtMonto").value = "";
    document.getElementById("txtPlazo").value = "";
    document.getElementById("txtTasaInteres").value = "";
    document.getElementById("spnDisponible").innerHTML = "USD 0";
    document.getElementById("spnCapacidadPago").innerHTML = "USD 0";
    document.getElementById("spnInteresPagar").innerHTML = "USD 0";
    document.getElementById("spnTotalPrestamo").innerHTML = "USD 0";
    document.getElementById("spnCuotaMensual").innerHTML = "USD 0";
    document.getElementById("spnEstadoCredito").innerHTML = "";
}
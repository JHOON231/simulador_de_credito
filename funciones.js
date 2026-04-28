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

function validarCampo(idInput, idError, nombreCampo) {
    let valor = document.getElementById(idInput).value.trim();
    let error = document.getElementById(idError);

    if (valor === "") {
        error.innerHTML = "El campo " + nombreCampo + " es obligatorio";
        return false;
    }

    if (isNaN(valor)) {
        error.innerHTML = "Solo se permiten números";
        return false;
    }

    if (parseFloat(valor) <= 0) {
        error.innerHTML = nombreCampo + " debe ser mayor a 0";
        return false;
    }

    error.innerHTML = "";
    return true;
}

function validarTodo(){
    let v1 = validarCampo("txtIngresos", "errorIngresos", "Ingresos");
    let v2 = validarCampo("txtEgresos", "errorEgresos", "Egresos");
    let v3 = validarCampo("txtMonto", "errorMonto", "Monto");
    let v4 = validarCampo("txtPlazo", "errorPlazo", "Plazo");
    let v5 = validarCampo("txtTasaInteres", "errorTasa", "Tasa");

    return v1 && v2 && v3 && v4 && v5;
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
    document.getElementById("errorIngresos").innerHTML = "";
    document.getElementById("errorEgresos").innerHTML = "";
    document.getElementById("errorMonto").innerHTML = "";
    document.getElementById("errorPlazo").innerHTML = "";
    document.getElementById("errorTasa").innerHTML = "";
}
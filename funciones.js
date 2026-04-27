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
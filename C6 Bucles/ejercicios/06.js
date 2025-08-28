function tieneTresDigitos(num) {
  // Si el número recibido tiene tres dígitos, retorna true.
  // Caso contrario, retorna false.
  // Tu código:
  if (num.toString().length === 3) {
    return true;
    
  }
  return false;
}

console.log(tieneTresDigitos(120));

module.exports = tieneTresDigitos;

// Do not change any of the function names

function mayuscula(nombre) {
  //La función recibe un nombre y debe devolver el mismo que recibe pero con su primer letra en mayúscula
  //ej: Recibe "mario" ----> Devuelve "Mario"
  //Tu código:
  let a = []
  let xd = ""
  a = nombre.split('')
  xd = a[0].toUpperCase()
  a.shift()
  a.unshift(xd)
  return a.join ('')
}

function invocarCallback(cb) {
  // Invoca al callback `cb`
  //Tu código:
  return cb();
}

function operacionMatematica(n1, n2, cb) {
  //Vamos a recibir una función que realiza una operación matemática como callback junto con dos números.
  //Devolver el callback pasándole como argumentos los números recibidos.
  //Tu código:
  return cb(n1,n2);
}

function sumarArray(numeros, cb) {
  // Suma todos los números enteros (int/integers) de un array ("numeros")
  // Pasa el resultado a `cb`
  // No es necesario devolver nada
  //Tu código:
  suma = 0
  for (let i = 0; i < numeros.length; i++) {
    suma += numeros[i]
  }
  cb(suma);
}

function forEach(array, cb) {
  // Itera sobre la matriz "array" y pasa los valores al callback uno por uno
  // Pista: Estarás invocando a `cb` varias veces (una por cada valor en la matriz)
  //Tu código:
  array.forEach(element => {
    cb(element)
  });
}

function map(array, cb) {
  // Crea un nuevo array
  // Itera sobre cada valor en "array", pásalo a `cb` y luego ubicar el valor devuelto por `cb` en un nuevo array
  // El nuevo array debe tener la misma longitud que el array del argumento
  //Tu código:
  let a = []
  a = array.map(num => 
  cb (num)
  ) 
  return a;
}

function filter(array) {
  //Filtrar todos los elementos del array que comiencen con la letra "a".
  //Devolver un nuevo array con los elementos que cumplen la condición
  //Tu código:
  let save = []
  array.forEach(element => {
  if (element[0] === "a") {
    save.push (element)
  }
  });
  return save;

/* let BoneTipazo = 0
let juampitonto = []
for (let i = 0; i < array.length; i++) {
  BoneTipazo = array[i].split('')
  if (BoneTipazo[0] === "a") {
    juampitonto.push (array[i])
  }
};
return juampitonto; */

/* let BoneTipazo = 0
let juampitonto = []
for (let i = 0; i < array.length; i++) {
  if (array[0][0] === "a") {
    juampitonto.push (array[i])
  }
};
return juampitonto; */
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  mayuscula,
  invocarCallback,
  operacionMatematica,
  sumarArray,
  forEach,
  map,
  filter
};

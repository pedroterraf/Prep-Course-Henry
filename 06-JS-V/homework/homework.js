// No cambies los nombres de las funciones.

function crearUsuario() {
  // Crea una Clase de ES6 o una función constructora llamada "Usuario".
  // El constructor de esta clase debe tener las propiedades: "usuario", "nombre", "email" y "password".
  // El valor de cada propiedad la recibirá por parámetro.
  // Además, esta clase debe tener un método llamado "saludar".
  // Este método debe retornar el string: 'Hola, mi nombre es {{nombre}}'.
  // El valor {{nombre}} debe ser el nombre definido para la instancia de la clase.
  // Retornar la clase.
  // Tu código:
  class Usuario {
    constructor(usuario,nombre,email,password) {
      this.usuario = usuario;
      this.nombre = nombre;
      this.email = email;
      this.password = password;
    }
  }
    Usuario.prototype.saludar = function () {
      return 'Hola, mi nombre es' + this.nombre
    };
    return Usuario
 } 

function agregarMetodoPrototype(Constructor) {
  // Agrega un método al Constructor del `prototype`
  // El método debe llamarse "saludar" y debe devolver la string "Hello World!"
  // Tu código:
  Constructor.prototype.saludar = function () {
    return "Hello World!"
  }
}

function agregarStringInvertida() {
  // Agrega un método al prototype de String que devuelva la misma cadena de caracteres, pero invertida.
  // El método debe llamarse "reverse"
  // Ej: 'menem'.reverse() => menem
  // 'toni'.reverse() => 'inot'
  // Pista: Necesitarás usar "this" dentro de "reverse"
  String.prototype.reverse = function () {
    return this.split('').reverse().join('');
  }
}

// ---------------------------------------------------------------------------//
  //Crea el constructor de la clase "Persona"
  //Debe tener las propiedades: "nombre", "apellido", "edad" y "domicilio"
  //Debe tener un método llamado "detalle" que nos devuelve un objeto con las propiedades de la persona y sus valores.
  //Ej: { 
    //   Nombre: 'Juan',
    //   Apellido: 'Perez',
    //   Edad: 22,
    //   Domicilio: 'Saavedra 123'
    //  }

  class Persona {
    constructor(nombre,apellido,edad,domicilio) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
    this.domicilio = domicilio;
    
    }
    detalle () {
      return {
      nombre : this.nombre,
      apellido : this.apellido,
      edad : this.edad,
      domicilio : this.domicilio
    }
    }
}

function crearInstanciaPersona(nombre, apellido, edad, dir) {
  //Con esta función vamos a crear una nueva persona a partir de nuestro constructor de persona (creado en el ejercicio anterior)
  //Recibirá los valores "Juan", "Perez", 22, "Saavedra 123" para sus respectivas propiedades
  //Devolver la nueva persona creada
  let nuevaPersona = new Persona (nombre, apellido, edad, dir);
  return nuevaPersona
}
  
function agregarMetodo() {
  //La función agrega un método "datos" a la clase Persona que toma el nombre y la edad de la persona y devuelve: 
  //Ej: "Juan, 22 años"

  Persona.prototype.datos = function () {
    return this.nombre + ", " + this.edad + " años"
  }
}
  

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  crearUsuario,
  agregarMetodoPrototype,
  agregarStringInvertida,
  crearInstanciaPersona,
  agregarMetodo, 
  Persona
};

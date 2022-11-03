const ciudadesDisponibles =new Array('Londres', 'New York', 'Madrid', 'Paris');
console.log(ciudadesDisponibles);

const paises=['Francia', 'España', 'Portugal', 'Argentina'];
console.log(paises);

paises.push('Alemania');
console.log(paises);

ciudadesDisponibles.unshift('Buenos Aires');
console.log(ciudadesDisponibles);

//Mostrando el elemento de la posicion 2
console.log(ciudadesDisponibles[1]);

//splice
paises.splice(1,2,'Alemania', 'Italia');
console.log(paises);
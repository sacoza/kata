var eleccion=prompt ('Escribe resta o suma')
var numero1=prompt ('Escribe un número:');
var numero2=prompt ('Escribe un número:');

var suma="suma";
var resta="resta";

var numero3=12;
var numero4=2;
if (eleccion==suma) {
  var resultado=parseInt(numero1) + parseInt(numero2)

  if (resultado==numero3) {
    alert("acertaste")
}
  else if (resultado!=numero3) {
    alert("Error")
  }
}
if (eleccion==resta) {
  var resultado2=parseInt(numero1) - parseInt(numero2)

  if (resultado2==numero4) {
    alert("acertaste")
}
  else if (resultado2!=numero4) {
    alert("Error")
  }
}

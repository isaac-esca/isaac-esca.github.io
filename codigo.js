function getScrollHeight(elm){
    var savedValue = elm.value
    elm.value = ''
    elm._baseScrollHeight = elm.scrollHeight
    elm.value = savedValue
  }
  
  function onExpandableTextareaInput({ target:elm }){
    // make sure the input event originated from a textarea and it's desired to be auto-expandable
    var rowss = elm.getAttribute('rows');
    if (rowss < 21){
        if( !elm.classList.contains('areaInput') || !elm.nodeName == 'TEXTAREA' ) return
        
        var minRows = elm.getAttribute('data-min-rows')|0, rows;
        !elm._baseScrollHeight && getScrollHeight(elm)
    
        elm.rows = minRows
        rows = Math.ceil((elm.scrollHeight - elm._baseScrollHeight) / 16)
        elm.rows = minRows + rows
    }
  }
function copiarTexto(){
  let copyText = document.querySelector("#input-texto").value;
  console.log(copyText);
  navigator.clipboard.writeText(copyText);
}
function copiarTexto2(){
  let copyText = document.querySelector("#text-input-salida").value;
  console.log(copyText);
  navigator.clipboard.writeText(copyText);
}
function encriptar (){
  var texto = document.querySelector("#input-texto").value;

  if (texto.match(/^[a-z\s]*$/) === null) {
    alert("Favor de solo ingresar:\nletras normales y en minuscula (✔️a - z) (❌A - Z),\nno acentos (✔️a) (❌á),\nni digitos especiales (❌@, |, &, % etc...❌).");
    return;
  }
  var textoCifrado = texto.replace(/e/gi, "enter").replace(/i/gi, "imes").replace(/a/gi, "ai").replace(/o/gi, "ober").replace(/u/gi, "ufat");
  document.querySelector("#text-input-salida").innerHTML = textoCifrado;
  document.querySelector("#text-input-salida").value = textoCifrado;
  document.querySelector("#input-texto").value;
}

function desencriptar (){
  var texto = document.querySelector("#input-texto").value;
  var textoCifrado = texto.replace(/enter/g, "e")
  .replace(/imes/g, "i").replace(/ai/g, "a")
  .replace(/ober/g, "o").replace(/ufat/g, "u");
  document.querySelector("#text-input-salida").innerHTML = textoCifrado;
  document.querySelector("#input-texto").value;
}

var boton1 = document.querySelector("#btn-encriptar");
var boton2 = document.querySelector("#btn-desencriptar");
boton1.onclick = encriptar;
boton2.onclick = desencriptar;
  // global delegated event listener
document.addEventListener('input', onExpandableTextareaInput)


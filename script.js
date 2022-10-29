function repetirFruta() {
  //Cria referência aos elementos da página
  let inFruta = document.getElementById('inFruta')
  let inNumero = document.getElementById('inNumero')
  let outResposta = document.getElementById('outResposta')

  //Obtem conteúdos dos campos de entrada
  let fruta = inFruta.value.toUpperCase()
  let numero = Number(inNumero.value)


  if (numero == 0 || isNaN(numero && fruta == '')) {
    alert('Insira os dados corretamente!!')
    return
  }
  
  let resultado = ''

  for (let i = 1; i <= numero; i++) {
    if(i % 2 == 1) {
      resultado = resultado + fruta + ' * ' 
    }else{
      resultado = resultado + fruta + ' * '
    }
  }

  outResposta.textContent = resultado

} 
//Cria referência ao botão e após associa function ao evento click
let btRepetir = document.getElementById('btRepetir')
btRepetir.addEventListener('click', repetirFruta) 
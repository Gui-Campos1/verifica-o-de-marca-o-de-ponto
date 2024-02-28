function somarUmaHoraUmMinuto() {
  var valorHoras = document.getElementById("valorHoras").value

  // Converter o valor em horas para minutos
  var valorMinutos =
    parseInt(valorHoras.split(":")[0]) * 60 + parseInt(valorHoras.split(":")[1])

  // Somar 659 minutos
  valorMinutos += 659

  // Verificar se passou para o próximo dia
  if (valorMinutos >= 1440) {
    valorMinutos -= 1440 // Ajustar para 00:00
  }

  // Converter o resultado de minutos para horas
  var resultadoHoras = Math.floor(valorMinutos / 60)
  var resultadoMinutosRestantes = valorMinutos % 60

  // Formatar o resultado
  var resultadoFinal =
    ("0" + resultadoHoras).slice(-2) +
    ":" +
    ("0" + resultadoMinutosRestantes).slice(-2)

  // Exibir o resultado
  document.getElementById("resultado").innerHTML =
    "Resultado: " + resultadoFinal
}

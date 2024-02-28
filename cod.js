function somarUmaHoraUmMinuto() {
  var valorHoras = document.getElementById("valorHoras").value

  // Verificar se o valor é "23:59"
  if (valorHoras === "23:59") {
    // Ajustar para "01:00"
    var resultadoFinal = "01:00"

    // Exibir o resultado
    document.getElementById("resultado").innerHTML =
      "Resultado: " + resultadoFinal
  } else if (valorHoras.startsWith("23")) {
    // Obter os minutos do valor inserido
    var valorMinutos = parseInt(valorHoras.split(":")[1])

    // Ajustar para o próximo minuto
    valorMinutos += 1

    // Verificar se passou para o próximo dia
    if (valorMinutos >= 60) {
      valorMinutos = 0 // Ajustar para 00
    }

    // Formatar o resultado
    var resultadoFinal = "00:" + ("0" + valorMinutos).slice(-2)

    // Exibir o resultado
    document.getElementById("resultado").innerHTML =
      "Resultado: " + resultadoFinal
  } else {
    // Converter o valor em horas para minutos
    var valorMinutos =
      parseInt(valorHoras.split(":")[0]) * 60 +
      parseInt(valorHoras.split(":")[1])

    // Resultado próxima marcação
    valorMinutos += 61

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
}

function fahrenheitToCelsius(tempoFahrenheit) {

  //x °F ≘ (x − 32) × 5/9°C
  let tempoCelsius = tempoFahrenheit;
  tempoCelsius -= 32;
  tempoCelsius *= 5./9.;
  return tempoCelsius;
}

function celsiusToFahrenheit(tempoCelsius) {
  
  //x °C ≘ (x × 9/5 + 32) °F
  let tempoFahrenheit = tempoCelsius;
  tempoFahrenheit *= 9./5.;
  tempoFahrenheit += 32;
  return tempoFahrenheit;
}
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

function usGallonsUsToLitres(volGallons) {

  /*  
  * "The US liquid gallon 
  * (frequently called simply "gallon") is legally defined
  * as 231 cubic inches, which is exactly 
  * 3.785411784 litres"
  * https://en.wikipedia.org/wiki/Gallon
  * 
  * knowing this, it should be easy to convert, just multiply by 3.78..
  */
  const litresInGallon = 3.785411784;
  let volLitres = volGallons * litresInGallon;
  return volLitres;
}
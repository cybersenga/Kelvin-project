//Value to convert
const kelvin = 0;

//Convert kelvin to celsius
var celsius = kelvin - 273;

//Covert celsius to fahrenheit
var fahrenheit = celsius * (9 / 5) + 32;

//Round up
fahrenheit = Math.floor(fahrenheit);

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);

//Convert value from Celsius to Newton

const newtonToCelsius = 100;

var newton = newtonToCelsius * (33 / 100);

//newton = Math.floor(newton);

console.log(
  `${newtonToCelsius} degree celsius is approximately ${Math.floor(
    newton
  )} Newton.`
);

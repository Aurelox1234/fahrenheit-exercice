const kelvin = 293;
//température aujourd'hui en Kelvin (293)
const celsius = kelvin-273;
//température aujourd'hui en celsius (kelvin-273)
const fahr = Math.floor(celsius*(9/5)+32);
//température aujourd'hui en fahrenheit (celsius*(9/5)+32)
console.log(`La température est de ${fahr} degres fahrenheit.`);
const newton = Math.floor(celsius*(33/100));
console.log(`La température est de ${newton} newton.`);
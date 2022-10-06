// ---------------------------------- exemplo de some
array = [4,5,6,7,8,9,10]
regraImpar = (item) => item%2 != 0
console.log("Há algum número ímpar? " + array.some(regraImpar));

//-------------------------------- exemplo de every

array = [4,5,6,7,8,9,10]
regraImpar = (item) => item%2 != 0
console.log("Todos os números são ímpar? " + array.every(regraImpar));

///------------------------------ exemplo de filter

array = [4,5,6,7,8,9,10]
regraImpar = (item) => item%2 != 0
console.log("Os números ímpar são: " + array.filter(regraImpar));

///------------------------------ exemplo de foreach

array = [4,5,6,7,8,9,10]

array.forEach( (nro) => 
    console.log(nro + " -> " + (nro%2==0 ? "par" : "ímpar"))
);

///------------------------------- exemplo de reduce
array = [4,5,6,7,8,9,10]

let resultado = array.reduce((acc, val) => acc += (val%2 == 0) ? val : 0, 0);
console.log(`A soma dos numeros pares é: ${resultado}`);

///------------------------------- exemplo de map
array = [4,5,6,7,8,9,10]

var newArray = array.map( (item) => item * 2);
console.log(newArray);
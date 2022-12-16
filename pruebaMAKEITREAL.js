/* EJERCICIO 1
Escribe una funcion llamada numDuplicados que reciba un string y retorne el numero de caracteres que aparecen mas de una vez.*/
console.log('Ejercicio 1');
function numDuplicados(str){
  let contador = 1;
  let repetidas = [];
   str = str.split('').sort();
  for(let i = 0; i < str.length; i ++){
    if (str[i + 1] === str[i]){
      contador ++;
    }else {
      repetidas.push(contador)
      contador = 1;
    }
  }
  let valoresEncontrados = [];
  for (let j = 0; j < repetidas.length; j ++){
    if (repetidas[j] > 1){
        valoresEncontrados.push(repetidas[j])
        
    }
  }
  return valoresEncontrados.length
}

console.log(numDuplicados("abcaa")); // 1
console.log(numDuplicados("abab")); // 2
console.log(numDuplicados("abc")); // 0



/*EJERCICIO 2
Escribe una función llamada `frecuencias` que reciba una cadena de texto y retorne un objeto con el número de veces que aparece cada caracter (exceptuando el espacio en blanco)*/
console.log('Ejercicio 2')
function frecuencias(str){
    str = str.replaceAll(' ','');
    let obj = {};
    for(let i = 0; i < str.length; i ++){
        let letra = str[i];
        if (obj[letra]){
             obj[letra] = obj[letra] + 1;
        } else {
          obj[letra] = 1
        }
    }
    return obj
}


    console.log(frecuencias("hola mundo"));
    // { h: 1, o: 2, l: 1, a: 1, m: 1, u: 1, n: 1, d: 1 }
    
    console.log(frecuencias("anita lava la tina"));
    // { a: 6, n: 2, i: 2, t: 2, l: 2, v: 1 }

/*EJERCICIO 3
Crea una función llamada `caracteresEnComun` que recibe dos argumentos: `str1` y `str2`. La función debe retornar un arreglo con todos los caracteres que las dos cadenas tienen en común.*/
console.log('Ejercicio 3')
    function caracteresEnComun (str1, str2){
         let iguales = [];
         for(letra1 of str1){
          for(letra2 of str2){
            if(letra1 ===  letra2){
              iguales.push(letra1);
            }
          }
        }
        return iguales
    };


    console.log(caracteresEnComun("Hola", "Mundo")); // ["o"]
    console.log(caracteresEnComun("German", "Gabriela")); // ["G", "e", "r", "a"]
    console.log(caracteresEnComun("Hola", "Bye")); // []

/*EJERCICIO 4
Escribir una función llamada `ajustarTexto` que reciba dos argumentos:  un string y un número (que representa una longitud).  La función debe retornar la cadena ajustada a la longitud recibida. Si la longitud de la cadena es mayor al núm*/
console.log('Ejercicio 4')


function ajustarTexto(str, num){
    let numChar = str.length;
   if (numChar >= num){
      return str.substring(0,num)
    }else {
      return str.padEnd(num - numChar,'')
    }
    
}

    console.log(`${ajustarTexto("", 3)}`) // " " 
    console.log(ajustarTexto("hola", 2)) // "ho" 
    console.log(ajustarTexto("Hola", 0)) // "" 
    console.log(ajustarTexto("Hola", 5)) // "Hola "

 /*Dada una matriz de numeros enteros nums y un numero entero target, devuelva los indices de los dos numeros que sumen target.
 Puede suponer que cada entrada tendria exactamente una solucion y no puede usar el mismo elemento dos veces.
 Puede devolver la respuesta en cualquier orden*/
 console.log('Ejercicio 5')
   let nums = [2,7,11,15];
   let nums2 = [3,2,4];
   let nums3 = [3,3];
   let target = 9;
   let target2 = 6;
   let target3 = 6;

    function dosSuma (numeros, objetivo){
      for(let i = 0; i < numeros.length; i ++){
          for(let j = 0; j < numeros.length; j ++){
           if(i != j && (numeros[i] + numeros[j] === objetivo)){
             return [i ,j];
          }
        }
      }
    }
    console.log(dosSuma(nums2, target2))
/*Dada una matriz de enteros nums, mueva todos los 0 al final mientras mantiene el orden relativo de los elementos distintos de cero.*/
console.log('Ejercicio 6');
let numeros = [0,1,0,3,12];

function moveZeroes (numeros){
  let finalCeros = [];
  let arrSinCeros = [];
     for (let i = 0; i < numeros.length; i ++ ){
      if(numeros[i] === 0){
        finalCeros.push(numeros[i])
      } else {
          arrSinCeros.push(numeros[i])
      }
     }   
     return arrSinCeros.concat(finalCeros)
}
console.log(moveZeroes(numeros));

/*Dadas dos cadenas s y t, devuelve true si t es un anagrama de s y false si no.*/
console.log('Ejercicio 7')
let s = 'anagrama';
let t = 'nagaram';

function esAnagrama(s,t){
    s = s.toLowerCase();
    t = t.toLowerCase();
    let str1 = s.split('')
    let str2 = t.split('')
      for(let j = 0; j < str2.length; j ++){
        if(str1.includes(str2[j])){
          continue
        } else {
          return false
        }
      }
      return true
}
console.log(esAnagrama(s,t))
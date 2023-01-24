//!ejercicio 1
//Complete la función solveMeFirst para calcular la suma de dos enteros.

/*Ejemplo


Devolución.

Descripción de la función

Complete la función solveMeFirst en el editor a continuación.

solveMeFirst tiene los siguientes parámetros:

int a: el primer valor
int b: el segundo valor
Devoluciones
- int: la suma de y 

Restricciones


Entrada de muestra

a = 2
b = 3
Salida de muestra

5
Explicación

2 +  3 = 5. */
// a= 4; 
// b= 5;
// function solveMeFirst( a, b) {
//  const sum = a + b;
//  return sum
  
// };
// console.log(solveMeFirst(a,b))


//!Ejercicio 2

/*Dada una matriz de enteros, calcule las proporciones de sus elementos que son positivos, negativos y cero. Imprima el valor decimal de cada fracción en una nueva línea con lugares después del decimal.

Nota: Este desafío introduce problemas de precisión. Los casos de prueba se escalan a seis decimales, aunque las respuestas con un error absoluto de hasta 10^-4 son aceptables.

Ejemplo

Hay n=5 elementos, dos positivos, dos negativos y uno cero. Sus proporciones son 2/5 = 0.400000, 2/5 = 0.400000,  y 1/5 = 0.200000 . Los resultados se imprimen como:

0.400000
0.400000
0.200000

Descripción de la función

Complete la función plusMinus en el editor a continuación.

plusMinus tiene los siguientes parámetros:

int arr[n]: una matriz de enteros
Imprimir
Imprima las proporciones de valores positivos, negativos y cero en la matriz. Cada valor debe imprimirse en una línea separada con dígitos después del decimal. La función no debe devolver un valor. 

Formato de entrada

La primera línea contiene un número entero, , el tamaño de la matriz.
La segunda línea contiene enteros separados por espacios que describen .

Restricciones



Formato de salida

Imprima las siguientes líneas, cada una con decimales:

Proporción de valores positivos
Proporción de valores negativos
Proporción de ceros
Entrada de muestra

STDIN           Function
-----           --------
6               arr[] size n = 6
-4 3 -9 0 4 1   arr = [-4, 3, -9, 0, 4, 1]
Salida de muestra

0.500000
0.333333
0.166667
Explicación

Hay números positivos, números negativos y cero en la matriz.
Las proporciones de ocurrencia son positivas: Negativo:  y ceros: . */
const arr = [-4, 3, -9, 0, 4, 1]
// function plusMinus(arr) {
//     let positive = 0;
//     let negative = 0;
//     let cero = 0;
//     let size = arr.length;
//     arr.forEach(plusMinus => {
//         if(plusMinus > 0) positive++;
//         else if(plusMinus < 0) negative++;
//         else{
//             cero++
//         }
//     })
//     console.log(positive/size);
//     console.log(negative/size);
//     console.log(cero/size);
// }
plusMinus(arr)
//! METODO SUPER AVANZADO DE ANDRES!
function plusMinus(arr) {
    const result = arr.reduce((acc, current) =>{
        if(current > 0){
            acc[0]++;
            return acc;
        } 
        else if(current < 0){
             acc[1]++;
            return acc;
        } 
        else{
            acc[2]++;
            return acc;
        }
    },[0,0,0])
    result.forEach(e =>{
        console.log(e/arr.length);
    })
};
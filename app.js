/// Variables Globales///
let mat = false;
let col = false;
let tam = false;
const compra = [];

///Funcion Menu Principal///
function main() {
    let material = 0;
    let color = 0;
    let tamanio = 0;
    let total = 0;
    let subTotal = 0;
    let menu = 0;
    do {
        menu = prompt("Bienvenido al simulador de precios para impresiones 3d.\nCompleta los parámetros mencionados para estimar el costo de tu impresión.\n1-Material de impresión\n2-Color de impresión\n3-Tamaño de impresión\n4-Finalizar pieza\n5-Salir del simulador.");
        menu = parseInt(menu);
        switch (menu) {
            case 1: if (subTotal == 0) {
                material = materiales();
                subTotal += material.costoMaterial;
                alert("El sub total de tu impresión es de: " + subTotal);
            } else {
                alert("Ya seleccionaste material");
            }
                break
            case 2: if (mat && !col) {
                color = colores();
                subTotal += color.costoColor;
                alert("El sub total de tu impresión es de: " + subTotal);
            } else if (!mat) {
                alert("Debes seleccionar primero el material");
            } else {
                alert("Ya seleccionaste color");
            }
                break
            case 3: if (mat && col && !tam) {
                tamanio = tamanios();
                subTotal += tamanio.costoTamanio;
                alert("El sub total de tu impresión es de: " + subTotal);
            } else if (tam) {
                alert("Ya seleccionaste un tamaño");
            } else {
                alert("Debes seleccionar un material/color");
            }
                break
            case 4:
                if (mat && col && tam) {
                    total = subTotal * 1.22;
                    alert("Calculando costo...\nEl total de su artículo es: $" + total + ", impuestos incluídos.\nPuedes continuar agregando piezas al carrito o selecciona 5 en el menu principal para salir.");

                    ///Objeto///
                    const impresion1 = new Impresion(material.tipoMaterialItem, material.costoMaterial, color.tipoColorItem, color.costoColor, tamanio.tipoTamanioItem, tamanio.costoTamanio, total);
                    
                    ///Método de array///
                    compra.push(impresion1);

                    subTotal = 0;
                    mat = false;
                    col = false;
                    tam = false;
                } else {
                    alert("Debes seleccionar un material, color y tamaño");
                }
                break
            case 5: costoTotalCarrito();
                    alert("Estas saliendo del simulador...\n Te esperamos pronto!");
                break
            default: alert("Opción inválida, por favor intente de nuevo");
        }
    } while (menu != 5);
}


///Funcion material///

function materiales() {
    let costoMaterial = 0;
    let tipoMaterialItem = "";
    let materialIngresado = prompt("-MATERIALES-\n Selecciona el material con el que deseas imprimir:\n1-PLA (precio base $100)\n2-RESINA (precio base $200)\n3-Menú principal");
    materialIngresado = parseInt(materialIngresado);
    do {

        switch (materialIngresado) {
            case 1: costoMaterial = 100;
                tipoMaterialItem = "pla";
                alert("Tu pieza se imprimirá con pla.");
                break
            case 2: costoMaterial = 200;
                tipoMaterialItem = "resina";
                alert("Tu pieza se imprimirá con resina.");
                break
            case 3:
                alert("Volviendo al menú principal.");
                break
            default:
                alert("Opcion invalida!");
        }
        if (costoMaterial > 0) {
            mat = true;
        }
        return {
            costoMaterial: costoMaterial,
            tipoMaterialItem: tipoMaterialItem
        };

    } while (opcion != 3);
}

///Funcion color///

function colores() {
    let costoColor = 0;
    let tipoColorItem = "";
    let colorIngresado = prompt("-COLORES-\n Selecciona el color de tu impresión:\n1-BLANCO (tiene un costo adicional de $50)\n2-NEGRO (tiene un costo adicional de $100)\n3-COLORES (tiene un costo adicional de $200)\n4-SALIR");
    colorIngresado = parseInt(colorIngresado);
    do {

        switch (colorIngresado) {
            case 1: costoColor = 50;
                tipoColorItem = "blanco";
                alert("Seleccionaste una pieza en color blanco.");
                break
            case 2: costoColor = 100;
                tipoColorItem = "negro";
                alert("Seleccionaste una pieza en color negro.");
                break
            case 3: costoColor = 200;
                tipoColorItem = "varios colores";
                alert("Seleccionaste una pieza en colores.");
                break
            case 4:
                alert("Saliendo...");
                break
            default:
                alert("Opcion invalida!");
        }
        if (costoColor > 0) {
            col = true;
        }
        return {
            costoColor: costoColor,
            tipoColorItem: tipoColorItem
        };

    } while (opcion != 4);

}

///Funcion Tamaño///

function tamanios() {
    let costoTamanio = 0;
    let tipoTamanioItem = "";
    let tamanioIngresado = prompt("-TAMAÑO-\n Selecciona el tamaño de la pieza:\n1-CHICO ($100)\n2-MEDIANO ($200)\n3-GRANDE ($400)\n4-SALIR");
    tamanioIngresado = parseInt(tamanioIngresado);
    do {

        switch (tamanioIngresado) {
            case 1: costoTamanio = 100;
                tipoTamanioItem = "chico";
                alert("Se imprimirá una pieza de tamaño chico.");
                break
            case 2: costoTamanio = 200;
                tipoTamanioItem = "mediano";
                alert("Se imprimirá una pieza de tamaño medio.")
                break
            case 3: costoTamanio = 400;
                tipoTamanioItem = "grande";
                alert("Se imprimirá una pieza de tamaño grande.");
                break
            case 4:
                alert("Saliendo...");
                break
            default:
                alert("Opcion invalida!");
        }
        if (costoTamanio > 0) {
            tam = true;
        };
        return {
            costoTamanio: costoTamanio,
            tipoTamanioItem: tipoTamanioItem
        };

    } while (opcion != 4);

}

main();

console.log(compra);

///Funcion suma total del carro///
function costoTotalCarrito() { const totalCarrito = compra.reduce((acumulador, producto) => acumulador + producto.precioFinal, 0);
alert("El costo total por los productos seleccionados es de $" + totalCarrito + " impuestos incluídos.")};


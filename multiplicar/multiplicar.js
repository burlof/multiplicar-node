//Requireds

const fs = require('fs');
//const fs = require('express');
//const fs = require('./fs');

const colors = require('colors')

let ListarTabla = (base, limite = 10) => {

    console.log('========================='.blue);
    console.log(`===== Tabla del ${base} ======`.blue);
    console.log('========================='.blue);

    for (var i = 0; i < limite + 1; i++) {
        console.log(`${base} * ${i} = ${base*i}`);
    }
}

let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject('El valor introducido ' + base + ' no es un número')
            return;
        }

        let data = '';

        for (let i = 0; i < limite + 1; i++) {
            data = data + base + " x " + i + " = " + base * i + "\n";
        }

        fs.writeFile(`tablas/tabla-${base}-al-${limite}.txt`, data, (err) => {
            if (err) reject(err);
            else resolve(`tabla-${base}-al-${limite}.txt`);
            console.log('El archivo tabla del ' + base + ' al ' + limite + '.txt ha sido creado');
        });

    });
}


module.exports = {
    crearArchivo,
    ListarTabla

}
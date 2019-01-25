const argv = require('./config/yargs').argv;

const { crearArchivo, ListarTabla } = require('./multiplicar/multiplicar')

let comando = argv._[0];

switch (comando) {
    case 'listar':
        ListarTabla(argv.base, argv.limite);
        break;

    case 'crear':
        crearArchivo(argv.base, argv.limite);


        /*
        crearArchivo(argv.base)
            .then(archivo => console.log(`Archivo creado: ${archivo}`)
                .catch(e => console.log(e)));
        console.log('Crear');*/
        break;

    default:
        console.log('Comando no reconocido');

}

console.log(argv);


//console.log(process.argv);


//console.log(argv.base);
//console.log('Límite: ', argv.limite);


// let argv = process.argv;
// let parametro = argv[2];
// let base = parametro.split('=')[1];



// crearArchivo(base)
//     .then(archivo => console.log(`Archivo Creado: ${archivo}`))
//     .catch(e => console.log(e));
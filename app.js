const {crearArchivo} = require('./helpers/multiplicar');
const {argv} = require('./config/yargs');



console.clear();



crearArchivo(argv.b,argv.h,argv.l)
.then(msg => {
    console.log(msg.rainbow,'OK');
})
.catch(err=>{
    console.log(err,'ERROR');
});







const argv = require('yargs')
.option('b',{
    alias : 'base',
    demandOption : true,
    type : 'number',
    describe :'Base de la tabla multiplicar'

})
.option('l',{
    alias : 'listar',
    type : 'boolean',
    default: false,
    describe : 'Lista la tabla de multiplicar'
})
.option('h',{
    alias : 'hasta',
    demandOption : false,
    type : 'number',
    describe :'Hasta que numero quieres multiplicar',
    default : 10
})
.check( (argv,options)=>{
    if(isNaN(argv.b) ){
        throw 'ingrese un numero';
    }else{
        return true;
    }
})
.argv;

module.exports = {
    argv
}
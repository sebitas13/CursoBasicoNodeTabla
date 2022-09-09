const fs = require('fs');
const colors = require('colors');


const crearArchivo = async (base=2,hasta,listar) => {

    try {
        

        let salida='',consola='' ;
        for (let i = 1; i <=hasta; i++) {
        
            if(i!=hasta){
                consola += `${base} ${'x'.red} ${i} ${'='.blue} ${base*i}\n`;
                salida += `${base} x ${i} = ${base*i}\n`;
            }else{
                consola += `${base} ${'x'.red} ${i} = ${base*i}`;
                salida += `${base} x ${i} = ${base*i}`;
            }
            
        }

        if (listar) {
            console.log('*******************'.blue);
            console.log('   Tabla del '.green, colors.red(base));
            console.log('*******************'.blue);
            console.log(consola);
        }
        
        fs.writeFileSync(`./salida/tabla-${base}.txt`,salida);

        return `tablita del ${base}. creada`;
        
    } catch (error) {
        throw error;
    }    
}


module.exports = {
    crearArchivo : crearArchivo,
}
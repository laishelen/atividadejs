function LuidyMoura(maximo) {

    var retorno = [];
    var valor;

    for(var i = 1; i <= maximo; i++) {

        if(i%5 == 0 && i%9 ==0) {
            valor = "LuidyMoura";
        } else if(i%5 == 0) {
            valor = "Luidy";
        } else if(i%9 == 0) {
            valor = "Moura";
        } else {
            valor = i;
        }
        //console.log(valor);
        retorno.push(valor);
    }

    return retorno;

}

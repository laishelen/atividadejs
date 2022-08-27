function bhaskara(ax2, bx, c) {

        var possiveis_respostas = [];

        var delta = bx**2-(4*ax2*c);

        
        if(delta > 0) {
            
            possiveis_respostas.push((-bx + Math.sqrt(delta)) / 2*ax2);
            possiveis_respostas.push((-bx - Math.sqrt(delta)) / 2*ax2);
            
            return possiveis_respostas;
        } else {
            return "Delta é negativo";
        }
    
}

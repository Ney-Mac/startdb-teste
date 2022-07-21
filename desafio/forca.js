class Forca {
  constructor(palavraSecreta){
      this.palavraSecreta = palavraSecreta.toLowerCase();
      this.vidas = 6;
      this.estado = 'aguardando chute'

      this.letrasChutadas = [];
      this.palavra = [];

      for(let i = 0; i < palavraSecreta.length; i++){
        (palavraSecreta[i] === ' ')? this.palavra.push(' ') : this.palavra.push('_');
      }
  }

  chutar(letra) {
      if (letra.length > 1) return;

      let existe = false;
      this.letrasChutadas.forEach(l =>{
        if(l === letra) existe = true;
      });
      if(existe) return;
      
      this.letrasChutadas.push(letra);
      
      existe = false;
      for(let i in this.palavraSecreta){
        if(letra === this.palavraSecreta[i]){
          this.palavra[i] = letra;
          existe = true;
        }
      }

      if(!existe) this.vidas--;
      if(this.vidas === 0) this.estado = 'perdeu';

      if(!this.palavra.includes('_')){
        this.estado = 'ganhou';
      }
  }

  buscarEstado() { return this.estado; } // Possiveis valores: "perdeu", "aguardando chute" ou "ganhou"

  buscarDadosDoJogo() {
      return {
          letrasChutadas: this.letrasChutadas, // Deve conter todas as letras chutadas
          vidas: this.vidas, // Quantidade de vidas restantes
          palavra: this.palavra // Deve ser um array com as letras que já foram acertadas ou o valor "_" para as letras não identificadas
      }
  }
}

module.exports = Forca;

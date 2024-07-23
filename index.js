class heroi {
  constructor(nome, idade, tipo) {
    this.nome = nome;
    this.idade = idade;
    this.tipo = tipo;
  }
  atacar() {
    if (this.tipo === "mago") {
      console.log("o " + this.tipo + " atacou usando mágia");
    } else if (this.tipo === "guerreiro") {
      console.log("o " + this.tipo + " atacou usando espada");
    } else if (this.tipo === "monge") {
      console.log("o " + this.tipo + " atacou usando artes marciais");
    } else {
      console.log("o " + this.tipo + " atacou usando shuriken");
    }
  }
}

let informacoesHeroi = new heroi("Papus", 51, "mago");
informacoesHeroi.atacar();

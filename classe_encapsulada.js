class Pessoa {
    constructor(nome, anoDeNascimento, profissao) {
        this.nome = nome;
        this.anoDeNascimento = anoDeNascimento;
        this.profissao = profissao;
    };
    ola() {
        console.log("olá, eu sou " + this.nome);
    }
    calculaIdade() {
         return new Date().getFullYear() - this.anoDeNascimento;
    };
 };


class Estudante extends Pessoa {
    #matricula;
    constructor(nome, anoDeNascimento, matricula){
        super(nome, anoDeNascimento, "Estudante");
        this.#matricula = matricula;
        this.#ola();
    };
    getMatricula() {
        return `Sua matrícula é: ${this.#matricula}`;
    };
    setMatricula(valor){
        this.#matricula = valor;
    }
    #ola() {
        super.ola();
        console.log("colegas");
    };
};

const aluno = new Estudante('Fulano de Tal',1977, 120955);
console.log(aluno.anoDeNascimento);
console.log(aluno.getMatricula());
aluno.setMatricula(44444);
console.log(aluno.getMatricula());
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

const pessoa1 = new Pessoa("José", 1992, "PEdreiro");

console.log(pessoa1.nome);
console.log(pessoa1.anoDeNascimento);
console.log(pessoa1.profissao);
pessoa1.ola();
console.log(pessoa1.calculaIdade());
console.log('------------------------------------------');

 class Estudante extends Pessoa {
    constructor(nome, anoDeNascimento, matricula) {
        super(nome, anoDeNascimento, "Estudante");
        this.matricula = matricula;
    }
    ola(){
        super.ola();    //// polimorfismo
        console.log(', colegas!');
    }
 }

 const aluno1 = new Estudante("Paulo", 1982, 123213);
 console.log(aluno1.nome);
 console.log(aluno1.anoDeNascimento);
 console.log(aluno1.profissao);
 console.log('Matricula: ' + aluno1.matricula);
 aluno1.ola();
 console.log(aluno1.calculaIdade());
 console.log('------------------------------------------');

 class Professor extends Pessoa {
    constructor(nome, anoDeNascimento, titulacao) {
        super(nome, anoDeNascimento, "Professor");
        this.titulacao = titulacao;
    }
 }

 const prof1 = new Professor("Marta", 1960, "Mestre");
 console.log(prof1.nome);
 console.log(prof1.anoDeNascimento);
 console.log(prof1.profissao);
 console.log('Titulação: ' + prof1.titulacao);
 prof1.ola();
 console.log(prof1.calculaIdade());
console.log('------------------------------------------');
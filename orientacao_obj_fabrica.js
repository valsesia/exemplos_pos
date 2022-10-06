function criarPessoas(nome, anoNascimento, profissao) {
    return {
         nome,
         anoNascimento,
         profissao,
         calculaIdade: function() {
                 return new Date().getFullYear() - this.anoNascimento;
         }
    };
};

const pessoa = new criarPessoas('Cadu',1977,'Bancário');
console.log('Nome: ' + pessoa.nome);
console.log('Ano de Nascimento: ' + pessoa.anoNascimento);
console.log('Profissão: ' + pessoa.profissao);
console.log('Idade: ' + pessoa.calculaIdade());

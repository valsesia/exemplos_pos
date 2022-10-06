const empregado = {
    salarioBase: 5000,
    valorHoraExtra: 100,
    qtdeHoraExtra: 10,
    calculaSalario: function() {
        return this.salarioBase + (this.qtdeHoraExtra * this.valorHoraExtra);
    }
};

console.log(empregado.calculaSalario());
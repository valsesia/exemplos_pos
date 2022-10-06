function testeConst(){
    const const01 = {propriedade: 'teste de const'};
    console.log(const01.propriedade);
    const01.propriedade = 'teste2';
    console.log(const01.propriedade);
}

testeConst();
var somar = () => console.log("Função sem parametro");
somar();    
//--------------------------------------------

var somar1 = _ => console.log("usando o underscore");
somar1();
//--------------------------------------------

var somar2 = (x,y) => x+y;
console.log(somar2(3,4));
//--------------------------------------------

var somar3 = (x,y) => { return x+y };   // quando de usa { } é obrigatório o return
console.log(somar3(7,9));
//--------------------------------------------

var somar4 = (x,y) => x>y ? x : y;
console.log(somar4(4,5));
//--------------------------------------------

// euqivalente a função acima

var somar5 = (x,y) => {
    if(x>y) {
        return x;
    } else {
        return y;
    }
}
console.log(somar5(9,6));
function add(num1, num2) {
    // console.log(num1, num2);

    sum = num1 + num2;
    return sum;
    // console.log(sum);
}

// add(33, 77);

var total = add(2, 40);
// console.log('Total : ', total);


function bringSingara(money) {
    console.log(money);
    var singaraPrice = 10;
    var quantity = money / singaraPrice;

    return quantity;
}
var myTaka = 150;
var totalSingara = bringSingara(myTaka);
console.log('Total Singara payco : ', totalSingara);
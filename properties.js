var shoppingCart = {
    books: 3,
    sunglass: 1,
    keyboard: 3,
    mouse: 1,
    pen: 25
}

// process-1 when u knows the specific property name,use Dot (.) notation to get the properties value
var penCount = shoppingCart.pen;

// process-2 alternative system // when u knows the specific property name,use Dot (.) notation to get the properties value
var penCount2 = shoppingCart['pen'];


// How to find out the properties names from an object 
var properties = Object.keys(shoppingCart);


// how to find out the values from an object keys 
var propertyValues = Object.values(shoppingCart);

console.log(penCount);
console.log(penCount2);
console.log(properties);
console.log(propertyValues);
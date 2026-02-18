function order(amount, distance){
    const discount = amount >=10000 ? (amount*20/100) : 0;
    const deliverydays = distance < 5 ? 1 : 2;
    return{
        
    originalAmount: amount,
    discount,
    finalAmount: amount - discount,
    deliverydays
    };
}
console.log(order(14500,4));


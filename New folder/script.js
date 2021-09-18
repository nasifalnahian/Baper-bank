function updateprodcuct(product, price, increase) {
    const productinput = document.getElementById(product + '-number');
    let casenumber = productinput.value;
    if (increase == true) {
        casenumber = parseInt(casenumber) + 1;
    } else if (casenumber >0) {
        casenumber = parseInt(casenumber) - 1;
    }
    productinput.value = casenumber;

    const casetotal = document.getElementById(product + '-total');
    casetotal.innerText = casenumber * price;
    calculatetotal();


};

function getinputvalue(product){
    const phoneinput= document.getElementById(product+'-number');
    const productnumber= parseInt(phoneinput.value);
    return productnumber;
};

// calculation sector
function calculatetotal() {

    const phonetotal = getinputvalue('phone') * 1219;
const casetotal= getinputvalue('case')*59;
const subtotal = phonetotal+casetotal;
const tax= subtotal*.01;
const total=tax+subtotal;



document.getElementById('sub-total').innerText = subtotal;
document.getElementById('tax-amount').innerText =parseFloat(tax).toFixed(2);;
document.getElementById('total-price').innerText = total;

}







// ------------------------------------
document.getElementById('case-plus').addEventListener('click', function () {
    updateprodcuct('case', 59, true);

});
// -------------------------------------
document.getElementById('case-minus').addEventListener('click', function () {
    updateprodcuct('case', 59, false);


});

// ---------------------------------------


// ------------------------------------
document.getElementById('phone-plus').addEventListener('click', function () {
    updateprodcuct('phone', 1219, true);

});
// -------------------------------------
document.getElementById('phone-minus').addEventListener('click', function () {
    updateprodcuct('phone', 1219, false);


});

// ---------------------------------------
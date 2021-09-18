///using function geting value of input box


function getinputvalue(inputid) {
    // debugger;
    const inputbox=document.getElementById(inputid);
    const depositeammountText = inputbox.value;
    const depositeammount =parseFloat(depositeammountText);

    inputbox.value='';
    return depositeammount;  
};

//   using function to create withdraw item 

function totalfield(totalfieldid,ammount){

// debugger;
    const totalelement = document.getElementById(totalfieldid);
    const totaltext= totalelement.innerText;
    const pretotal=parseFloat(totaltext);
    totalelement.innerText =pretotal+ammount;

};

// udoate new total blance
function currentbalance(){
    const balancetotal = document.getElementById('total-balance');

const balancetotalText =balancetotal.innerText;

const prebalancetotal = parseFloat(balancetotalText);
return prebalancetotal;
};





function updateblance(depositeammount,add){
    const prebalancetotal = currentbalance();
    const balancetotal = document.getElementById('total-balance');
if (add == true) {
    const newbalancetotl = prebalancetotal + depositeammount;

balancetotal.innerText= newbalancetotl;
}
else{
    const newbalancetotl = prebalancetotal - depositeammount;

balancetotal.innerText= newbalancetotl;
}
};




// deposite button
document.getElementById('deposite-button').addEventListener('click',function()
{     
const depositeammount = getinputvalue('deposite-input-box');
if (depositeammount > 0) {
    totalfield('deposite-balance',depositeammount)
updateblance(depositeammount,true);
}
});



// withdraw button
document.getElementById('withdraw-button').addEventListener('click',function()
{  
const  withdrawammount = getinputvalue('withdraw-input-box');
const newcurrentbalance =currentbalance();
 

if (withdrawammount > 0 && withdrawammount  <= newcurrentbalance ) {
    totalfield('withdraw-balance',withdrawammount);
updateblance(withdrawammount,false);
}
else if (withdrawammount > newcurrentbalance) {
    console.log('not enough money');
}
 
});
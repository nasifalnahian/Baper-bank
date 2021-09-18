///using function geting value of input box


function getinputvalue(inputid) {
    debugger;
    const inputbox=document.getElementById(inputid);
    const depositeammountText = inputbox.value;
    const depositeammount =parseFloat(depositeammountText);

    inputbox.value='';
    return depositeammount;  
};

//   using function to create adding item 

function totalfield(totalfieldid,ammount){

debugger;
    const totalelement = document.getElementById(totalfieldid);
    const totaltext= totalelement.innerText;
    const pretotal=parseFloat(totaltext);
    totalelement.innerText =pretotal+ammount;

};



document.getElementById('deposite-button').addEventListener('click',function()
{
      
const depositeammount = getinputvalue('deposite-input-box');
totalfield('deposite-balance',depositeammount)

const balancetotal = document.getElementById('total-balance');

const balancetotalText =balancetotal.innerText;

const prebalancetotal = parseFloat(balancetotalText);

const newbalancetotl = prebalancetotal + depositeammount;

balancetotal.innerText= newbalancetotl;
// update Withdraw balance
});

document.getElementById('withdraw-button').addEventListener('click',function()
{
    
const  withdrawammount = getinputvalue('withdraw-input-box');

totalfield('withdraw-balance',withdrawammount);


const balancetotal = document.getElementById('total-balance');
const balancetotalText =balancetotal.innerText;
const prebalancetotal = parseFloat(balancetotalText);
const newbalancetotl = prebalancetotal - withdrawammount;
balancetotal.innerText= newbalancetotl;
});
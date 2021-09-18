function getinputvalue() {
    const depositeinput=document.getElementById('deposite-input-box');
    const depositeammountText = depositeinput.value;
    const depositeammount =parseFloat(depositeammountText);

    depositeinput.value='';
    return depositeammount;


   
};


document.getElementById('deposite-button').addEventListener('click',function()
{
    // button connect
    // console.log('work');

    // const depositeinput=document.getElementById('deposite-input-box');
    // const depositeammountText = depositeinput.value;
    // const depositeammount =parseFloat(depositeammountText);
    // console.log(depositeammount);




 
const depositeammount = getinputvalue();

    // input box data collect 
    // depositeammonut =  what ever i input in box


const depositebalance = document.getElementById('deposite-balance');

// deposite balance data taken

console.log(depositebalance.innerText);


const predepositebalanceText=depositebalance.innerText;
const predepositebalance=parseFloat(predepositebalanceText);
// input data send to deposite data

const currentdeposite =parseFloat(predepositebalance)+depositeammount;
// console.log(newdepositebalance);
 
depositebalance.innerText = currentdeposite;

// clear input box
// depositeinput.value='';





// 
// Update Totall Balance



const balancetotal = document.getElementById('total-balance');

const balancetotalText =balancetotal.innerText;

const prebalancetotal = parseFloat(balancetotalText);

const newbalancetotl = predepositebalance + depositeammount;

balancetotal.innerText= newbalancetotl;




// update Withdraw balance











});




// document.getElementById('withdraw-button').addEventListener('click',function()
// {
//     // console.log('adsd');

//     const withdrawinput = document.getElementById('deposite-input-box');
//     const withdrawammountText = withdrawinput.value;

//     const newwithdrawammount= parseFloat(withdrawammountText);
   
  
// })

document.getElementById('withdraw-button').addEventListener('click',function()
{
    // button connect
    // console.log('work');

    const withdrawinput=document.getElementById('withdraw-input-box');
    const withdrawammountText = withdrawinput.value;
    const withdrawammount =parseFloat(withdrawammountText);
    // console.log(withdrawammount);

    // input box data collect 
    // withdrawammonut =  what ever i input in box


const withdrawbalance = document.getElementById('withdraw-balance');

// withdraw balance data taken

console.log(withdrawbalance.innerText);


const prewithdrawbalanceText=withdrawbalance.innerText;
const prewithdrawbalance=parseFloat(prewithdrawbalanceText);
// input data send to withdraw data

const currentwithdraw =parseFloat(prewithdrawbalance)+ withdrawammount;
// console.log(newwithdrawbalance);
 
withdrawbalance.innerText = currentwithdraw;

// clear input box
withdrawinput.value='';







const balancetotal = document.getElementById('total-balance');

const balancetotalText =balancetotal.innerText;

const prebalancetotal = parseFloat(balancetotalText);

const newbalancetotl = prebalancetotal - withdrawammount;

balancetotal.innerText= newbalancetotl;










});
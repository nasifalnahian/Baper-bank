// Login-section


document.getElementById('login-button').addEventListener('click',function()
{
    // console.log('button clicked');
   

    const email = document.getElementById('input-email');
    const useremail = email.value;
    // console.log(useremail);

    const password = document.getElementById('input-pass');
    const userpass = password.value;



    if (useremail == 'ixion@gmail.com' && userpass == '1234ixion') {
        console.log('next page');
        window.location.href ="account.html";
    }
    
})


// Account Secttion


// step no 1: add click event handler with the submit btn
document.getElementById("btn-submit").addEventListener('click',function(){


    //    get the email address inside the email inpur fild
// always remember  to use .value to get text from an inputfild

const emailFild = document.getElementById('user-email');
const email =emailFild.value;
// step 3 get password
// 3.1 set id on the  html element 
// 3.2 get the element
// 3.3 get the vhaue from the element 
const passwordFild = document.getElementById('user-password');
const password = passwordFild.value;
console.log(email,password);
//danger :do not verify email passoword on the clint side
// step 4 verefy email and password

if ( email=== 'armanmahim@gmail.com' && password==='secret'){

    window.location.href='bank.html'
}
else{
    alert("nikal vhosDK :D ");
}


})
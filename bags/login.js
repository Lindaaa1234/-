var inputemail = document.getElementById('input-email')
var inputpass = document.getElementById('input-pass')
var btnsend = document.getElementById('send')
var emailstorage = localStorage.getItem('email')
var passstorage = localStorage.getItem('pass')


btnsend.addEventListener('click' ,send)

function send (){
    if(inputemail.value === emailstorage && inputpass.value === passstorage){
        setTimeout(() =>{
            location = '../index.html'
        }, 1000)
    }else{
        alert('password or email rong')
    }

}
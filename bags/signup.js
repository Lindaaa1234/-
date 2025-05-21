inputfname = document.getElementById('input-fname')
inputlname = document.getElementById('input-lname')
inputemail = document.getElementById('input-email')
inputpass = document.getElementById('input-pass')
var btnsend = document.getElementById("send")



btnsend.addEventListener("click", send)
function send(){
if(inputfname.value === "" || inputlname.value === "" ||  inputemail.value === "" ||  inputpass.value === '')
    {
    alert('abeeee')
}else{
   localStorage.setItem('firstname' ,inputfname.value)
   localStorage.setItem('lastname' ,inputlname.value)
   localStorage.setItem('email' ,inputemail.value)
   localStorage.setItem('pass' ,inputpass.value)
console.log()
   setTimeout(() => {
    location = 'login.html'
   },1000)
}
}
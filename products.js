var  link1 = document.getElementById('link-1')
var  link2 = document.getElementById('link-2')
var username = document.querySelector('#link-2 h3')
var logout = document.getElementById('logout')
var Contaner = document.getElementById('contaner')
var data = JSON.parse(localStorage.getItem('products'))
var cartDiv = document.querySelector('#cart div')




if(localStorage.getItem('firstname')){
    link1.style.display = 'none'
     link2.style.display = 'block'

     username.innerHTML = localStorage.getItem('firstname')
}
logout.addEventListener('click' , out)
function out () {
    localStorage.clear()
    setTimeout(() =>{
        location ='./bags/sgin up.html'
    },1000)
}



function drow () {
    x = data.map((item) => {
        return(
            `
            <div class="pro">
            <img src="./img/${item.image}" alt="">
            <div class="des">
                <span>Brid</span>
                <h5>${item.titel}</h5>
                <div class="star">
                    <iclass="fa fa-star" aria-hidden="true"></i>
                    <i class="fa fa-star" aria-hidden="true"></i>
                    <i class="fa fa-star" aria-hidden="true"></i>
                    <i class="fa fa-star" aria-hidden="true"></i>
                    <i class="fa fa-star" aria-hidden="true"></i>
                </div>
                   <h4>${item.price}</h4>
            </div>
        <button onclick=Delete(${item.id})>delet cart</button>
        </div>
        
            `
        )
    })
       Contaner.innerHTML = x
}
drow()



  






function Delete(id){
   var index = data.map((e)=>{
    return e.id
   }).indexOf(id)
    data.splice(index , 1)
    drow(data) 
} 

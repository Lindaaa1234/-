var  link1 = document.getElementById('link-1')
var  link2 = document.getElementById('link-2')
var username = document.querySelector('#link-2 h3')
var logout = document.getElementById('logout')
var Contaner = document.getElementById('contaner')
var cart = document.getElementById('cart')
var carticon = document.getElementById('carticon')
var cartDiv = document.querySelector('#cart div')
var count = document.getElementById('count')
var totalprice = 0



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

var data = [
    {
        id : 1,
        titel :"Cartoon Astronaut T-SHIRTS",
        image : "1.jfif",
        price : "$200",
        
    },

    {
        id : 2,
        titel :"Cartoon  T-SHIRTS",
        image : "4.jfif",
        price : "$55",
        
    },
    {
        id : 3,
        titel :"Cartoon T-SHIRTS ---1",
        image : "1.jfif",
        price : "$45",
        
    },
    {
        id : 4,
        titel :"Cartoon ----4",
        image : "4.jfif",
        price : "$34",
        
    },
    {
        id : 5,
        titel :" T-SHIRTS----5",
        image : "7.jfif",
        price : "$20",
        
    },
    {
        id : 6,
        titel :"Cartoon -----6",
        image : "8.jfif",
        price : "$20",
        
    },
    {
        id : 7,
        titel :"Cartoon Astronaut T------7",
        image : "7.jfif",
        price : "$20",
        
    },
    {
        id : 8,
        titel :"Cartoon Astronaut T-SHIRTS",
        image : "8.jfif",
        price : "$20",
        
    }
]




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
                    <i class="fa fa-star" aria-hidden="true"></i>
                    <i class="fa fa-star" aria-hidden="true"></i>
                    <i class="fa fa-star" aria-hidden="true"></i>
                    <i class="fa fa-star" aria-hidden="true"></i>
                    <i class="fa fa-star" aria-hidden="true"></i>
                </div>
                   <h4>${item.price}</h4>
            </div>
        <i class="fa fa-shopping-bag" aria-hidden="true" onclick=addtocart(${item.id})></i>
            
        </div>
            `
        )
    })
       Contaner.innerHTML = x
           

}
drow()




carticon.addEventListener('click' , open)
function open(){
    
    if(cart.style.display == 'none'){
        cart.style.display = 'block'
        
        
    }else{
        cart.style.display = 'none'
    }
    
}


if(localStorage.getItem('products')){
    var products = JSON.parse(localStorage.getItem('products'))
}else{
    var products = []
}


    count.style.display = 'block'
    count.innerHTML = products.length


products.map((e) => {
        cartDiv.innerHTML += `<P>${e.titel}</P>`
    
           
    })
    



function addtocart(id){
    cartDiv.innerHTML =""
    var addedproduct = data.find((e) => {
        
        return e.id === id
        
    })
    products = [...products , addedproduct]
    localStorage.setItem('products' ,JSON.stringify(products))
    count.style.display = 'block'
    count.innerHTML = products.length

}




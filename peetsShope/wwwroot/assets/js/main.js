




import Like from './likesList.js'
new Like('.nav__menu','.product__header .bx')








const homesection = document.querySelectorAll('.home__container');
const  aboutSection = document.querySelectorAll('.about');
const  serviceItem = document.querySelectorAll('.service__item');
const contactSection = document.querySelectorAll('.contact')
const footerItem = document.querySelectorAll('.footer__info')
const productItem = document.querySelectorAll('.product__item')
const likesbtn = document.querySelector('.nav__likes') 
const listLikes = document.querySelector('.nav__product')


//home animation 
function homeAnimationFunction(home){
    
   
       
         var homeImg = home.querySelector('.home__image')
         var homesocial = home.querySelector('.home__social')
         var homeContent = home.querySelector('.home__content')
         if(homeImg)
         homeImg.style.transitionDelay = ".7s";
        if(homeImg!=null && homeContent!=null && homesocial!=null){

            homeImg.classList.remove('from__top')
            homeContent.classList.remove('from__top')
            homesocial.classList.remove('from__top')
        }
    
}

const homeObserver = new IntersectionObserver(entry=>{
    entry.forEach(home=>{
        if(home.isIntersecting){
            homeAnimationFunction(home.target);    

        }
    })
})
homesection.forEach(home=>{
    homeObserver.observe(home)
})


//about animation
function aboutAnimationFunction(element){
    let img =element.target.querySelector('.from__left')
    let content =element.target.querySelector('.from__right')
    if(img!=null && content!=null){

        img.classList.remove('from__left')
        content.classList.remove('from__right')
    }
    
}

const aboutObserver = new IntersectionObserver(entry =>{

    entry.forEach(element =>{        
 
    if(element.isIntersecting){

       aboutAnimationFunction(element)
    }
     })
},{
    threshold:0.4,
})

aboutSection.forEach(about =>{

    aboutObserver.observe(about)
})




//service animation

function serviceAnimationFunction(service){
    service.classList.remove('from__service__top')
}

const serviceObserver = new IntersectionObserver(entry =>{
    entry.forEach((element)=>{
        if(element.isIntersecting){
            serviceAnimationFunction(element.target)   
        }  
    })
},{
    threshold:0.7
})

serviceItem.forEach((service,index) =>{
    service.style.transitionDelay = index/3+'s'
    serviceObserver.observe(service)
})


//contact animation 
function conatctAnimationFunction(contact){
   var contactBox = contact.querySelector('.contact__box')
    var contactForm = contact.querySelector('.contact__form')
    if(contactBox!=null && contactForm!=null){
        contactBox.classList.remove('from__left')
        contactForm.classList.remove('from__right')
    }
}

const contactObserver = new IntersectionObserver(entry=>{
    entry.forEach(contact =>{
        if(contact.isIntersecting){
            conatctAnimationFunction(contact.target)
        }
    })
},{
    threshold:0.5,
})

contactSection.forEach(contact => {
    contactObserver.observe(contact)
})


var index = 0
//products animation 
function productAnimationFunction(product){
    if(product!=null){
        product.classList.remove('from__service__top')
    }
}
const productObserver = new IntersectionObserver(entry=>{
    entry.forEach(product =>{
        if(product.isIntersecting){
            product.target.style.transitionDelay = index/3+"s"
            index==2 ? index=0 : index++ 
            productAnimationFunction(product.target)
        }
    })
},{
    threshold : 0.4,
})

productItem.forEach(product=>{
    productObserver.observe(product)
})


//footer animation 
function footerAnimationFunction(footer) {
    if(footer!=null){
        footer.classList.remove('from__service__top')
    }
}

const footerObserver = new IntersectionObserver(entry=>{
    entry.forEach((footer,index)=>{
        
        if(footer.isIntersecting){
            footer.target.style.transitionDelay = index/3+'s'
            footerAnimationFunction(footer.target)
        }
    })
}, {
    threshold: 0.7,
})


footerItem.forEach(footer=>{
    footerObserver.observe(footer)
})


likesbtn.addEventListener('click',()=>{

    listLikes.classList.toggle('opacity')
})

document.addEventListener("click", ()=> {
    
  

  });



  
  


  
  
  
  
  
  
  /*===========================MAP======================================================= */
  const mapSymbole = document.getElementsByClassName('map__symbole')[0]
const mapSection = document.getElementsByClassName('map')[0]
mapSection.addEventListener('click',()=>{
    mapSymbole.classList.add('map__z-index');
})




const toggleBtn = document.querySelector('.nav__menu .menu-btn')
const closeBtn = document.querySelector('.nav__links .close-btn')

const navLinksSection= document.querySelector('.nav__links')
toggleBtn.addEventListener('click',()=>{
  
navLinksSection.classList.remove('toggle')
})
closeBtn.addEventListener('click',()=>{
navLinksSection.classList.add('toggle')
})


const contactForm = document.querySelector('.contact__form')
contactForm.addEventListener('submit',()=>{
    sendEmail()

})

function sendEmail(){
    emailjs.send("service_gmail_pets_shop","template_pets_shop",email).then((res)=>{
        res
    }).catch(Error=>{
         
    });
}

//
//npm install emailjs





//disble auto fill 

$('.full__name').disableAutofill();
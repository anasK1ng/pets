export default class listLikes {
    constructor(querrySelectorList,querrySelectorBtn){
        this.listLike = document.querySelector(querrySelectorList)
        this.listLike.innerHTML += listLikes.html() 

        this.btnLike = document.querySelectorAll(querrySelectorBtn)
        this.btnLike.forEach(btn => {
          
          btn.addEventListener('click', (e)=>{
            this.newProduct(e)
          });
        })
        this.load()
    }
    static html() {
      
      return `
      <div class="nav__product opacity">
        
      </div>
        `
    }
    static productHtml() {
      return `
          <article class="nav__product__item">
              <div class="nav__product__img">
                  <span class="back__ground"></span>
                  <img src="" alt="" class="image">
              </div>
              <div class="nav__product__content">
                  <div class="nav__product__name"></div>
                  <div class="nav__product__price"><span class="dollar">$</span></div>
              </div>
              <div class="nav__product__btn">
                  <button class="product__btn__close btn"><i class='bx bx-x'></i></button>
              </div>
          </article>
       `
    }
    load() {
        const products = JSON.parse(localStorage.getItem('list-Likes'||'[]'))
        for (const product of products) {
                this.addProduct(product)
         }
        //  this.updateTotal()
        this.countProduct()
    }
    save() {
       const data = this.getAllProducts().map(product=>{
         return{
            imagePath : product.querySelector('.nav__product__img .image').src , 
            name :  product.querySelector('.nav__product__content .nav__product__name').textContent,
            price : product.querySelector('.nav__product__content .nav__product__price').textContent
              }
       })
       console.log('aaaaaaaa')
       localStorage.setItem('list-Likes',JSON.stringify(data))
       this.countProduct()
      // this.updateTotal()
    }
    updateTotal() {
      const total = this.getAllProducts().reduce(( total, row)=>{
        var price = row.querySelector('.nav__product__content .nav__product__price').value
        return total+price
      },0) 
      this.listLike.querySelector('.nav__total__price').value = total
    }
    countProduct (){
      var numberOfProducts = this.getAllProducts().length
      var countSection = document.querySelector('.nav__likes .nav__number')
      countSection.textContent = numberOfProducts

    }
    newProduct(e) {
     var productItem = e.target.closest('.product__item')
      var image =  productItem.querySelector('.product__image img').src
      var price =  productItem.querySelector('.product__footer .product__price').textContent
      var name =  productItem.querySelector('.product__name').textContent
      var product =
       {
          imagePath : image,
          name : name, 
          price : price
      }
      this.addProduct(product)
    }
    addProduct(product={}) {
      this.listLike.querySelector('.nav__product').insertAdjacentHTML('beforeend',listLikes.productHtml())
      var productItem = this.listLike.querySelector('.nav__product .nav__product__item:last-of-type')
      productItem.querySelector('.nav__product__img .image').src = product.imagePath
      productItem.querySelector('.nav__product__content .nav__product__name').textContent = product.name
      productItem.querySelector('.nav__product__content .nav__product__price').textContent = product.price
      productItem.querySelector('.nav__product__btn .product__btn__close').addEventListener('click',(e)=>{
        this.removeProduct(e)
      })
      // this.updateTotal()
       this.save()
    }
    getAllProducts() {
       return Array.from(this.listLike.querySelectorAll('.nav__product .nav__product__item'))
    }
    removeProduct(e) {
        e.target.closest('.nav__product__item').remove()
        this.save()
    }

}
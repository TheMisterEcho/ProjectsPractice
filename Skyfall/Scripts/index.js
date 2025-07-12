import data from './fromServer.js'



const buttonHome = document.querySelector('[data-js-home]');
const buttonProds = document.querySelector('[data-js-products]');
const homeArticle = document.querySelector('[data-js-home-article]');
const prodsArticle = document.querySelector('[data-js-products-article]');


buttonHome.addEventListener("click", () => {

    buttonHome.classList.add('active')
    buttonProds.classList.remove('active')

    homeArticle.classList.remove('none')
    prodsArticle.classList.add('none')
})

buttonProds.addEventListener("click", () => {

    buttonProds.classList.add('active')
    buttonHome.classList.remove('active')

    homeArticle.classList.add('none')
    prodsArticle.classList.remove('none')
})


const root = document.getElementById('root');
const input = document.querySelector('#search');
let cardItems = ''




data.forEach((prod) => {
    cardItems += `
        <div class="product" data-js-item>
            <img class="product--block--img" src=${prod.src}>
            <div class="product--block">
                Тип: ${prod.type} <br/>
                Марка: ${prod.mark} <br/>
                Модель: ${prod.model} <br/>
                <div class="product--block--to"> 
                    Рейтинг: ${prod.rate} 
                    <button class="product--button" dataJs="${prod.id}"> о товаре </button> 
                    <button class="product--button" data="${prod.id}"> оценить </button>
                </div>
            </div>
        </div>
        `
})
root.insertAdjacentHTML('afterbegin', cardItems);

let elasticItems = document.querySelectorAll('[data-js-item]')
console.log(elasticItems[1].childNodes[1].innerText)

input.oninput = function(){
    let val = this.value.trim();
    
    if (val != '') {
        elasticItems.forEach(function(elem) {
            if (elem.childNodes[3].innerText.search(val.toLowerCase()) == -1) {
                elem.classList.add('none')
            }
            else {
                elem.classList.remove('none')
            }
        })
    }
    else {
        elasticItems.forEach(function(elem) {
            elem.classList.remove('none')
        })
    }
}



const dgButtons = document.querySelectorAll('[dataJs]');
const div = document.querySelector('[data-js-dialog-frame]');

dgButtons.forEach((btn) => {
    btn.addEventListener('click', function() {
        document.querySelector('[data-js-dialog]').classList.toggle('none');
        div.classList.toggle('none');
        document.querySelector('[data-js-p]').innerHTML = data[this.getAttribute('dataJs')-1].desription
    })
})

document.querySelector('[data-js-dialog-btn]').addEventListener('click', () => {
    document.querySelector('[data-js-dialog]').classList.toggle('none');
    div.classList.toggle('none')
})



const rateBtns = document.querySelectorAll('[data-js-rate-btn]');

rateBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
        document.querySelector('[data-js-rate]').classList.add('none');
    })
})

const rateJSbtns = document.querySelectorAll('[data]')

rateJSbtns.forEach((btn) => {
    btn.addEventListener('click', () => {
        document.querySelector('[data-js-rate]').classList.remove('none');
    })
})
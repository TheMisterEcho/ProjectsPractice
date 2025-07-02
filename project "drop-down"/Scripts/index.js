const elementButton = document.querySelector("[data-js-button]");
console.log(elementButton)
const elementList = document.querySelector("[data-js-list]");
console.log(elementList.classList)
const elementIMG = document.querySelector("[data-js-img]");
console.log(elementIMG)


elementButton.addEventListener('click', (event) => {
    elementList.classList.toggle('none');
    elementIMG.classList.toggle('rotate')
    event.stopPropagation()
})

document.querySelector('[data-js-wrapper]').addEventListener('click', () => {
    elementList.classList.add('none');
    elementIMG.classList.remove('rotate')
})
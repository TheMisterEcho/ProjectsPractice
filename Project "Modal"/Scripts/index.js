const modalOpen = document.querySelector('[data-js-modal]');

document.querySelector("[data-js-button]").addEventListener("click", () => {
    modalOpen.classList.add('open');
    console.log('click')
});

document.querySelector("[data-js-close]").addEventListener("click", () => {
    modalOpen.classList.remove('open')
})
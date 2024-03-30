// MENU
const btn = document.getElementById('btn');
const menuHamburger = document.getElementById('menu-hamburger');

// INPUTS Nome completo, e-mail
const inputs = document.querySelectorAll('.form__containerInput input');
const labels = document.querySelectorAll('#label');

// SELECT
const select = document.getElementById('state');
const arrowBottom = document.getElementById('arrow-bottom');
const selectedValue = document.getElementById('selected-value');
const listOptions = document.getElementById('list-options');
const options = document.querySelectorAll('#option');

btn.addEventListener('click', () => {
  btn.classList.toggle('header__btn--active')
})

// PLACEHOLDER DINÂMICO
inputs.forEach(input => {
  input.addEventListener('focus', event => {
    event.target.nextSibling.nextElementSibling.style.display = 'none'
  })

  input.addEventListener('blur', event => {
    if(event.target.value === "") {
      // MOSTRA O PLACEHOLDER
      event.target.nextSibling.nextElementSibling.style.display = 'block'
    } else {
      // OCULTA O PLACEHOLDER, E DEIXA O VALOR NO INPUT
      event.target.nextSibling.nextElementSibling.style.display = 'none'
    }
  })
})

select.addEventListener('click', () => {
  listOptions.classList.toggle('form__select__options--isVisible')
  arrowBottom.classList.toggle('arrowBottom--up')
})

// ADICIONA O VALOR CLICADO DO SELECT
options.forEach(option => {
  option.addEventListener('click', event => {
    selectedValue.innerText = event.target.innerText
    listOptions.classList.remove('form__select__options--isVisible')
  });
});
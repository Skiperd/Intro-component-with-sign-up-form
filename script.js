// const nome = document.querySelector('#name').value;
// const lastName = document.querySelector('#lastname').value;
// const email = document.querySelector('#email').value;
// const password = document.querySelector('#password').value;
const btn = document.querySelector('.btn');
let errorMessage = document.querySelectorAll('.text-right-form-error');
let InputBorder = document.querySelectorAll('.text-right-input');
let BorderColor = document.querySelectorAll('.text-right-input');

const corBorda = Array.from(BorderColor);
const mensagem = Array.from(errorMessage);
const InputError = Array.from(InputBorder);

console.log(mensagem);

function handleClick(event) {
  const nome = document.querySelector('#name').value;
  const lastName = document.querySelector('#lastname').value;
  const email = document.querySelector('#email').value;
  const password = document.querySelector('#password').value;
  event.preventDefault();
  if (nome && lastName && email && password !== null) {
    window.alert('Registrado com sucesso');
  } else {
    mensagem.forEach((error) => {
      error.style.display = 'block';
      errorMessage = error;
    });
    InputError.forEach((errorimg) => {
      errorimg.style.backgroundImage = 'url(/images/icon-error.svg)';
      InputBorder = errorimg;
    });
    corBorda.forEach((errorborder) => {
      errorborder.style.borderColor = '#dfadad';
      BorderColor = errorborder;
    });
  }
}

btn.addEventListener('click', handleClick);

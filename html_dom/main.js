const form = document.getElementById('form')
const mensagemElement = document.getElementById('mensagem')

function validarFormulario() {
    const num1 = parseFloat(document.getElementById('num_1').value)
    const num2 = parseFloat(document.getElementById('num_2').value)

    if (isNaN(num1) || isNaN(num2)) {
        mensagemElement.textContent = 'Por favor, insira números válidos em ambos os campos.'
    } else if (num2 > num1) {
        mensagemElement.textContent = 'O formulário é válido. B é maior que A.'
        mensagemElement.style.color = 'green'
    } else {
        mensagemElement.textContent = 'O formulário é inválido. B deve ser maior que A.'
        mensagemElement.style.color = 'red'
    }
}

form.addEventListener('submit', function(e) {
    e.preventDefault()
    validarFormulario()
});
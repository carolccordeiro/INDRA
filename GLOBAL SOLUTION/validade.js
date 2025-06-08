document.getElementById('contato-form').addEventListener('submit', function(e) {
  e.preventDefault()

  const nome = document.getElementById('nome')
  const email = document.getElementById('email')
  const mensagem = document.getElementById('mensagem')
  const msg = document.getElementById('form-msg')

  if (!nome.value || !email.value || !mensagem.value) {
    msg.style.color = 'red'
    msg.textContent = 'Por favor, preencha todos os campos obrigatórios.'
    return
  }

  msg.style.color = 'green'
  msg.textContent = 'Mensagem enviada com sucesso!'
  this.reset()
})

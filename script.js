const form = document.querySelector('form')
const nlwSetup = new NLWSetup(form)
const button = document.querySelector('header button')

//Aqui ele vai adicionar o evento listener para ficar olhando os clicks e vai executar a função add
button.addEventListener("click", add)
form.addEventListener("change", save)

function add() {
  const today = new Date().toLocaleDateString("pt-br").slice(0, -5)
  const dayExists = nlwSetup.dayExists(today)
  //aqui o if precisa que o valor de dayExists seja true para roda
  if(dayExists) {
    alert("Dia ja incluso🔴")
    return//se chegar aqui a função será finalizada
  }
  alert("Adicionado com sucesso✅")
  nlwSetup.addDay(today)
}

function save() {
  //JSON.stringfy transforma os dados em string
  localStorage.setItem('NLWSetup@Habits', JSON.stringify(nlwSetup.data))
}

//o JSON.parse transforma a string que foi criada anetriormente em dados novamente
const data = JSON.parse(localStorage.getItem("NLWSetup@Habits")) || {}
nlwSetup.setData(data)
nlwSetup.load()
//referenciar os elementos html
const form = document.getElementById("form-signin")
const nome = document.getElementById("inputNome")
const email = document.getElementById("inputEmail")
const senha = document.getElementById("inputSenha")


form.addEventListener("submit", (e) => {
    e.preventDefault()
    validarEntradas(nome, email, senha)
})

//nome: teste
//email: teste@teste.com
//senha: Wabcde123#

function validarEntradas(n, e, s) {
    const nomeValue = String(n.value)
    const emailValue = String(e.value)
    const senhaValue = String(s.value)


    if (nomeValue === "" || nomeValue == null) {
        nome.className = "form-control is-invalid"
        console.log("Nome é um campo obrigatório")

    } else if (emailValue === "" || emailValue == null) {
        console.log("E-mail é um campo obrigatório")
    } else if (validarEmail(emailValue) === false) {
        console.log("Formato de email inválido")
        
    } else if (senhaValue === "" || senhaValue == null) {
        console.log("Senha é um campo obrigatório")
    } else if (senhaValue.length < 8) {
        console.log("A senha deve ter no mínimo 6 caracteres.")
    } else {
        console.log("Cadastro realizado com sucesso")
    }
}

function validarEmail(ev) {
    let re = /\S+@\S+\.\S+/
    return re.test(ev)
}
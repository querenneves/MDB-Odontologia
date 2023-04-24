const formulario = document.querySelector("form");
const botao = document.querySelector("button");
const inome = document.querySelector(".nome");
const itelefone = document.querySelector(".telefone");
const iconvenio = document.querySelector(".convenio");

function cadastrar(){
    fetch("http://localhost:8084/contato")

{

headers: {
    "Accept":"application/json",
    "Content-Type": "application/json"
},
method: "POST",
body: JSON.stringify({
    nome: inome.value,
    telefone: itelefone.value,
    convenio: iconvenio.value
})
})

.then(function(res){console.log(res)})
.catch(function(res){console.log(res)})
}
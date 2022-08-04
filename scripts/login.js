
function validacao(){
   let email = document.querySelector('#email').value;
   let senha = document.querySelector('#senha').value;
   if(email == '' || senha == ''){
        alert("Digite seu email")
   }
   login(pesquisa)
}

function login(e){
    console.log(e)
    document.querySelector('#login').innerHTML+=
    `
    <option>${e}</option>
    
    `
}
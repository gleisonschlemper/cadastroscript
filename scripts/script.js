
let modal = document.querySelector('.modal');

function add(){
    document.querySelector('.modal').classList.add('chamar')
}

function sair(){
    document.querySelector('.modal').classList.remove('chamar')
    document.querySelector('.modal').classList.add('sair') 
}
//controle da parte do modal que aparece e desaparece

function pegarValor(){
     let nome = document.querySelector('#nome').value;
    let email = document.querySelector('#email').value;
    let senha = document.querySelector('#senha').value;
    formulario(nome,email,senha)
    pegarEmail(email)
}

//para do clique do botão de enviar que pega os valores e manda para outra função


var emails = []

function pegarEmail(x){
    emails.push(x);
}

function formulario(x1,x2,x3){
    if(x1 == '' || x2 == '' || x3 ==''){
        alert("deu errado")
    }
    else{
        
           document.querySelector('.section_table').innerHTML+= 
            `
            <tr>
                <th>${x1}</th> 
                <th>${x2}</th> 
                <th>${x3}</th> 

                <th class="acao">
                    <button>Delete</button>
                    <button>Motificar</button>
                </th>

            </tr>
            `      
        //emails.forEach(function(valor,position){}) 
    }
    
}
   
//criar e colocar os valores numa tr na tabela

//parte que pega os emails e coloca num array 

function procura(e){
    if(e){
        alert("tem valor")
    }
    else{
        alert("não tem")
    }
}

//criar calculadora
/* let x = 7


for(let i=1;i<=10;i++){
    console.log(x+" x "+i+" = "+`${x * i}`)
}

function chamar(e){
    console.log(e)
}

let array = [
    'gleisom'
]
array.map((index)=> {
    console.log(index)
})
array.forEach(function(valor,position){
    console.log(valor+" na position "+position)
})
*/


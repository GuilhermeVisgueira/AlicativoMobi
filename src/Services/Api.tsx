import axios from "axios";

const url = 'https://apiteste.mobieduca.me/docs/api-docs.json';


/* async function TesteAPI() {
  
  let Validador = await axios.get(url)
  console.log(Validador)

}


 */

async function UserValidation () {
  
  let Validator = await axios.post('/user',{
    "email": "usuario@example.com",
    "senha": "senhaSegura123"
  })
    .then(response => {
      console.log(response);
      console.log('Verificação foi um sucesso')
    })
    .catch(erro => {
      console.log(erro)
      console.log('Ocorreu um erro')
    })

  }



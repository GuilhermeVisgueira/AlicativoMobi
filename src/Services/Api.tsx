import axios from "axios";

export const apiRequesition = axios.create({
  baseURL: 'https://apiteste.mobieduca.me',
  
});


export async function UserValidation() {
  
    await apiRequesition.post('/api/login/run',{
    email :"guilherme.visgueira@mobimark.com.br",
    senha: "guilherme@159753"

  })
    .then(resposta =>{
    console.log(resposta)

  }).catch(error => {
    console.log(error)
    console.log("erro")
  })

}



 



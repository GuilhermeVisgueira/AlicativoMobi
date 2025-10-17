import axios from "axios";


export const apiRequesition = axios.create({
  baseURL: 'https://apiteste.mobieduca.me',
});

//guilherme.visgueira@mobimark.com.br 
//guilherme@159753

export async function UserValidation(LocalEmail: string, LocalSenha: string) {

  return await apiRequesition.post('/api/login/run', {

    email: LocalEmail,
    senha: LocalSenha
  })


    .then(resposta => {
      // mostrando no console o token
      //console.log(resposta.data.token)
      //-------
      //pegando o token e e jogando em uma variavel
      //takedToken = resposta.data.token 
      //console.log(takedToken)
      //setHoldToken(resposta.data.token)
      return 200;
    })


    .catch(error => {
      console.log(error)
      return 500
      
    })


  //await apiRequesition.get('/api/login/run',{
  //headers pesquisar 

  //})
}







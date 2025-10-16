import axios from "axios";


export const apiRequesition = axios.create({
  baseURL: 'https://apiteste.mobieduca.me',
  
});



export async function UserValidation( LocalEmail: string, LocalSenha: string) {


    await apiRequesition.post('/api/login/run',{
    email : LocalEmail,
    senha: LocalSenha

  })
    .then(resposta => {
      // mostrando no console o token
      //console.log(resposta.data.token)
      //-------
      //pegando o token e e jogando em uma variavel
      //takedToken = resposta.data.token 
      //console.log(takedToken)
      setHoldToken(resposta.data.token)
    
      
  }).catch(error => {
    console.log(error)
    console.log("Email ou senha invalidos")
  })
  


  //await apiRequesition.get('/api/login/run',{
     //headers pesquisar 

  //})
}


 



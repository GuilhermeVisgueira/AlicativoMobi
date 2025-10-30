import axios from "axios";
import { UseStade } from 'react'; 

export const apiRequesition = axios.create({
  baseURL: 'https://apiteste.mobieduca.me',
});

//guilherme.visgueira@mobimark.com.br 
//guilherme@159753
let tokenTaked : string
export async function UserValidation(LocalEmail: string, LocalSenha: string) {

  //const [tokenTake, setTokenTake] = UseStade('')

  return await apiRequesition.post('/api/login/run', {
    email: LocalEmail,
    senha: LocalSenha 
    
  })


    // mostrando no console o token
    .then(resposta => {
      //console.log(resposta.data.token)
      //-------
      //pegando o token e e jogando em uma variavel
      tokenTaked = resposta.data.token 
      //console.log(takedToken)
      //setHoldToken(resposta.data.token)
      console.log(tokenTaked)
      return 200;
    })

    //retorna o erro
    .catch(() => {
      
      
      return "Login ou senha invalidos"
    })

}


export async function EscolasApi(setListagemEscolaAPI) {
  return await apiRequesition.get('/api/escolas', {
    headers: {

      Authorization: `Bearer ${'729|NIDabf4xEpAWWKO912tdkz0LCAqrylOhE9BpQ23c47a4a3f6'}`
      //possivelmente o token nome do token é (X-CSRF-TOKEN)
      
      //'token': tokenTaked
    }
  }

  )
    .then(resposta => {

      setListagemEscolaAPI(resposta.data)

    })
    .catch(error => {

      console.log(error)
      return "Erro ao acessar as escolas"
    })

}




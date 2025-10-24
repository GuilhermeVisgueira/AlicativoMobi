import axios from "axios";
import { useState } from 'react'; 

export const apiRequesition = axios.create({
  baseURL: 'https://apiteste.mobieduca.me',
});

//guilherme.visgueira@mobimark.com.br 
//guilherme@159753
//let tokenTaked : string
export async function UserValidation(LocalEmail: string, LocalSenha: string) {

  const [tokenTake, setTokenTake] = UseStade('')

  return await apiRequesition.post('/api/login/run', {
    email: LocalEmail,
    senha: LocalSenha

  })


    // mostrando no console o token
    .then(resposta => {
      //console.log(resposta.data.token)
      //-------
      //pegando o token e e jogando em uma variavel
  //    tokenTaked = resposta.data.token 
      //console.log(takedToken)
      //setHoldToken(resposta.data.token)
      
      return 200;
    })

    //retorna o erro
    .catch(() => {
      
      return "Login ou senha invalidos"

    })

}


/* export async function EscolasApi(setListagemEscolaAPI) {
  return await apiRequesition.get('/api/escolas', {
    headers: {
      'token': tokenTaked
    }
  }

  )
    .then(resposta => {

      setListagemEscolaAPI(resposta.data)

    })
    .catch(error => {

      console.log(error)
      return "Login ou senha invalidos"
    })


  
} */




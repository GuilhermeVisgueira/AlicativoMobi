import axios from "axios";


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

//  recebe como parametro da função useState(que muda a listagem de das escolas atravez do parametro setListagemEscolasAPI)
//  retorna a api das escolas, params/ page a paginação
//  headers com a autenticação do totenk
//  em seguida funções da api .then e .catch para sucesso e fracasso
export async function EscolasApi(setListagemEscolaAPI) {
  return await apiRequesition.get('/api/escolas', {
    params: {
      page: 1
    },
    headers: {

      Authorization: `Bearer ${'729|NIDabf4xEpAWWKO912tdkz0LCAqrylOhE9BpQ23c47a4a3f6'}`
      
    }
  }

  )
    .then(resposta => {
      console.log(resposta.data)
      return setListagemEscolaAPI(resposta.data)

    })
    .catch(error => {

      console.log(error)
      return "Erro ao acessar as escolas"
    })

}

//-----
/* 
Get das Estado
*/
export async function GetEstadoAPI(params:type) {
  return await apiRequesition.get('/api/estados', {
    
  })
}

//-----
/* 
Get das Cidades
*/

export async function GetCidadeAPI(params:type) {
  return await apiRequesition.get('/api/cidades', {
    
  })
}


/* 
criar função que crie na api as escolas 
*/


/* export async function APICadastroSchool() {
  
  return await apiRequesition.post('/api/escolas'


  )


} */

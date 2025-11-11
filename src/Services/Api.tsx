import axios from "axios";


export const apiRequesition = axios.create({
  baseURL: 'https://apiteste.mobieduca.me',
});

//guilherme.visgueira@mobimark.com.br 
//guilherme@159753
let tokenTaked: string
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
      // depois adicionar o token como uma variavel
      Authorization: `Bearer ${'729|NIDabf4xEpAWWKO912tdkz0LCAqrylOhE9BpQ23c47a4a3f6'}`

    }
  }
  )

    .then(resposta => {

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
devo selecionar o estado para logo em seguida conseguir selecionar as cidades
retornar os estados em algum tipo de lista
*/
export async function GetEstadoAPI(setListaEstadosAPI) {
  return await apiRequesition.get('/api/estados', {
    headers: {
      // depois adicionar o token como uma variavel
      Authorization: `Bearer ${'729|NIDabf4xEpAWWKO912tdkz0LCAqrylOhE9BpQ23c47a4a3f6'}`
    }
  })
    .then(resposta => {
      return setListaEstadosAPI(resposta.data)
    })
    .catch(error => {
      console.log(error)
      return "Erro ao encontrar Estados"
    })
}

//-----
/* 
Get das Cidades
*/

export async function GetCidadeAPI(setListaCidadeAPI) {
  return await apiRequesition.get('/api/cidades', {
    headers: {
      // depois adicionar o token como uma variavel
      Authorization: `Bearer ${'729|NIDabf4xEpAWWKO912tdkz0LCAqrylOhE9BpQ23c47a4a3f6'}`
    }
  })
    .then(resposta => {
      return setListaCidadeAPI(resposta.data)
    })
    .catch(error => {
      console.log(error)
      return "Erro ao encontrar Cidades"
    })
}


/* 
criar função que crie na api as escolas 
*/


/* export async function APICadastroSchool() {
  
  return await apiRequesition.post('/api/escolas'


  )


} */

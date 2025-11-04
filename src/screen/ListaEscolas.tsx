

import { View, Text, FlatList } from 'react-native';
import { Searchbar } from 'react-native-paper';
import { EscolasApi } from '../Services/Api';

import { useState, useEffect } from 'react';
import styles from './StylesGlobal';


//ter um useeffect para chamar a função da api que faz a requisição da lista de escolas "/api/escolas"
//ideal ser carregado apenas uma vez


export default function ListaEscolas() {
  

  const [pesquisar, setPesquisar] = useState("")
  const [listagemEscolasAPI, setListagemEscolasAPI] = useState([])

  // ta quebrando quando eu habilito essa função = provavel motivo era pq dentro da função da api ela nao
  // tava recebendo o token como header
   useEffect(() => {
    EscolasApi(setListagemEscolasAPI)

  },[]) 


  const lista = [
    {
      "id": 1,
      "nome": "Unidade escola Santo antonio",
      "diretor": "Conceição",
      "localizacao": 1,
      "usuario_id": 1,
      "cidade_id": 2211308,
      "created_at": "30-08-2024 18:34:35",
      "updated_at": "30-08-2024 18:34:35",
      "zona": "Urbana",
      "turnos": [
        {
          "escola_id": 3,
          "turno_sigla": "M",
          "turno": "Manhã"
        }
      ],
      "usuario": {
        "id": 1,
        "name": "Usuário Teste",
        "email": "teste@exemplo.com.br"
      },
      "cidade": {
        "id": 2211308,
        "estado_id": 22,
        "descricao": "VALENCA DO PIAUI",
        "estado": {
          "id": 22,
          "descricao": "Piauí",
          "sigla": "PI"
        }
      }
    },
    {
      "id": 2,
      "nome": "Escola 2",
      "diretor": "Conceição",
      "localizacao": 1,
      "usuario_id": 1,
      "cidade_id": 2211308,
      "created_at": "30-08-2024 18:34:35",
      "updated_at": "30-08-2024 18:34:35",
      "zona": "Urbana",
      "turnos": [
        {
          "escola_id": 3,
          "turno_sigla": "M",
          "turno": "Manhã"
        }
      ],
      "usuario": {
        "id": 1,
        "name": "Usuário Teste",
        "email": "teste@exemplo.com.br"
      },
      "cidade": {
        "id": 2211308,
        "estado_id": 22,
        "descricao": "VALENCA DO PIAUI",
        "estado": {
          "id": 22,
          "descricao": "Piauí",
          "sigla": "PI"
        }
      }
    },
    {
      "id": 3,
      "nome": "Escola 3",
      "diretor": "Conceição",
      "localizacao": 1,
      "usuario_id": 1,
      "cidade_id": 2211308,
      "created_at": "30-08-2024 18:34:35",
      "updated_at": "30-08-2024 18:34:35",
      "zona": "Urbana",
      "turnos": [
        {
          "escola_id": 3,
          "turno_sigla": "M",
          "turno": "Manhã"
        }
      ],
      "usuario": {
        "id": 1,
        "name": "Usuário Teste",
        "email": "teste@exemplo.com.br"
      },
      "cidade": {
        "id": 2211308,
        "estado_id": 22,
        "descricao": "VALENCA DO PIAUI",
        "estado": {
          "id": 22,
          "descricao": "Piauí",
          "sigla": "PI"
        }
      }
    },
  ]

  const objetolista = ({ item }) => {
    return (
      <Text style={styles.Listagem} >{item.nome}</Text>
    )
  }
  return (
    
  
    <View style={styles.TelaPrincipal}>

      <Text style={styles.TituloLista}>Lista Escolas</Text>

      <View>
        <Searchbar
          value={pesquisar}
          placeholder="Pesquisar"
          onChangeText={setPesquisar}
        />
      </View>


      <FlatList
        //data deve ter a propria lista, no caso usando api seria passado todas as listas
        
        //no momento ele ta pegando a lista mocada que é uma lista que possui dentro do proprio codigo
        data={listagemEscolasAPI} // passar minha informações da api
        renderItem={objetolista} // vai olhar cada um dos itens passados pela data e listar
        pagingEnabled


      />


    </View>
  );
}

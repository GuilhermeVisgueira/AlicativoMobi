

import { View, Text, FlatList } from 'react-native';
import { Searchbar } from 'react-native-paper';
import { EscolasApi } from '../Services/Api';

import { useState } from 'react';
import styles from './StylesGlobal';


export default function ListaEscolas() {

  const [pesquisar, setPesquisar] = useState("")
  const [listagemEscolasAPI, setListagemEscolasAPI] = useState([])
  EscolasApi(setListagemEscolasAPI)
  const objetolista = ({item}) => {
    return (
      <Text style={{color: '#e90606ff'}} >{item.nome}</Text>
    )
  }
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
    } 
    
  ]

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
          data={listagemEscolasAPI} // tinha lista
          renderItem={objetolista}
          

        />
      

    </View>

  );
}







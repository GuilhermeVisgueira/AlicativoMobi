

import { FlatList, View, Text } from 'react-native';
import styles from './StylesGlobal';
import { useEffect, useState } from 'react';
import { GetEstadoAPI, GetCidadeAPI } from '../Services/Api';

export default function TelaCadastro() {

  /* usar o useStade para criar um objeto de listagem e passar para a api 
    a listagem de todo os estados
  */
  const [listaEstadosAPI, setListaEstadosAPI] = useState()
  const [listaCidadesAPI, setListaCidadesAPI] = useState()


  useEffect(() => {
    GetEstadoAPI(setListaEstadosAPI)
    GetCidadeAPI(setListaCidadesAPI)
  }, [])


  const objetolista = ({ item }) => {
    return (
      <Text style={styles.Listagem} >{item.descricao}</Text>

    )
  }
  return (


    /* 
    usar o picker para fazer a listagem dos itens da api de Estado e Cidade
    utilizar o checkbox para os turnos
    */

    <View >
      <Text style={styles.TituloLista}>Tela Cadastro</Text>

      <View>
        <Text>Estados -----</Text>
        {/* parte das estados, adicionar os pickes( seleção de estados e cidades)  */}
        <FlatList

          //data deve ter a propria lista, no caso usando api seria passado todas as listas
          //no momento ele ta pegando a lista mocada que é uma lista que possui dentro do proprio codigo
          data={listaEstadosAPI} // passar minha informações da api
          // não tava aparecendo os dados da lista da api quando eu colocava data={listagemEscolasAPI}
          // pois eu deveria acessar os dados usando data, ja que as escolas estavam dentro desse parametro
          // a ? (operação ternaria) ta mostrando caso aja algum objeto da requisição da api
          renderItem={objetolista} // vai olhar cada um dos itens passados pela data e listar
          pagingEnabled
        />
      </View>
      <View>
        <Text>
          Cidades -----</Text>
        {/* parte das cidades, adicionar os pickes( seleção de estados e cidades)  */}
        <FlatList
          //data deve ter a propria lista, no caso usando api seria passado todas as listas
          //no momento ele ta pegando a lista mocada que é uma lista que possui dentro do proprio codigo
          data={listaCidadesAPI} // passar minha informações da api
          // não tava aparecendo os dados da lista da api quando eu colocava data={listagemEscolasAPI}
          // pois eu deveria acessar os dados usando data, ja que as escolas estavam dentro desse parametro
          // a ? (operação ternaria) ta mostrando caso aja algum objeto da requisição da api
          renderItem={objetolista} // vai olhar cada um dos itens passados pela data e listar
          pagingEnabled
        />

      </View>



    </View>
  );
}








import { FlatList, View, Text } from 'react-native';
import styles from './StylesGlobal';
import { useEffect, useState } from 'react';
import { GetEstadoAPI, GetCidadeAPI, APICadastroSchool, EscolasApi } from '../Services/Api';
import { Picker } from '@react-native-picker/picker';
import { Button } from 'react-native-paper';



export default function TelaCadastro() {


  /* função para chamar o metodo post */



  /* usar o useStade para criar um objeto de listagem e passar para a api 
    a listagem de todo os estados
  */
  const [listaEstadosAPI, setListaEstadosAPI] = useState()
  const [listaCidadesAPI, setListaCidadesAPI] = useState()
  const [teste, setteste] = useState()
  
  /* usar o return no useeffect:
  quando saio do componente ira executar oq esta no return
  */
  useEffect(() => {
    //EscolasApi(setListaCidadesAPI)
    GetEstadoAPI(setListaEstadosAPI)
    GetCidadeAPI(setListaCidadesAPI)
  }, [teste])


  const objetolista = ({ item }) => {
    return (
      <Text style={styles.Listagem} >Cidade: {item.descricao} ID: {item.id}</Text>
      
    )
  }
  return (


    /* 
    usar o picker para fazer a listagem dos itens da api de Estado e Cidade
    utilizar o checkbox para os turnos
    */

    <View >
      <Text style={styles.TituloLista}>Tela Cadastro</Text>

      {/* <View>
        <Text>Estados -----</Text>
        
        <FlatList


          data={listaEstadosAPI}
          renderItem={objetolista}
          pagingEnabled
        />
      </View> */}

       <View>
        <Text>
          Cidades -----</Text>
        <FlatList
        data={listaCidadesAPI} 
        renderItem={objetolista}
          pagingEnabled
        />

      </View> 

      <View>
        <Text> Seleção de turnos utilização do checkbox </Text>
      </View>


      <View style={styles.Botao}>
        <Button
          textColor='#fff'
          onPress={() => {
            APICadastroSchool()
            
          }}
        >

          <Text>Botao para a requisição do post escolas</Text>

        </Button>
      </View>

    </View>
  );
}






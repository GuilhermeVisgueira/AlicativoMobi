

import { FlatList, View, Text } from 'react-native';
import styles from './StylesGlobal';
import { useEffect, useState } from 'react';
import { GetEstadoAPI, GetCidadeAPI, APICadastroSchool, EscolasApi } from '../Services/Api';
import { Button } from 'react-native-paper';

import { Picker } from '@react-native-picker/picker';
import CheckBox from '@react-native-community/checkbox';






export default function TelaCadastro() {


  /* função para chamar o metodo post */

  /* variavies chamando o checkbox */
  const [toggleCheckBox, setToggleCheckBox] = useState([])
  /* estados do piker para a seleção do item */

  //const [piker, setPiker] = useState("");
  /* usar o useStade para criar um objeto de listagem e passar para a api
    a listagem de todo os estados
  */
  // render checkbox
  /* os 3 prontos é o spread = como se fosse uma copia do arry(pesquisar melhor depois)
  essa função pega o valor do check box passando como parametros o valor de clicado do botao, que é true ou false 
  e passando uma string que tem um dos turnos, onde se tiver  */
  function AddValueCheckBox(value, turnosCheckBox) {
    if (value) {
      setToggleCheckBox([...toggleCheckBox, turnosCheckBox])
    } else {
      setToggleCheckBox(toggleCheckBox.filter(i => i != turnosCheckBox))
    }
      
  }

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
      {/* checkbox para seleção de turnos */}
      <View style={styles.checkboxTurnos}>

        <View>
          <Text>Manha</Text>
          <CheckBox

            disabled={false}
            value={toggleCheckBox.includes("M")}
            onValueChange={(newValue) =>
              AddValueCheckBox(newValue, "M")}
              
          />
         </View>
        
      </View>
      {/*
      Mudar de foco para o check list
      ultima situação => indo atras do map para por na lista integrando na api dos estados

      <View>
         usar o map aqui 
        <Picker
          selectedValue={piker}
          onValueChange={(itemValue, itemIndex) =>
            setPiker(itemValue)
          }>
          <Picker.Item label="Java" value="java" />
          <Picker.Item label="JavaScript" value="js" />
        </Picker>
      </View> */}

    </View>
  );
}






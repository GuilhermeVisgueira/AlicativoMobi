

import {  View, Text, TextInput } from 'react-native';
import styles from './StylesGlobal';
import { useEffect, useState } from 'react';
import { GetEstadoAPI, GetCidadeAPI, APICadastroSchool } from '../Services/Api';
import { Button } from 'react-native-paper';

import { Picker } from '@react-native-picker/picker';
import CheckBox from '@react-native-community/checkbox';






export default function TelaCadastro() {



  const [toggleCheckBox, setToggleCheckBox] = useState([])
  /* Caixa de texto  */
  const [escola, setEscola] = useState('');
  const [diretor, setDiretor] = useState('');
  /* estados do picker para a seleção do item */
  const [pikerEstado, setPikerEstado] = useState("");
  /* cidades do picker para a seleção do item */
  const [pikerCidade, setPikerCidade] = useState("");
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

  const [listaEstadosAPI, setListaEstadosAPI] = useState(null)
  //passar o id do estado usando o setEstadoSelecionado para receber essa informação 
  const [estadoSelecionado, setEstadoSelecionado] = useState(null)
  const [listaCidadesAPI, setListaCidadesAPI] = useState(null)
  const [cidadeSelecionada, setCidadeSelecionada] = useState(null)

  /* funcao para a cor selecionada. Receber a escola selecionada e tambem
  alterar o setEstadoSelecionado para o estado selecionado bem como alterar
  o estado
  */
  /* função para chamar a api dos estados e adicionar no piker */
  function SelectAndHoldEstado(Estado) {
    setPikerEstado(Estado)
    //pegando o parametro de entrada de estado e colocando o id nele
    setEstadoSelecionado(Estado)

  }

  function SelectAndHoldCidade(Cidade) {
    //por o estado como parametro tbm para selecionar as cidades
    
    setCidadeSelecionada(Cidade)
    setCidadeSelecionada(Cidade)
  }
  /*useEffect quando entra na tela

  */
  useEffect(() => {

    GetEstadoAPI(setListaEstadosAPI)
    GetCidadeAPI(setListaCidadesAPI)

  }, [])

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
  /* esse objeto é usado no flatlist e como seria feito a mostragem dos  */
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

      {/* <View>
        <Text>
          Cidades -----</Text>
        <FlatList
          data={listaCidadesAPI}
          renderItem={objetolista}
          pagingEnabled
        />

      </View> */}

      <View>
        <Text> Seleção de turnos utilização do checkbox </Text>
      </View>

      <View>
        <TextInput
          ///style={styles.input} posteriormente adicionar style
          onChangeText={setEscola}
          value={escola}
          placeholder="Nome da Escola"
        />
      </View>

      <View>
        <TextInput
          ///style={styles.input} posteriormente adicionar style
          onChangeText={setDiretor}
          value={diretor}
          placeholder="Nome do Diretor"
        />
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
        <View>
          <Text>Tarde</Text>
          <CheckBox

            disabled={false}
            value={toggleCheckBox.includes("T")}
            onValueChange={(newValue) =>
              AddValueCheckBox(newValue, "T")}
          />
        </View>
        <View>
          <Text>Noite</Text>
          <CheckBox

            disabled={false}
            value={toggleCheckBox.includes("N")}
            onValueChange={(newValue) =>
              AddValueCheckBox(newValue, "N")}
          />
        </View>
        <View>
          <Text>Integral</Text>
          <CheckBox

            disabled={false}
            value={toggleCheckBox.includes("I")}
            onValueChange={(newValue) =>
              AddValueCheckBox(newValue, "I")}
          />
        </View>

      </View>


      <View>

        <Text> Estados </Text>
        <Picker

          selectedValue={pikerEstado}
          onValueChange={(estadoSelecionadoLocal) => SelectAndHoldEstado(estadoSelecionadoLocal)
          }>
          

          {/* usando o {} para incluir um codigo javascript, e comparando o listaEstadosAPI 
          com o tamanho do mesmo e em seguida se é maior que 0 e essa parte onde tem a ultima
          comparação com o && meio que é aceitar o jeito do javascript é assim, o map
          tem a função de passar todos os estados que a api retorna no picker, label 
          aparentimente mostra o nome do item no picker, value e key nao sao mostrados
          e nao sei exatamente para que estao ali. Aparentimente devo fazer uma
          que faça os valores do estadoSelecionado serem recebidos*/}


          {listaEstadosAPI && listaEstadosAPI.length > 0 && listaEstadosAPI.map((estado) =>
            < Picker.Item label={estado.descricao} value={estado.id} key={estado.id} />)

          }

        </Picker>
      </View>

      <View>
        <Text> Cidades </Text>
        <Picker

          selectedValue={listaCidadesAPI}
          onValueChange={(cidadeSelecionadaLocal) => SelectAndHoldCidade(cidadeSelecionadaLocal)
          }>

          {listaCidadesAPI && listaCidadesAPI.length > 0 && listaCidadesAPI.map((cidade) =>
            <Picker.Item label={cidade.descricao} value={cidade.id} key={cidade.id} />)}

        </Picker>
      </View>

      <View style={styles.Botao}>
        <Button
          textColor='#fff'
          onPress={() => {
            APICadastroSchool()

          }}
        >

          <Text>Confirmar</Text>

        </Button>
      </View>
    </View>


  );
}






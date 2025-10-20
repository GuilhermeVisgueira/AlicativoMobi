

import { StyleSheet, View, Text } from 'react-native';
import {Searchbar, List } from 'react-native-paper';

import { useState } from 'react';
import styles from './StylesGlobal';


export default function ListaEscolas  ()  {

  const [pesquisar, setPesquisar] = useState("Pesquisar")


  return (
    <View style={styles.TelaPrincipal}>

      <Text style={styles.TituloLista}>Lista Escolas</Text>

      <View>

        <Searchbar
          value={pesquisar}
          placeholder="Search"
          onChangeText={setPesquisar}
        />


      </View>

    </View>

  );
}







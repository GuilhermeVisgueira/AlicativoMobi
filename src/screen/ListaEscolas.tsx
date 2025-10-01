

import { StyleSheet, View, Text } from 'react-native';


export default function ListaEscolas() {
  

  return (
    <View style={styles.container}>
      <Text style={styles.title}> Lista Escolas</Text>
  
    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold'
  }
});



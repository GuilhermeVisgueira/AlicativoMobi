

import { StyleSheet, View, Text } from 'react-native';


export default function CadastroEscola() {
  

  return (
    <View style={styles.container}>
      <Text style={styles.title}> Cadastro Escola</Text>
  
    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold'
  }
});



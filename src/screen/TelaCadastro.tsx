

import { StyleSheet, View, Text } from 'react-native';


export default function TelaCadastro() {
  

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tela Cadastro</Text>
  
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



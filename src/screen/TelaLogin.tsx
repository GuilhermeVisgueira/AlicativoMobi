

import {View, Text } from 'react-native';
import styles from './StylesGlobal';

export default function TelaLogin() {
  console.log ("Entrou")

  return (
    <View style={styles.container}>
      <Text style={styles.TituloCentral}>Tela Login</Text>
  
    </View>
  );
}



/* const styles = StyleSheet.create({
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
}); */



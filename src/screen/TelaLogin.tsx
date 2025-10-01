

import { StyleSheet, View, Text } from 'react-native';


export default function TelaLogin() {
  

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tela Login</Text>
  
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



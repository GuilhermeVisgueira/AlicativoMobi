import {View, Text } from 'react-native';
import styles from './StylesGlobal';
import { Button } from 'react-native-paper';
import { useState } from 'react';
import { UserValidation } from '../Services/Api';
import { useNavigation } from '@react-navigation/native';

export default function TelaLogin() {
  console.log ("Entrou")
  const [holdToken, setHoldToken] = useState()
  const Navigation = useNavigation()
  return (
    <View style={styles.container}>
      <Text style={styles.TituloCentral}>Tela Login</Text>
      <View style={styles.container}>
    <Button
          onPress={() =>
            Navigation.navigate('Home')
       // UserValidation(setHoldToken)
      }
      >
        <Text> botao de requisiçao</Text>
    </Button>
    </View>
    </View>
  );
}


// redirecionar para a tela de rotas
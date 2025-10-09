import {View, Text } from 'react-native';

import { Button } from 'react-native-paper';
import {UserValidation} from '../Services/Api';
import { useState } from 'react';
import styles from './StylesGlobal';





//Botao para testar auteticação da API
export default function TelaTeste() {
  const [holdToken , setHoldToken] = useState()
  console.log(holdToken)
  return (
    <View style={styles.container}>
    <Button
      onPress={ () =>
        UserValidation(setHoldToken)
      }
      >
        <Text> TESTE STYLE BOTAO DE REQUISIÇÃO</Text>
    </Button>
    </View>
  );
}


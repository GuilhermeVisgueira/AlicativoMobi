import { View, Text } from 'react-native';

import { Button } from 'react-native-paper';
import { UserValidation } from '../Services/Api';
import { useState } from 'react';
import styles from './StylesGlobal';





//Botao para testar auteticação da API
export default function TelaTeste() {


  return (
    <View >
      <Button>
        <Text> botao de requisiçao</Text>


      </Button>
    </View>
  );
}


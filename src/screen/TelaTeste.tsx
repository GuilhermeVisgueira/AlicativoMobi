import {View, Text } from 'react-native';

import { Button } from 'react-native-paper';
import {UserValidation} from '../Services/Api';





//Botao para testar auteticação da API
export default function TelaTeste() {
  

  return (
    <View>
    <Button
      onPress={
        UserValidation
      }
      >
        <Text> botao de requisiçao</Text>
    </Button>
    </View>
  );
}


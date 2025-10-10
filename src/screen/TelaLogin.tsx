import {View, Text} from 'react-native';
import { Button } from 'react-native-paper';
import styles from './StylesGlobal';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { UserValidation } from '../Services/Api';
import { TextInput } from 'react-native-paper';

  
  
  
//primeira tela

export default function TelaLogin() {
  console.log ("Entrou")
  const [holdToken, setHoldToken] = useState()
  const Navigation = useNavigation()
  
  //const textUser, setTextUser = React.useState('Digite o login')
  const [text, setText] = useState("Digite o login");





  
  return (
    <View style={styles.container}>
      <Text style={styles.TituloCentral}>Tela Login</Text>
      <View style={styles.container}>


        <Button
          onPress={() =>
            Navigation.navigate('Home')
          // UserValidation(setHoldToken)
        }>
        <Text> botao de requisiçao</Text>
        </Button>
      </View>
      
      <View style={styles.DigitacaoUser}>
      <TextInput
        placeholder= {text}
        disabled
      />
      </View>
      

    </View>
  );
}


// redirecionar para a tela de rotas
import {View, Text} from 'react-native';
import { Button } from 'react-native-paper';
import styles from './StylesGlobal';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { UserValidation } from '../Services/Api';
import { TextInput } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
  
  
  
//primeira tela

export default function TelaLogin() {
  console.log ("Entrou")
  const [holdToken, setHoldToken] = useState()
  const Navigation = useNavigation()
  
  //const textUser, setTextUser = React.useState('Digite o login')
  const [text, setText] = useState("Digite o login");





  
  return (
    

    
    <View style={styles.TelaPrincipal} >
      
      <View style={styles.StyleHeaderLogin}>
      
        <Text>Tela Login</Text>
        
      </View>  

      <View style={styles.StyleValidation} >
     
          <TextInput style={styles.TituloCentral}
          
          placeholder= {text}
          disabled
        />
        
        <View>


        <Button 
        
          onPress={() =>
            Navigation.navigate('Home')
          // UserValidation(setHoldToken)
        }>
        <Text> botao de requisiçao</Text>
        </Button>
        </View>
        
      </View>
      

      


      </View>
      
  );
}


// redirecionar para a tela de rotas
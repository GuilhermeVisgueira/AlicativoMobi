import { View, Text } from 'react-native';
import { Button } from 'react-native-paper';
import styles from './StylesGlobal';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { UserValidation } from '../Services/Api';
import { TextInput } from 'react-native-paper';






export default function TelaLogin() {
  console.log("Entrou")
  const [holdToken, setHoldToken] = useState()
  const Navigation = useNavigation()

  //const textUser, setTextUser = React.useState('Digite o login')
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");







  return (

    <View style={styles.TelaPrincipal} >
      <View style={styles.StyleHeaderLogin}>
        <Text style={styles.TextoLogin}>Tela Login</Text>
      </View>


      <View style={styles.StyleValidation} >
        <View >
          <TextInput
            placeholder='Email' //pode se colocar o {text} que possui o texto como padrao
            disabled
            onChangeText={novoTextoEmail => setEmail(novoTextoEmail)}
            
          />
        </View>

        <View >
          <TextInput
            onChangeText={novoTextoPass => setSenha(novoTextoPass)}
            placeholder='Senha'
            disabled

          />
        </View>



        <View style={styles.Botao}>
          <Button
            textColor='#ffffffff'
            onPress={() => {


              UserValidation(email, senha)

              Navigation.navigate('Home')
              //UserValidation(setHoldToken)
            }
            }>
            <Text > Entrar</Text>
          </Button>
        </View>

      </View>





    </View>

  );
}


// redirecionar para a tela de rotas
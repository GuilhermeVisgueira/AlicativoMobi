import { View, Text, Alert } from 'react-native';
import { Button } from 'react-native-paper';
import styles from './StylesGlobal';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { UserValidation } from '../Services/Api';
import { TextInput } from 'react-native-paper';






export default function TelaLogin() {
  console.log("att a pagina")
  //const [holdToken, setHoldToken] = useState()
  const Navigation = useNavigation()


  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  async function waitResposta() {
    const resposta = await UserValidation(email, senha)
    console.log(resposta)
    if (resposta === 200) {
      Navigation.navigate('Home')

    } else {
      Alert.alert("Login ou senha invalidas")
    }

  }





  return (

    <View style={styles.TelaPrincipal} >
      <View style={styles.StyleHeaderLogin}>
        <Text style={styles.TextoLogin}>Tela Login</Text>
      </View>


      <View style={styles.StyleValidation} >
        <View >
          <TextInput
            placeholder='Email' //pode se colocar o {text} que possui o texto como padrao

            onChangeText={novoTextoEmail => setEmail(novoTextoEmail)}

          />
        </View>

        <View >
          <TextInput
            secureTextEntry
            onChangeText={novoTextoPass => setSenha(novoTextoPass)}
            placeholder='Senha'

          />
        </View>



        <View style={styles.Botao}>
          <Button
            textColor='#ffffffff'
            onPress={() => {
              waitResposta()
              //oq eu preciso para validar no if????

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
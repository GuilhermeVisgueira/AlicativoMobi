import { StyleSheet } from 'react-native';



const styles = StyleSheet.create({
  StyleHeaderLogin: {
    flex: 0.5,
    backgroundColor: '#fcf6faff',
    margin: 20,
    alignItems: 'center', //coloca no meio da flex de forma horizontal
    justifyContent: 'center', //coloca no meio da flex de forma vertical

  },
  StyleValidation: {

    backgroundColor: '#f9f2f2ff',

    margin: 20

    //tela inteira
    // justifyContent: 'center',
  },
  TituloCentral: {
    fontSize: 22,
    fontWeight: 'bold',

  },
  TelaPrincipal: {
    flex: 1,
    backgroundColor: '#f6f6f6ff',
    margin: 18

  },
  DigitacaoUser: {
    height: 12,
    backgroundColor: '#090909ff',
    paddingHorizontal: 10
  },
  Botao: {
    backgroundColor: '#0f59efff',



  },
  TextoLogin: {

    fontSize: 40,
    color: '#0f59efff'
  },
  TextBotaoLogin: {
    backgroundColor: '#ffffffff',
  },
  TituloLista: {

    fontSize: 40,
    color: '#0f59efff'
  },
  Listagem: {
    alignItems: 'center',
    fontSize: 15,
    
  }
});

export default styles;
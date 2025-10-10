import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator} from '@react-navigation/stack';

import TelaLogin from '../screen/TelaLogin';
import TabRoutes  from '../routes/TabRoutes';


const Stack = createStackNavigator();


//Função para retornar as rotas de menu e se a autenticação 
//estiver correta mandar para a tela de menus

export default function RoutesToMenu() {
  
  return (
    <NavigationContainer>
      
      <Stack.Navigator>
        
        
        <Stack.Screen  
          name='Login'
          component={TelaLogin}
          options={{headerShown:false}} 
        />
      <Stack.Screen
              name='Home'
              component={TabRoutes}
            />
      </Stack.Navigator>
      
    </NavigationContainer>
  );
}
/* stackScreen cada tela empilhada no caso a primeira tela sera de login
assim que ouver a autentificaçao se passa para a segunda tela que seria
a tela Home/Menu onde se tem o tabRoutes passando assim para as telas
de pesquisas e cadastros das escolas */ 

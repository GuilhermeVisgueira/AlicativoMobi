import { createStackNavigator} from '@react-navigation/stack';


import TelaTeste from '../screen/TelaTeste';
import { TabRouter } from '@react-navigation/native';
import TabRoutes from './TabRoutes';
import TelaLogin from '../screen/TelaLogin';



const Stack = createStackNavigator();

export default function StackRoutes(){
  
  return (
    <Stack.Navigator>
      
      <Stack.Screen
        name='Tela TESTE'
        component={TelaLogin}
      />
      <Stack.Screen
        
        name='Login'
        component={TabRoutes}
        
      />
        
      
    </Stack.Navigator>
  );
}


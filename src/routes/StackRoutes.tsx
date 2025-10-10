import { createStackNavigator} from '@react-navigation/stack';


import TelaTeste from '../screen/TelaTeste';
import { TabRouter } from '@react-navigation/native';
import TabRoutes from './TabRoutes';



const Stack = createStackNavigator();

export default function StackRoutes(){
  
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='Tela TESTE'
        component={TelaTeste}
      />
      <Stack.Screen
        name='Home'
        component={TabRoutes}
      />
        
      
    </Stack.Navigator>
  );
}


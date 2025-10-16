import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import TelaLogin from '../screen/TelaLogin';
import TelaCadastro from '../screen/TelaCadastro';
import StackRoutes from '../routes/StackRoutes';
import TelaTeste from '../screen/TelaTeste';
import TesteStyle from '../screen/TesteStyle'

const Tab = createBottomTabNavigator();

export default function TabRoutes(){
  
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      
      
     <Tab.Screen
        name='Tela Teste'
        component={TelaTeste}
      /> 

      <Tab.Screen 
        name='Tela teste'
        component={TesteStyle}
        
      />


    </Tab.Navigator>
  );
}


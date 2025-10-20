import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import TelaLogin from '../screen/TelaLogin';
import TelaCadastro from '../screen/TelaCadastro';
import StackRoutes from '../routes/StackRoutes';
import TelaTeste from '../screen/TelaTeste';
import TesteStyle from '../screen/TesteStyle'
import ListaEscolas from '../screen/ListaEscolas';
import { Header, HeaderStyleInterpolators } from '@react-navigation/stack';

const Tab = createBottomTabNavigator();

export default function TabRoutes(){
  
  return (
    <Tab.Navigator screenOptions={{headerShadowVisible: false}}>
      
      <Tab.Screen
        options={{ headerShown:false }}
        name='Lista Escolas'
        component={ListaEscolas}
        
      /> 

      <Tab.Screen 
        
        name='Tela teste'
        component={TesteStyle}
        
      />


    </Tab.Navigator>
  );
}


import { createStackNavigator, Header } from '@react-navigation/stack';


import TelaTeste from '../screen/TelaTeste';



const Stack = createStackNavigator();

export default function StackRoutes(){
  
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='Tela TESTE'
        component={TelaTeste}
      />

      

    </Stack.Navigator>
  );
}


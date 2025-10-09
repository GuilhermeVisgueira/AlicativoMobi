import { NavigationContainer } from '@react-navigation/native';
import TabRoutes  from '../routes/TabRoutes';
import { createStackNavigator} from '@react-navigation/stack';
import TelaLogin from '../screen/TelaLogin';



const Stack = createStackNavigator();

export default function Routes() {
  
  return (
    <NavigationContainer>
      
      <Stack.Navigator>
        <Stack.Screen
          name='Tela login autenticação'
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


import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import ClimaScreen from '../screens/ClimaScreen';
import ListaScreen from '../screens/ListaScreen';
import PersonajesScreen from '../screens/PersonajesScreen';
import WelcomeScreen from '../screens/WelcomeScreen';

const Tab= createBottomTabNavigator()

function MyTabs(){
    return(
        <Tab.Navigator initialRouteName='Clima'> 
            <Tab.Screen name ="Clima" component={ClimaScreen} options={{headerShown:false}}/>
            <Tab.Screen name = "Lista" component={ListaScreen}/>
            <Tab.Screen name ="Personajes" component={PersonajesScreen}/>
            <Tab.Screen name ="Welcome" component={WelcomeScreen}/>
        </Tab.Navigator>
    )
}

export default function NavegadorBottom(){
    return(
     <NavigationContainer>
        <MyTabs/>
     </NavigationContainer>
    )
}
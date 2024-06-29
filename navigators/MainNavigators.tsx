import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import ClimaScreen from "../screens/ClimaScreen";
import ListaScreen from "../screens/ListaScreen";
import PersonajesScreen from "../screens/PersonajesScreen";
import WelcomeScreen from "../screens/WelcomeScreen";
import LoginScreen from "../screens/LoginScreen";
import Lista25Screen from '../screens/Lista25Screen';
import Personajes25Screen from '../screens/Personajes25Screen';





//boton tab
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

//stack
const Stack = createStackNavigator()

function MyStack(){
    return(
        <Stack.Navigator>
        <Stack.Screen  name="Login" component={LoginScreen}/>
        <Stack.Screen name="BottomTab" component={MyTabs}/>
        </Stack.Navigator>
    )
}



//top

const Top = createMaterialTopTabNavigator()
function MyTop(){
    return(
        <Top.Navigator>
            <Top.Screen name='Lista' component={ListaScreen}/>
            <Top.Screen name='Lista' component={Lista25Screen}/>
        </Top.Navigator>
    )
}

const Top2 = createMaterialTopTabNavigator()
function MyTop2(){
    return(
        <Top.Navigator>
            <Top.Screen name='Personajes' component={PersonajesScreen}/>
            <Top.Screen name='Personajes2' component={Personajes25Screen}/>
        </Top.Navigator>
    )
}



export default function Navegador(){
    return(
        <NavigationContainer>
            <MyStack/>
        </NavigationContainer>
    )
}
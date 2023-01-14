import React, { useContext } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from '../screens/LoginScreen';
import { HomeScreen } from '../screens/HomeScreen';
import Login from '../Auth/Login';
import { AuthContext } from '../Auth/AuthProvider';

const Stack = createStackNavigator()

const Nav = () => {
    const {token} = useContext(AuthContext)
    return (
        <NavigationContainer>
            <Stack.Navigator>
                {token === null
                    ?<Stack.Screen name="Login" component={LoginScreen}/>
                    :<Stack.Screen name="Home" component={HomeScreen}/>
                }                    
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Nav
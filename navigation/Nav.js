import React, { useContext } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from '../screens/LoginScreen';
import { HomeScreen } from '../screens/HomeScreen';
import { AuthContext } from '../Auth/AuthProvider';
import CreatePollScreen from '../screens/CreatePollScreen';

const Stack = createStackNavigator()

const Nav = () => {
    const {token} = useContext(AuthContext)
    return (
        <NavigationContainer>
            <Stack.Navigator>
                {token === null
                    ?<Stack.Screen name="Login" component={LoginScreen} options={{headerShown:false}}/>
                    :<Stack.Screen name="Home" component={HomeScreen} options={{headerShown:false}}/>
                }                    
                {token !== null && <Stack.Screen name="Create New Poll" component={CreatePollScreen}/>}
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Nav
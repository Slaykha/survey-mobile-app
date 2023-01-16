import { useContext, useState } from "react";
import {  StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { loginApi } from "../api/userApi"
import { AuthContext } from "./AuthProvider";

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const {login} = useContext(AuthContext)

    const handleSubmit = async () => {
        try {
            respone = await loginApi("denemeuser@email.com", "deneme123");

            console.log(respone)
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <View style={styles.loginContainer}>
            <Text style={styles.loginText}>Login</Text>
            <TextInput
                style={styles.textField}
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
            />
            <TextInput
                style={styles.textField}
                placeholder="Password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
            />
            <TouchableOpacity 
                style={styles.loginButton}
                onPress={login} 
            >
                <Text style={styles.loginButtonText}>Login</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    loginContainer:{
        marginTop:200,
    },
    textField:{
        padding:10,
        margin:20,
        marginBottom:10,
        marginTop:10,
        borderWidth:1,
        borderRadius:10,
    },
    loginButton:{
        padding: 12,
        margin:20,
        marginTop:25,
        borderWidth: 1,
        borderRadius: 5,
        backgroundColor:"#50C878",
        alignItems:"center"
    },
    loginButtonText:{
        color:"white",
        fontSize:18
    },
    loginText:{
        fontSize:32,
        fontWeight:"bold",
        margin: 50,
        marginLeft:"auto",
        marginRight:"auto",
    }
});

export default Login

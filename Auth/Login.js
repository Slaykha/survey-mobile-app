import { useContext, useState } from "react";
import { Button, Text, TextInput, View } from "react-native";
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
        <View>
            <TextInput
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
            />
            <TextInput
                placeholder="Password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
            />
            <Button title="Login" onPress={login} />
        </View>
    );
};

export default Login

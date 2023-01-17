import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

const CreateNewPoll = ({setQuestions}) => {
    const [questionText, setQuestionText] = useState("")
    const [optionsText, setOptionsText] = useState([{optionText: "", responses: 0}, {optionText: "", responses: 0}])
    const navigation = useNavigation()

    const setOption = (key, e) => {
        let tempOption = optionsText
        tempOption[key].optionText = e
        setOptionsText(tempOption)
        tempOption = []
    }

    const addOption = () => {
        setOptionsText(optionsText => [...optionsText, {optionText: "", responses: 0}])
    }

    const addPoll = () => {
        let Id = generateIdGenerator()
        if(questionText.length != 0 && optionCheck()){
            setQuestions(prevState => [{id: Id, questionText: questionText, options: optionsText}, ...prevState])
            navigation.navigate("Home")
        }
    }

    const optionCheck = () => {
        let check = 0
        optionsText.map(option => {
            if(option.optionText != 0){
                check += 1
            }
        })
        if(check >= 2){
            return true
        }
        return false
    }

    const generateIdGenerator = () => {
        let str = '0123456789';
        let id = [];
        for (let i = 0; i < 3; i++) {
            id.push(str[Math.floor(Math.random() * str.length)]);
        }
        return id.join('');
    }

    return (
      <View style={styles.addPollContainer}>
        <TextInput 
            style={styles.questionText}
            placeholder='Question Text'
            value={questionText}
            onChangeText={setQuestionText}
            multiline
        />
        {optionsText.map((option, key) => (
            <TextInput 
                style={styles.optionText}
                placeholder='Question Text'
                value={option}
                onChangeText={(e) => setOption(key, e)}
            />
        ))}
        {optionsText.length < 7 &&
            <TouchableOpacity 
                style={styles.addPollButton}
                onPress={addOption}    
            >
                <Text style={styles.addPollButtonText}>+</Text>
            </TouchableOpacity>
        }
         <TouchableOpacity 
            style={styles.addButton}
            onPress={addPoll} 
        >
            <Text style={styles.addButtonText}>Add Poll</Text>
        </TouchableOpacity>
      </View>
    );
}

const styles = StyleSheet.create({
    addPollContainer:{
        height:"100%"
    },  
    questionText:{
        padding:25,
        paddingTop:0,
        height:90,
        margin:20,
        marginTop:10,
        borderWidth:1,
        borderRadius:10,
    },
    optionText:{
        padding:10,
        margin:20,
        marginBottom:5,
        marginTop:5,
        borderWidth:1,
        borderRadius:10,
    },
    addPollButton:{
        width: 35,
        height: 35,
        backgroundColor: "#50C878",
        borderRadius: 5,
        marginLeft:"auto",
        marginRight:"auto",
        margin:10
    },
    addPollButtonText:{
        color:"white", 
        fontSize:24,
        marginLeft:"auto",
        marginRight:"auto"
    },
    addButton:{
        padding: 12,
        margin:20,
        marginTop:25,
        borderWidth: 1,
        borderRadius: 5,
        backgroundColor:"#50C878",
        alignItems:"center",
        position:"absolute",
        bottom:0,
        width:"90%"
    },
    addButtonText:{
        color:"white",
        fontSize:18
    }
});

export default CreateNewPoll;

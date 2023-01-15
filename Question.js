import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const Question = ({ questions, question, user, setUser, setQuestions}) => {

    const onClick = (option) => {
        let isInclude = user.responses.some(response => response.questionId === question.id)

        if(!isInclude){
            editQuestionsResponses(option)
            setUser(prevState => ({...prevState, responses: [...prevState.responses, {questionId: question.id, response: option.optionText}]}))
        }
    }

    const editQuestionsResponses = (option) => {
        let tempQuestions = questions
        tempQuestions.map((tempQuestion) =>{
            if(tempQuestion.id === question.id){
                tempQuestion.options.map((tempOption) => {
                    if(tempOption.optionText === option.optionText){
                        tempOption.responses += 1
                    }
                })
            }
        })
        setQuestions(tempQuestions)
    }

    const persantageCalculator = (options, option) => {
        let totalResponses = 0
        options.map((option) => {
            totalResponses += option.responses
        })
        if (totalResponses == 0) return 0 
        return ((option.responses / totalResponses) * 100).toFixed(1)
    }

    return (
        <View style={styles.questionContainer}>
            <Text style={styles.questionText}>{question.questionText}</Text>
            {question.options.map(option => (
                <TouchableOpacity
                    style={(user ? user.responses.map(response => response.questionId === question.id ? (response.response === option.optionText ? styles.selectedButton : styles.optionsButton) : styles.optionsButton) : styles.optionsButton)}
                    onPress={() => onClick(option)}
                >
                    <View style={styles.optionsContainer}>
                        <Text>{option.optionText}</Text>
                        {user.responses && (user.responses.map(response => (
                            question.id === response.questionId && <Text style={styles.percantages}>{persantageCalculator(question.options, option)}%</Text>
                        )))}
                    </View>
                </TouchableOpacity>
            ))}
        </View>
    );
  }

const styles = StyleSheet.create({
    questionContainer:{
        padding:20,
        margin:20,
        marginBottom:5,
        marginTop:5,
        borderWidth:1,
        borderRadius:10,
        
    },
    questionText: {
        fontSize: 20,
        marginBottom: 20
    },
    optionsButton: {
        padding: 10,
        marginBottom:5,
        borderWidth: 1,
        borderRadius: 5,
    },
    selectedButton: {
        padding: 10,
        marginBottom:5,
        borderWidth: 1,
        borderRadius: 5,
        backgroundColor:"green"
    },
    optionsContainer:{
        flexDirection:"row"
    },
    percantages:{
        marginLeft:"auto"
    }
   
});

export default Question

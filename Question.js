import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const Question = ({ question, user }) => {

    const onClick = (options, option) => {
        user.responses.map(response => {
            if(question.id != response.id){
                
            }
        })
    }

    const persantageCalculator = (options, option) => {
        let totalResponses = 0
        options.map((option) => {
            totalResponses += option.responses
        })
        if (totalResponses == 0) return 0 
        return (option.responses / totalResponses) * 100
    }

    return (
        <View style={styles.questionContainer}>
            <Text style={styles.questionText}>{question.questionText}</Text>
            {question.options.map(option => (
                <TouchableOpacity
                    style={styles.optionsButton}
                    onPress={() => onClick(question.options, option)}
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
    optionsContainer:{
        flexDirection:"row"
    },
    percantages:{
        marginLeft:"auto"
    }
   
});

export default Question

import React, { useState } from 'react'
import { ScrollView } from 'react-native'
import { AuthProvider } from '../Auth/AuthProvider'
import QuestionList from '../QuestionList'

const userDef ={
    id: 1,
    responses: [
      {
        questionId: 1,
        response: "Option2"
      },
    ]
  }
  
  const questionsDef = [
    {
      id: 1,
      userId: 1,
      questionText: 'Deneme Anket 1?',
      options: [{optionText: 'Option1', responses: 0}, {optionText: 'Option2', responses: 1}, {optionText: 'Option3', responses: 0}],
    },
    {
      id: 2,
      userId: 1,
      questionText: 'Deneme Anket 2?',
      options: [{optionText: 'Option1', responses: 0}, {optionText: 'Option2', responses: 0}, {optionText: 'Option3', responses: 0}],
    },
    {
      id: 3,
      userId: 1,
      questionText: 'Deneme Anket 3?',
      options: [{optionText: 'Option1', responses: 0}, {optionText: 'Option2', responses: 1}, {optionText: 'Option3', responses: 0}, {optionText: 'Option4', responses: 4}],
    },
    {
      id: 4,
      userId: 1,
      questionText: 'Deneme Anket 4?',
      options: [{optionText: 'Option1', responses: 0}, {optionText: 'Option2', responses: 0}],
    }
  ];

export const HomeScreen = () => {
  const [user, setUser] = useState(userDef)
  const [questions, setQuestions] = useState(questionsDef)
  return (
      <ScrollView style={{marginTop:50}}>
          <QuestionList questions={questions} user={user} setUser={setUser} setQuestions={setQuestions}/>
      </ScrollView>
  )
}

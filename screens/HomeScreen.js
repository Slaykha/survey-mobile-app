import { useNavigation } from '@react-navigation/native'
import React, { useContext, useState } from 'react'
import { ScrollView, Text, TouchableOpacity, View } from 'react-native'
import { AuthContext } from '../Auth/AuthProvider'
import QuestionList from '../poll/QuestionList'

const userDef ={
    id: 1,
    name:"Kadir",
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
      questionText: 'Deneme Anket 1?',
      options: [{optionText: 'Option1', responses: 0}, {optionText: 'Option2', responses: 1}, {optionText: 'Option3', responses: 0}],
    },
    {
      id: 2,
      questionText: 'Deneme Anket 2?',
      options: [{optionText: 'Option1', responses: 0}, {optionText: 'Option2', responses: 0}, {optionText: 'Option3', responses: 0}],
    },
    {
      id: 3,
      questionText: 'Deneme Anket 3?',
      options: [{optionText: 'Option1', responses: 0}, {optionText: 'Option2', responses: 1}, {optionText: 'Option3', responses: 0}, {optionText: 'Option4', responses: 4}],
    },
    {
      id: 4,
      questionText: 'Deneme Anket 4?',
      options: [{optionText: 'Option1', responses: 0}, {optionText: 'Option2', responses: 0}],
    }
  ];

export const HomeScreen = () => {
  const [user, setUser] = useState(userDef)
  const [questions, setQuestions] = useState(questionsDef)

  const {logout} = useContext(AuthContext)

  const navigation = useNavigation()

  const createPoll = () => {
    navigation.navigate("Create New Poll", {setQuestions})
  }

  return (
    <View style={{paddingBottom:40}}>
      <View style={{flex:0, flexDirection:"row", padding:5}}>
        <Text style={{fontSize:18, fontWeight:"bold", top:40, left:10}}>{user.name}</Text>
        <TouchableOpacity
          style={{
            top:40,
            right:10,
            marginLeft:"auto"
          }}
          onPress={logout}
        >
          <Text style={{fontSize:18, fontWeight:"bold"}}>Log Out</Text>
        </TouchableOpacity>      
      </View>
      <ScrollView style={{marginTop:50}}>
        <QuestionList questions={questions} user={user} setUser={setUser} setQuestions={setQuestions}/>
      </ScrollView>
      <TouchableOpacity
          style={{
            width: 50,
            height: 50,
            backgroundColor: "#50C878",
            position:"absolute",
            borderRadius: 999,
            alignItems:"center",
            justifyContent:"center",
            zIndex:99,
            right:15,
            top:"92%"
          }}
          onPress={createPoll}
        >
          <Text style={{color:"white", fontSize:24, top:-1.2, left:-0.2}}>+</Text>
        </TouchableOpacity>      
    </View>
  )
}

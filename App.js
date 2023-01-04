import React from 'react';
import { ScrollView } from 'react-native';
import QuestionList from './QuestionList';

// Define the data structure for the questions and options
const questions = [
  {
    questionText: 'Deneme Anket 1?',
    options: [{optionText: 'Optinon1', responses: 0}, {optionText: 'Optinon2', responses: 0}, {optionText: 'Optinon3', responses: 0}],
  },
  {
    questionText: 'Deneme Anket 2?',
    options: [{optionText: 'Optinon1', responses: 0}, {optionText: 'Optinon2', responses: 0}, {optionText: 'Optinon3', responses: 0}],
  },
  {
    questionText: 'Deneme Anket 3?',
    options: [{optionText: 'Optinon1', responses: 0}, {optionText: 'Optinon2', responses: 1}, {optionText: 'Optinon3', responses: 0}, {optionText: 'Optinon4', responses: 4}],
  },
  {
    questionText: 'Deneme Anket 4?',
    options: [{optionText: 'Optinon1', responses: 0}, {optionText: 'Optinon2', responses: 0}],
  }
];

const App = () => {
  return(
    <ScrollView style={{marginTop:50}}>
      <QuestionList questions={questions} />
    </ScrollView>
  )

}

export default App;

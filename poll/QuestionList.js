import React from 'react';
import { View } from 'react-native';
import Question from './Question';

const QuestionList = ({ questions, user, setUser, setQuestions }) => {

  return (
    <View>
      {questions.map(question => (
          <Question questions={questions} question={question} user={user} setUser={setUser} setQuestions={setQuestions}/>
      ))}
    </View>
  );
}

export default QuestionList;

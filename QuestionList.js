import React from 'react';
import { View } from 'react-native';
import Question from './Question';

const QuestionList = ({ questions, user }) => {
    return (
      <View>
        {questions.map(question => (
            <Question question={question} user={user}/>
        ))}
      </View>
    );
}

export default QuestionList;

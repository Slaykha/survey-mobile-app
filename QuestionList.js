import React from 'react';
import { View } from 'react-native';
import Question from './Question';

const QuestionList = ({ questions }) => {
    return (
      <View>
        {questions.map(question => (
            <Question question={question} />
        ))}
      </View>
    );
}

export default QuestionList;

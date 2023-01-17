import React from 'react'
import CreateNewPoll from '../poll/CreateNewPoll'

const CreatePollScreen = (props) => {
    return (
        <CreateNewPoll setQuestions={props.route.params.setQuestions}/>
    )
}

export default CreatePollScreen
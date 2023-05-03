import React from 'react';
import { useState } from 'react';
import Section from './Section';
import Statistics from './Statistics';
import FeedbackOptions from './FeedbackOptions';
import Notification from './Notification';
 
export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

const onLeaveFeedback = option => {
  switch (option) {
    case 'bad':
        setBad(prevState => prevState + 1);
      break;
    case 'neutral':
        setNeutral(prevState => prevState + 1);
      break;
    case 'good':
      setGood(prevState => prevState + 1);
      break;    
    
        default:
        return;
    }
  };

  const countTotalFeedback = () => {
  return good + neutral + bad;
}

  const countPositiveFeedbackPercentage = () => {
    const total = good + neutral + bad;

    return `${Math.round((good / total) * 100)}%`;
  };

    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={Object.keys({ good, neutral, bad })}
            onLeaveFeedback={onLeaveFeedback}
          />
        </Section>
      
      <Section title="Statistics">
          {good + neutral + bad > 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={countTotalFeedback}
              positivePercentage={countPositiveFeedbackPercentage}
            ></Statistics>
          ) : (
            <Notification message="There is no feedback yet"></Notification>
          )}
        </Section>
      </>
  );
};
  

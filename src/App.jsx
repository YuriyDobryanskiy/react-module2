import { useState, useEffect } from 'react';
import { Feedback, Options, Notification } from 'components';

export const App = () => {
  const initialFeedbackCount = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  const [feedbackCount, setFeedbackCount] = useState(initialFeedbackCount);

  useEffect(() => {
    const storedFeedback = JSON.parse(localStorage.getItem('feedback'));
    storedFeedback && setFeedbackCount(storedFeedback);
  }, []);

  useEffect(() => {
    localStorage.setItem('feedback', JSON.stringify(feedbackCount));
  }, [feedbackCount]);

  const updateFeedback = feedbackType => {
    setFeedbackCount(prevCount => ({
      ...prevCount,
      [feedbackType]: prevCount[feedbackType] + 1,
    }));
  };

  const resetFeedback = () => {
    setFeedbackCount(initialFeedbackCount);
  };

  const totalFeedback =
    feedbackCount.good + feedbackCount.neutral + feedbackCount.bad;
  const positivePercentage = Math.round(
    (feedbackCount.good / totalFeedback) * 100,
  );

  return (
    <div>
      <h1>Sip Happens Café</h1>
      <p>
        Please leave your feedback about our service by selecting one of the
        options below.
      </p>
      <Options
        updateFeedback={updateFeedback}
        resetFeedback={resetFeedback}
        totalFeedback={totalFeedback}
      />

      {totalFeedback > 0 ? (
        <Feedback
          feedbackCount={feedbackCount}
          totalFeedback={totalFeedback}
          positivePercentage={positivePercentage}
        />
      ) : (
        <Notification message="No feedback yet. Be the first to leave a review!" />
      )}
    </div>
  );
};

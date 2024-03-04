import { useState, useEffect } from 'react';
import { Feedback, Options, Notification, Description } from 'components';

export const App = () => {
  const initialFeedbackCount = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  const [feedbackCount, setFeedbackCount] = useState(() => {
    const storedFeedback = JSON.parse(localStorage.getItem('feedback'));
    return storedFeedback || initialFeedbackCount;
  });

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
      <Description />
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

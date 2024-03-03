// import styles from './Feedback.module.css';

export const Feedback = ({
  feedbackCount,
  totalFeedback,
  positivePercentage,
}) => {
  return (
    <>
      <p>Good: {feedbackCount.good}</p>
      <p>Neutral: {feedbackCount.neutral}</p>
      <p>Bad: {feedbackCount.bad}</p>
      <p>Total: {totalFeedback}</p>
      <p>Positive: {positivePercentage}%</p>
    </>
  );
};

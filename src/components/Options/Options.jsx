import styles from './Options.module.css';

export const Options = ({ updateFeedback, resetFeedback, totalFeedback }) => {
  return (
    <div>
      <button
        type="button"
        className={styles.button}
        onClick={() => {
          updateFeedback('good');
        }}
      >
        Good
      </button>
      <button
        type="button"
        className={styles.button}
        onClick={() => {
          updateFeedback('neutral');
        }}
      >
        Neutral
      </button>
      <button
        type="button"
        className={styles.button}
        onClick={() => {
          updateFeedback('bad');
        }}
      >
        Bad
      </button>

      {totalFeedback > 0 ? (
        <button type="button" className={styles.button} onClick={resetFeedback}>
          Reset
        </button>
      ) : null}
    </div>
  );
};

import styles from '../styles/SearchStyle.module.css';

function ExerciseCard({exercise}) {
  return (
    <div className={styles.cardContainer}>
        <div className={styles.card}>
            <picture>
                <source srcSet={exercise.gifUrl} type="image/webp" />
                <img src={exercise.gifUrl} alt={exercise.name} />
            </picture>
            <div className={styles.cardText}>  
                <h3>Name: {exercise.name}</h3>
                <h3>Equipment: {exercise.equipment}</h3>
                <p>You will imprve your {exercise.bodyPart}</p>
            </div>
        </div>
        
        <hr />
        <hr />
    </div>
  )
}

export default ExerciseCard
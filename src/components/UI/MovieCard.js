import React from 'react';


import styles from './MovieCard.module.css';
import filmImg from '../../assets/images/film1.png';

function MovieCard({ poster, id, title, shortInfo, year }) {
    return (
        <div className={styles["movie-card"]}>
            <img className={styles.poster} src={filmImg} />
            <div className={styles.wrapper}>
                <p className={styles.title}>{title}</p>
                <p className={styles.year}>{year}</p>
            </div>
            <p className={styles["short-info"]}>{shortInfo}</p>
        </div>
    );
}

export default MovieCard;
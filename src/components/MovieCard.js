import React from 'react';

import Button from './UI/Button';

import moreBtn from '../assets/images/more.png';

import styles from './MovieCard.module.css';

function MovieCard({ poster, id, title, shortInfo, year }) {
    return (
        <div className={styles["movie-card"]}>
            <img className={styles.poster} src={poster} />
            <Button className={styles["more-btn"]}><img src={moreBtn} /></Button>
            <div className={styles.wrapper}>
                <p className={styles.title}>{title}</p>
                <p className={styles.year}>{year}</p>
            </div>
            <p className={styles["short-info"]}>{shortInfo}</p>
        </div>
    );
}

export default MovieCard;
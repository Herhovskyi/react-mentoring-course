import React from 'react';

import MovieCard from './MovieCard';

import styles from './Movies.module.css';

function MovieList({movies}) {
    return (
        <div className={styles["movies-wrapper"]}>
            {movies.map((item) => {
                return (
                    <MovieCard key={item.id}
                        {...item} />
                );
            })}
        </div>
    );
}

export default MovieList;
